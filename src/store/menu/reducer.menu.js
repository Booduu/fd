import * as actions from './actions.menu';

const initialState = {
    isOpen: false,
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_MENU:
            console.log('mm', action.bool);
            return {
                isOpen: action.bool ? !state.isOpen : false,
            }
        default: return state;
    }
}

export default menuReducer;