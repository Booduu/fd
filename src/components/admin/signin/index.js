import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signIn } from '../../../store/actions';
import { Redirect } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignIn = ({ 
  signIn, 
  auth,
}) => {
    const classes = useStyles();
    const [state, setState] = useState({
      email: '',
      password: '',
    });

    const handleSubmit = () => {
      console.log('OOIOIOIO', state)

        signIn(state);
    };

    const handleChange = (value, type) => {
        setState({
          ...state,
          [type]: value,
        })
    };

    if (auth.isLoggedIn === true) {
      return <Redirect to="/home" />
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            onChange={(event) => handleChange(event.target.value, 'email')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={(event) => handleChange(event.target.value, 'password')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSubmit()}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/admin/signup">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}

export default connect(state => ({
  auth: state.authentificationReducer.auth,
}), { signIn })(SignIn);
