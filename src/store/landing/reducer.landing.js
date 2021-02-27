import * as actions from './actions.landing';

const initialState = {
    isMobile: false,
}

const landingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_VIDEO:
            console.log('GET_VIDEO')
            return state;
        case actions.GET_VIDEO_SUCCESS:

            console.log('GET_VIDEO_SUCCESS', action)
            return state;
        case actions.GET_VIDEO_FAIL:
            console.log('GET_VIDEO_FAIL')
            return state;
        
        case actions.GET_IS_MOBILE:
            return {
                ...state,
                isMobile: action.data,
            }
        default: return state;
    }
}

export default landingReducer;