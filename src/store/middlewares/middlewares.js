import * as actions from '../actions';
import { closeDialog } from '../dialogs/actions.dialogs';
import { initializeError } from '../apiData/actions.apiData';




const myMiddleware = (store) => next => action => {
    next(action);
    switch(action.type) {
        case actions.REQUEST_CREATE_LIVE_SUCCESS :
        case actions.REQUEST_CREATE_ALBUM_SUCCESS :
        case actions.REQUEST_CREATE_PRODUCT_SUCCESS :
        case actions.REQUEST_EDIT_PRODUCT_SUCCESS :
        case actions.REQUEST_EDIT_LIVE_SUCCESS :
        case actions.REQUEST_EDIT_ALBUM_SUCCESS :
            console.log('I m in middleware SIGN_IN_SUCCESS 2!')
                store.dispatch(closeDialog());
            break;
        case actions.CLOSE_DIALOG :
            console.log('CLOSE_DIALOG!')
                store.dispatch(initializeError());
            break;
        default:
            break;
    }
}

export default myMiddleware;