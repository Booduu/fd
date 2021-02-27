import React, { useEffect, useState} from 'react';
import { DatePicker } from '../../utils';
import { 
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { 
    createLive,
    getLives,
    editLiveItem,
    closeDialog,
} from '../../../store/actions';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const AdminLives = ({
    createLive,
    editingData,
    editLiveItem,
    closeDialog,
}) => {
    const classes = useStyles();
    const buttonValue = editingData != null ? "Edit" : "Save";

    const [state, setState] = useState({
        date: editingData!= null ? editingData.date : new Date(),
        city: editingData != null ? editingData.city : '',
        place: editingData != null ? editingData.place : '',
        name: editingData != null ? editingData.name : '',
        ticketLink: editingData != null ? editingData.ticketLink : '',
        wait: true,
    });

    const handleChange = (e) => {
        const { name } =  e.currentTarget;
        setState({
            ...state,
            [name]: e.currentTarget.value,
            wait: state.city === '' || state.place === '' || state.name === '' || state.ticketLink === '',
        });
    };

    useEffect(() => {
        setState({
            ...state,
            wait: state.city === '' || state.place === '' || state.name === '' || state.ticketLink === '',
        });
    }, []);

    const saveData = () => {
        const dataToSend = { ...state };
        delete dataToSend.wait;
        if (editingData != null) {
            dataToSend._id = editingData._id;
            editLiveItem(dataToSend).then(() => closeDialog());
        } else {
            createLive(dataToSend).then(() => closeDialog());
        }       
    };

    return ( 
        <Grid container spacing={1} justify="center">
            <Grid item xs={12}>
                <DatePicker 
                    label="la grosse date que voilà"
                    onChange={(data) => {
                        setState({
                            ...state,
                            date: data,
                    }
                )}}
                    value={state.date}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="city"
                    label="Ville"
                    value={state.city}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="place"
                    label="Salle / Lieux"
                    value={state.place}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="name"
                    label="Nom"
                    value={state.name}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="ticketLink"
                    label="ticket link"
                    value={state.ticketLink}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={saveData}
                disabled={state.wait}
            >
                {buttonValue}
            </Button>
            </Grid>
        </Grid>
    );
}
 
export default connect(state => ({
    lives: state.apiDataReducer.lives,
}), {
    createLive,
    getLives,
    editLiveItem,
    closeDialog,
})(AdminLives);