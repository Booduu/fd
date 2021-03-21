import * as actions from './actions.landing';

const initialState = {
    isMobile: false,
}

const landingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_IS_MOBILE:
            return {
                ...state,
                isMobile: action.data,
            }
        default: return state;
    }
}

export default landingReducer;