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
        case actions.SIGN_UP_SUCCESS:
            localStorage.setItem('jwtToken', action.result.token );
            const newAuth = {
                isLoggedIn: true,
                user: {
                     id: action.result._id,
                    username: action.result.user.username,
                    email: action.result.user.local.email,
                    role: action.result.user.role,
                }
            }
            return {
                ...state,
                auth: newAuth,
            }; 
        case actions.SIGN_UP_ERROR:
            console.log('SIGN_UP_ERROR');
            break;
         
        case actions.SIGN_IN_SUCCESS:
            console.log('SIGN_IN_SUCCESS', action.result);
            localStorage.setItem('jwtToken', action.result.token );
            const new0uth = {
                isLoggedIn: true,
                user: {
                    id: action.result._id,
                    username: action.result.user.username,
                    email: action.result.user.local.email,
                    role: action.result.user.role,
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
                    email: action.user.local.email,
                }
            }
            return {
                ...state,
                auth: nAuth
            }
        default: return state;
    }
};

export default authentificationReducer;