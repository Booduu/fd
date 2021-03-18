import React, { useState } from 'react';
import { DatePicker } from '../../../utils';
import { 
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { 
    createLive,
    closeDialog,
    editLive,
} from '../../../../store/actions';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const AdminLives = ({
    createLive,
    editingData,
    closeDialog,
    editLive,
    errors,
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
        // wait: state.city === '' || state.place === '' || state.name === '' || state.ticketLink === '',
    });

    const handleChange = (e) => {
        const { name } =  e.currentTarget;
        setState({
            ...state,
            [name]: e.currentTarget.value,
            wait: state.city === '' || state.place === '' || state.name === '' || state.ticketLink === '',
        });
    };

    // useEffect(() => {
    //     setState({
    //         ...state,
    //         wait: state.city === '' || state.place === '' || state.name === '' || state.ticketLink === '',
    //     });
    // }, [state]);

    const saveData = () => {
        const dataToSend = { ...state };
        delete dataToSend.wait;
        if (editingData != null) {
            dataToSend._id = editingData._id;
            editLive(dataToSend);

        } else {
            createLive(dataToSend);
        }       
    };

    return ( 
        <Grid container spacing={1} justify="center">
            <Grid item xs={6} container spacing={1} justify="center">
            <Grid item xs={12} container justify="flex-end">
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
                    error={errors != null && errors?.city?.message}
                    helperText={errors?.city?.message ? errors.city.message : ''}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="place"
                    label="Salle / Lieux"
                    value={state.place}
                    onChange={handleChange}
                    error={errors != null && errors?.place?.message}
                    helperText={errors?.place?.message ? errors.place.message : ''}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="name"
                    label="Nom"
                    value={state.name}
                    onChange={handleChange}
                    error={errors != null && errors?.name?.message}
                    helperText={errors?.name?.message ? errors.name.message : ''}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="ticketLink"
                    label="ticket link"
                    value={state.ticketLink}
                    onChange={handleChange}
                    error={errors != null && errors?.ticketLink?.message}
                    helperText={errors?.ticketLink?.message ? errors.ticketLink.message : ''}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} container justify="center">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    onClick={saveData}
                    // disabled={state.wait}
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
    lives: state.apiDataReducer.lives,
    errors: state.apiDataReducer.errors,
}), {
    createLive,
    // getLives,
    // editLiveItem,
    editLive,
    closeDialog,
})(AdminLives);