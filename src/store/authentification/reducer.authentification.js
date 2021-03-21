import * as actions from './actions.authentification';

const initialState = {
    auth: {
        isLoggedIn: false,
        user: {
            id: null,
            username: null,
            email: null,
            role: null,
        }
    },
}

const authentificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.REQUEST_SIGNUP_SUCCESS:
            localStorage.setItem('jwtToken', action.value.token );
            const newAuth = {
                isLoggedIn: true,
                user: {
                     id: action.value._id,
                    username: action.value.user.username,
                    email: action.value.user.local.email,
                    role: action.value.user.role,
                }
            }
            return {
                ...state,
                auth: newAuth,
            }; 
        case actions.REQUEST_SIGNUP_FAIL:
            console.log('REQUEST_SIGNUP_FAIL');
            break;
         
        case actions.REQUEST_SIGNIN_SUCCESS:
            localStorage.setItem('jwtToken', action.value.token );
            const new0uth = {
                isLoggedIn: true,
                user: {
                    id: action.value._id,
                    username: action.value.user.username,
                    email: action.value.user.local.email,
                    role: action.value.user.role,
                }
            }
            return {
                ...state,
                auth: new0uth,
            }; 

        case actions.LOGOUT:
            localStorage.removeItem('jwtToken');
            const removeAuth = {
                isLoggedIn: false,
                user: {
                    id : null,
                    username: null,
                    email: null
                }
            }
            return {
                ...state,
                auth: removeAuth
            }
    
        case actions.REQUEST_PROTECTED_SUCCESS:
            const nAuth = {
                isLoggedIn: true,
                user: {
                    id: action.user._id,
                    username: action.user.username,
                    email: action.user.local.email,
                }
            }
            return {
                ...state,
                auth: nAuth
            }
        case actions.REQUEST_PROTECTED_ERROR:
            return state
        
        default: return state;
    }
};

export default authentificationReducer;