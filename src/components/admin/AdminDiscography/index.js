import React, { useEffect, useState} from 'react';
import { DatePicker, UploadAndCrop } from '../../utils';
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
    editAlbumCover,
} from '../../../store/actions';
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
    closeDialog,
}) => {
    const classes = useStyles();
    const buttonValue = editingData != null ? "Edit" : "Save";
    const [imgState, setImgState] = useState(editingData && editingData?.cover ? `http://localhost:3030/uploads/albums/${editingData.cover}` : '');
    const [file, setFile] = useState({});
    
    const [state, setState] = useState({
        title: editingData != null ? editingData.title : '',
        label: editingData != null ? editingData.label : '',
        tracklist: '',
        releaseDate: editingData != null ? editingData.releaseDate : new Date(),
    });
    const [wait, setWait] = useState(true);
    const [tracklist, setTracklist] = useState(editingData != null ? editingData.tracklist : []);

    const handleChange = (e) => {
        const { name } =  e.currentTarget;
            setState({
                ...state,
                [name]: e.currentTarget.value,
            });
            if (name !== 'tracklist') {
                setWait(state.title === '' || state.label === '' || tracklist.length === 0 || imgState === '')
            }
    };

    const saveData = () => {
        const dataToSend = { ...state };

        const formData = new FormData();
        formData.append('title', dataToSend.title);
        formData.append('label', dataToSend.label);
        formData.append('tracklist', tracklist);
        formData.append('releaseDate', dataToSend.releaseDate);

        if (editingData != null) {
            const isFile = file.path ? file : editingData.cover;

            formData.append('cover', isFile);
            formData.append('_id', editingData._id);

            editAlbum(formData).then(() => closeDialog());
        } 

        if (editingData == null) {
            formData.append('cover', file);
            createAlbum(formData).then(() => closeDialog());
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
        setWait(state.title === '' || state.label === '' || tracklist.length === 0 || imgState === '')
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
                        setFile={setFile}
                    />
                </Grid> 
            </Grid>
            <Grid container item xs={6}  spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        name="title"
                        label="Titre"
                        value={state.title}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="label"
                        label="Label"
                        value={state.label}
                        onChange={handleChange}
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <List className={classes.root} subheader={<li />}>
                            {tracklist.map((track, index) => (
                                // <li key={`section-${track}`} className={classes.listSection}>
                                <ul className={classes.ul}>
                                <ListItem key={`item-${track}-${index}`} classes={classes.listItem}>
                                    <DeleteForeverOutlinedIcon  onClick={() => deleteTrack(index)} />
                                    <ListSubheader >{track}</ListSubheader>
                                </ListItem>
                                </ul>
                                // </li>
                            ))}
                        </List>
                    </Grid>
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
            
            <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={saveData}
                disabled={state.title === '' || state.releaseDate == null || state.label === '' || tracklist.length === 0 || (file.path == null || imgState === '')}

            >
                {buttonValue}
            </Button>
            </Grid>
        </Grid>
     );
}
 
export default connect(null, {
    createAlbum,
    editAlbum,
    closeDialog,
    editAlbumCover,
})(Discography);
