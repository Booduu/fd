import apiFulldub from '../../../conf/api.fulldub';
import { closeDialog } from '../../dialogs/actions.dialogs';


export const REQUEST_GET_LIVES = 'REQUEST_GET_LIVES'; 
export const REQUEST_GET_LIVES_SUCCESS ='REQUEST_GET_LIVES_SUCCESS'; 
export const REQUEST_GET_LIVES_FAIL = 'REQUEST_GET_LIVES_FAIL'; 

export const requestGetLives = () => {
    return {
        type: REQUEST_GET_LIVES
    }
}

export const requestGetLivesSuccess = (lives) => {
    return {
        type: REQUEST_GET_LIVES_SUCCESS,
        lives
    }
}

export const requestGetLivesFail = (error) => {
    console.log('requestCreateLiveFail', error)
    return {
        type: REQUEST_GET_LIVES_FAIL,
        error
    }
}

export const getLives = (live) => {
    return dispatch => {
        dispatch(requestGetLives());
        return apiFulldub.get('/live/livelist')
            .then(response => dispatch(requestGetLivesSuccess(response.data)))
            .catch(error => dispatch(requestGetLivesFail(error)))
    }
}

export const REQUEST_CREATE_LIVE = 'REQUEST_CREATE_LIVE'; 
export const REQUEST_CREATE_LIVE_SUCCESS ='REQUEST_CREATE_LIVE_SUCCESS'; 
export const REQUEST_CREATE_LIVE_FAIL = 'REQUEST_CREATE_LIVE_FAIL'; 

export const requestCreateLive = () => {
    return {
        type: REQUEST_CREATE_LIVE
    }
}

export const requestCreateLiveSuccess = (date) => {
    console.log('requestCreateLiveSuccess', date)
    return {
        type: REQUEST_CREATE_LIVE_SUCCESS,
        date
    }
}

export const requestCreateLiveFail = (error) => {
    console.log('requestCreateLiveFail', error)
    return {
        type: REQUEST_CREATE_LIVE_FAIL,
        error
    }
}

export const createLive = (live) => {
    return dispatch => {
        dispatch(requestCreateLive());
        return apiFulldub.post('/live/livecreate', live)
            .then(response => {
                dispatch(requestCreateLiveSuccess(response.data));
                dispatch(closeDialog());
            })
            .catch(error => dispatch(requestCreateLiveFail(error)))
    }
}


export const REQUEST_DELETE_LIVE = 'REQUEST_DELETE_LIVE';
export const REQUEST_DELETE_LIVE_SUCCESS = 'REQUEST_DELETE_LIVE_SUCCESS';
export const REQUEST_DELETE_LIVE_FAIL = 'REQUEST_DELETE_LIVE_FAIL';

export const requestDeleteLive = () => {
    return {
        type: REQUEST_DELETE_LIVE
    }
}

export const requestDeleteLiveSuccess = (live) => {
    console.log('requestDeleteLiveSuccess', live)

    return {
        type: REQUEST_DELETE_LIVE_SUCCESS,
        live,
    }
}

export const requestDeleteLiveFail = (error) => {
    console.log('requestCreateLiveFail', error)
    return {
        type: REQUEST_DELETE_LIVE_FAIL,
        error
    }
}
export const deleteLive = (live) => {
    return dispatch => {
        dispatch(requestDeleteLive());
        return apiFulldub.delete(`/live/livedelete/${live._id}`)
            .then(response => dispatch(requestDeleteLiveSuccess(live)))
            .catch(error => dispatch(requestDeleteLiveFail(error)))
    }
}

//EDIT

export const REQUEST_EDIT_LIVE = 'REQUEST_EDIT_LIVE';
export const REQUEST_EDIT_LIVE_SUCCESS = 'REQUEST_EDIT_LIVE_SUCCESS';
export const REQUEST_EDIT_LIVE_FAIL = 'REQUEST_EDIT_LIVE_FAIL';

export const requestEditLive = () => {
    return {
        type: REQUEST_EDIT_LIVE
    }
}

export const requestEditLiveSuccess = (live) => {
    console.log('requestEditLiveSuccess', live)

    return {
        type: REQUEST_EDIT_LIVE_SUCCESS,
        live,
    }
}

export const requestEditLiveFail = (error) => {
    console.log('requestEditLiveFail', error)
    return {
        type: REQUEST_EDIT_LIVE_FAIL,
        error
    }
}
export const editLive = (live) => {
    return dispatch => {
        dispatch(requestEditLive());
        return apiFulldub.patch(`/live/${live._id}`, live)
            .then(response => {
                dispatch(requestEditLiveSuccess(live));
                // dispatch(closeDialog());
            })
            .catch(error => dispatch(requestEditLiveFail(error)))
    }
}


export const INITAILIZE_ERROR = 'INITAILIZE_ERROR';

export const initializeError = () => {
    return {
        type: INITAILIZE_ERROR,
    }
}





