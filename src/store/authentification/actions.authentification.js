import apiFulldub from '../../conf/api.fulldub';


export const LOGOUT = 'LOGOUT';

export const TEST = 'TEST';
export const REQUEST_PROTECTED = 'REQUEST_PROTECTED';
export const REQUEST_PROTECTED_SUCCESS = 'REQUEST_PROTECTED_SUCCESS'; 
export const REQUEST_PROTECTED_ERROR = 'REQUEST_PROTECTED_ERROR'; 
 

// SIGNUP
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'; 
export const REQUEST_SIGNUP_SUCCESS ='REQUEST_SIGNUP_SUCCESS'; 
export const REQUEST_SIGNUP_FAIL = 'REQUEST_SIGNUP_FAIL'; 

export const requestSignUp = () => {
    return {
        type: REQUEST_SIGNUP
    }
}

export const requestSignUpSuccess = (value) => {
    console.log('requestSignInSuccess', value)
    return {
        type: REQUEST_SIGNUP_SUCCESS,
        value,
    }
}

export const requestSignUpFail = (error) => {
    console.log('requestCreateLiveFail', error)
    return {
        type: REQUEST_SIGNUP_FAIL,
        error
    }
}

export const signUp = (value) => {
    console.log('valuevaluevalue', value);
    return dispatch => {
        dispatch(requestSignUp());
        return apiFulldub.post('/user', value)
            .then(response => dispatch(requestSignUpSuccess(response.data)))
            .catch(error => dispatch(requestSignUpFail(error)))
    }
}

// SIGNIN
export const REQUEST_SIGNIN = 'REQUEST_SIGNIN'; 
export const REQUEST_SIGNIN_SUCCESS ='REQUEST_SIGNIN_SUCCESS'; 
export const REQUEST_SIGNIN_FAIL = 'REQUEST_SIGNIN_FAIL'; 

export const requestSignIn = () => {
    return {
        type: REQUEST_SIGNIN
    }
}

export const requestSignInSuccess = (value) => {
    return {
        type: REQUEST_SIGNIN_SUCCESS,
        value,
    }
}

export const requestSignInFail = (error) => {
    console.log('erooooo', error.data )

    return {
        type: REQUEST_SIGNIN_FAIL,
        error: { ...error.data },
    }
}

export const signIn = (value) => {
    return dispatch => {
        dispatch(requestSignIn());
        return apiFulldub.post('/user/login', value)
            .then(response => dispatch(requestSignInSuccess(response.data)))
            .catch(error => dispatch(requestSignInFail(error.response)))
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


// export const tt = () => {
//     return dispatch => {
//         dispatch(requestProtected());
//         return apiFulldub.get('/protected', {
//             headers: {
//             'auth-token': `${localStorage.getItem('jwtToken')}`
//             }})
//             .then( response => response.data)
//             .then(data => {
//                 const user = {...data}
//                 dispatch(requestProtectedSuccess(user))
//             },
//             error => dispatch(requestProtectedError(error))
//             )   
//     }
// }
export const tt = () => {
    return dispatch => {
        dispatch(requestProtected());
        return apiFulldub.get('/protected', {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            }})
            .then(response => response.data)
            .then(data => {
                const user = {...data}
                dispatch(requestProtectedSuccess(user))
            })
            .catch(error => dispatch(requestProtectedError(error)))    
    }
}


