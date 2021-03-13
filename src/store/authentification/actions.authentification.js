import * as axios from 'axios';


export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const LOGOUT = 'LOGOUT';

export const TEST = 'TEST';
export const REQUEST_PROTECTED = 'REQUEST_PROTECTED';
export const REQUEST_PROTECTED_SUCCESS = 'REQUEST_PROTECTED_SUCCESS'; 
export const REQUEST_PROTECTED_ERROR = 'REQUEST_PROTECTED_ERROR'; 



export const signUp = (values) => {
    return {
        types: [SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR],
        promise: client => client.post('/user', {
            data: values
        })
    }
}   

export const signIn = (values) => {
    return {
        types: [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR],
        promise: client => client.post('/user/login', {
            data: values
        })
    }
} 

export const logout = () => {
    return {
        type: LOGOUT
    }
}



export const requestProtected = () => {
    return {
        type: REQUEST_PROTECTED
    }
}

export const requestProtectedSuccess = (user) => {
    return {
        type: REQUEST_PROTECTED_SUCCESS,
        user
    }
}

export const requestProtectedError = (error) => {
    return {
        type: REQUEST_PROTECTED_ERROR,
        error
    }
}

export const tt = () => {
    return dispatch => {
        dispatch(requestProtected());
        return axios.get('http://localhost:3030/protected', {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            }})
            .then( response => response.data)
            .then(data => {
                const user = {...data}
                dispatch(requestProtectedSuccess(user))
            },
            error => dispatch(requestProtectedError(error))
            )   
    }
}