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
    editLive,
} from '../../../../store/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const AdminLives = ({
    createLive,
    editingData,
    editLive,
    errors,
    isLoading,
}) => {
    const classes = useStyles();
    const buttonValue = Object.keys(editingData).length > 0 ? "Edit" : "Save";

    const [state, setState] = useState({
        date: editingData.date || new Date(),
        city: editingData.city || '',
        place: editingData.place || '',
        name: editingData.name || '',
        ticketLink: editingData.ticketLink || '',
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

    const saveData = () => {
        const dataToSend = { ...state };
        delete dataToSend.wait;
        if (Object.keys(editingData).length > 0) {
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
                    value={state.city || ''}
                    onChange={handleChange}
                    error={errors != null && !!errors?.messages?.city}
                    helperText={errors?.messages?.city ? errors.messages.city : 'Champs requis'}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="place"
                    label="Salle / Lieux"
                    value={state.place  || ''}
                    onChange={handleChange}
                    error={errors != null && !!errors?.messages?.place}
                    helperText={errors?.messages?.place ?errors.messages.place : 'Champs requis'}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="name"
                    label="Nom"
                    value={state.name  || ''}
                    onChange={handleChange}
                    error={errors != null && !!errors?.messages?.name}
                    helperText={errors?.messages?.name ? errors.messages.name : 'Champs requis'}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="ticketLink"
                    label="ticket link"
                    value={state.ticketLink  || ''}
                    onChange={handleChange}
                    // error={errors != null && !!errors?.messages?.ticketLink}
                    // helperText={errors?.messages?.ticketLink ? errors.messages.ticketLink : ''}
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

AdminLives.propTypes = {
    editingData: PropTypes.object,
    createLive: PropTypes.func.isRequired,
    editLive: PropTypes.func.isRequired,
    errors: PropTypes.object,
}


 
export default connect(state => ({
    lives: state.apiDataReducer.lives,
    errors: state.apiDataReducer.errors,
    isLoading: state.apiDataReducer.loader,
}), {
    createLive,
    editLive,
})(AdminLives);