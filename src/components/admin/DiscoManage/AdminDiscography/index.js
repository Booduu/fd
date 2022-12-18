import React, { useState} from 'react';
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
// import InputAdornment from '@material-ui/core/InputAdornment';
// import AddIcon from '@material-ui/icons/Add';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import PropTypes from 'prop-types';

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
    const buttonValue = Object.keys(editingData).length > 0 ? "Edit" : "Save";
    const [imgState, setImgState] = useState(editingData && editingData?.cover ? editingData.cover : null);
    const [state, setState] = useState({
        title: editingData?.title || '',
        label: editingData?.label || '',
        soundcloudLink: editingData?.soundcloudLink || '',
        buyLink: editingData?.buyLink || '',
        downloadLink: editingData?.downloadLink || '',
        linkForLastAlbum: editingData?.linkForLastAlbum || '',
        releaseDate: editingData?.releaseDate || new Date(),
    });

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

        if (Object.keys(editingData).length > 0) {
            dataToSend._id = editingData._id;
            editAlbum(dataToSend);
        } 
        if (Object.keys(editingData).length === 0) {
            createAlbum(dataToSend);
        } 

    };

    return ( 
        <Grid container spacing={1} justifyContent="center" >
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
                        error={errors != null && !!errors?.messages?.title}
                        helperText={errors?.messages?.title ? errors.messages.title : 'Champs requis'}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="label"
                        label="Label"
                        value={state.label}
                        onChange={handleChange}
                        error={errors != null && !!errors?.messages?.label}
                        helperText={errors?.messages?.label ? errors.messages.label : 'Champs requis'}
                        fullWidth
                    />
                </Grid>
                {/* <Grid container item xs={12}>
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
                    </Grid> */}
                    {/* <Grid item xs={12}>
                        <List className={classes.root} subheader={<li />}>
                            {tracklist.length > 0 && tracklist[0] !== '' && tracklist.map((track, index) => (
                                <ul className={classes.ul}>
                                    <ListItem key={`item-${track}-${index}`} classes={classes.listItem}>
                                        <DeleteForeverOutlinedIcon  onClick={() => deleteTrack(index)} />
                                        <ListSubheader >{track}</ListSubheader>
                                    </ListItem>
                                </ul>
                            ))}
                        </List>
                    </Grid> 
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        name="soundcloudLink"
                        label="Lien soundcloud"
                        value={state.soundcloudLink}
                        onChange={handleChange}
                        // error={errors != null && !!errors?.messages?.soundcloudLink}
                        // helperText={errors?.messages?.soundcloudLink ? errors.messages.soundcloudLink : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="buyLink"
                        label="buy link"
                        value={state.buyLink}
                        onChange={handleChange}
                        // error={errors != null && !!errors?.messages?.buyLink}
                        // helperText={errors?.messages?.buyLink ? errors.messages.buyLink : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="downloadLink"
                        label="download link"
                        value={state.downloadLink}
                        onChange={handleChange}
                        // error={errors != null && !!errors?.messages?.downloadLink}
                        // helperText={errors?.messages?.downloadLink ? errors.messages.downloadLink : ''}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="linkForLastAlbum"
                        label="Link for last album click"
                        value={state.linkForLastAlbum}
                        onChange={handleChange}
                        // error={errors != null && !!errors?.messages?.downloadLink}
                        // helperText={errors?.messages?.downloadLink ? errors.messages.downloadLink : ''}
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
            
            <Grid item xs={12} container justifyContent="flex-end">
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

Discography.propTypes = {
    editingData: PropTypes.object,
    createAlbum: PropTypes.func.isRequired,
    editAlbum: PropTypes.func.isRequired,
    errors: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
}

Discography.defaultProps = {
    error: null,
    editingData: {},
}
 
export default connect(state => ({
    errors: state.apiDataReducer.errors,
    isLoading: state.apiDataReducer.loader,
}), {
    editAlbum,
    closeDialog,
    createAlbum,
})(Discography);
