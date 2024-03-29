import * as actions from './actions.dialogs';

const initialState = {
    dialogIsOpen: false,
    editingData: { },
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_DIALOG:
            return {
                ...state,
                dialogIsOpen: true,
                editingData: action.data,
            }
        case actions.CLOSE_DIALOG:
            return {
                ...state,
                dialogIsOpen: false,
                editingData: { },
            }
        default: return state;
    }
}

export default dialogsReducer;