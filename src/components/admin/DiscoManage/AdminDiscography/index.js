import React, { useEffect, useState} from 'react';
import { DatePicker, UploadAndCrop } from '../../../utils';
import { 
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { 
    createAlbum,
    editAlbum,
    closeDialog,
} from '../../../../store/actions';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiListSubheader-root': {
            lineHeight: '30px',
        },
    },
    button: {
      margin: theme.spacing(1),
    },
    listItem: {
        height: '30px',
    },
  }));

const Discography = ({
    editingData,
    createAlbum,
    editAlbum,
    errors,
    isLoading,
}) => {
    const classes = useStyles();
    const buttonValue = editingData != null ? "Edit" : "Save";
    const [imgState, setImgState] = useState(editingData && editingData?.cover ? editingData.cover : null);

    const [state, setState] = useState({
        title: editingData != null ? editingData.title : '',
        label: editingData != null ? editingData.label : '',
        tracklist: '',
        soundcloudLink: editingData != null ? editingData.soundcloudLink : '',
        buyLink: editingData != null ? editingData.buyLink : '',
        downloadLink: editingData != null ? editingData.downloadLink : '',
        releaseDate: editingData != null ? editingData.releaseDate : new Date(),
    });

    const [tracklist, setTracklist] = useState(editingData != null ? editingData.tracklist : []);

    const handleChange = (e) => {
        const { name } =  e.currentTarget;
            setState({
                ...state,
                [name]: e.currentTarget.value,
            });
    };

    const saveData = () => {
        const dataToSend = { 
            ...state,
            cover: imgState,
         };

        if (editingData != null) {
            dataToSend._id = editingData._id;
            editAlbum(dataToSend);
        } 
        if (editingData == null) {
            createAlbum(dataToSend);
        } 

    };

    const addTrack = () => {
        const newList = [...tracklist];
        newList.push(state.tracklist);
        setTracklist(newList);
    }

    useEffect(() => {
        setState({
            ...state,
            tracklist: '',
        });
    }, [tracklist])

    const deleteTrack = (index) => {
        const newTracklist = [ ...tracklist];
        newTracklist.splice(index, 1);
        setTracklist(newTracklist);
    }

    return ( 
        <Grid container spacing={1} justify="center" >
            <Grid container item xs={6} spacing={1}>
                <Grid item xs={12}>
                    <UploadAndCrop 
                        imgState={imgState} 
                        onChange={setImgState} 
                    />
                </Grid> 
            </Grid>
            <Grid container item xs={6} spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        name="title"
                        label="Titre"
                        value={state.title}
                        onChange={handleChange}
                        error={errors != null && errors?.title?.message}
                        helperText={errors?.title?.message ? errors.title.message : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="label"
                        label="Label"
                        value={state.label}
                        onChange={handleChange}
                        error={errors != null && errors?.label?.message}
                        helperText={errors?.label?.message ? errors.label.message : ''}
                        fullWidth
                    />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <TextField
                            name="tracklist"
                            label="Tracklist"
                            value={state.tracklist}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment disablePointerEvents={state.tracklist === ''} position="end">
                                    {state.tracklist !== '' && <AddIcon onClick={addTrack} />}
                                    </InputAdornment>,
                            }}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <List className={classes.root} subheader={<li />}>
                            {tracklist.map((track, index) => (
                                <ul className={classes.ul}>
                                    <ListItem key={`item-${track}-${index}`} classes={classes.listItem}>
                                        <DeleteForeverOutlinedIcon  onClick={() => deleteTrack(index)} />
                                        <ListSubheader >{track}</ListSubheader>
                                    </ListItem>
                                </ul>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="soundcloudLink"
                        label="Lien soundcloud"
                        value={state.soundcloudLink}
                        onChange={handleChange}
                        error={errors != null && errors?.soundcloudLink?.message}
                        helperText={errors?.soundcloudLink?.message ? errors.soundcloudLink.message : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="buyLink"
                        label="buy link"
                        value={state.buyLink}
                        onChange={handleChange}
                        error={errors != null && errors?.buyLink?.message}
                        helperText={errors?.buyLink?.message ? errors.buyLink.message : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="downloadLink"
                        label="download link"
                        value={state.downloadLink}
                        onChange={handleChange}
                        error={errors != null && errors?.downloadLink?.message}
                        helperText={errors?.downloadLink?.message ? errors.downloadLink.message : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <DatePicker 
                        label="Release"
                        onChange={(data) => {
                            setState({
                                ...state,
                                releaseDate: data,
                        }
                    )}}
                        value={state.releaseDate}
                    />
                </Grid>
            </Grid>
            
            <Grid item xs={12} container justify="flex-end">
                <Grid item xs={6} >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        onClick={saveData}
                        disabled={isLoading}
                        fullWidth
                    >
                        {buttonValue}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default connect(state => ({
    errors: state.apiDataReducer.errors,
    isLoading: state.apiDataReducer.loader,
}), {
    editAlbum,
    closeDialog,
    createAlbum,
})(Discography);
