import apiFulldub from '../../../conf/api.fulldub';



// export const GET_LIVES = 'GET_LIVE';
// export const GET_LIVES_SUCCESS = 'GET_LIVE_SUCCESS';
// export const GET_LIVES_FAIL = 'GET_LIVE_FAIL';

// export const EDIT_LIVE = 'EDIT_LIVE';
// export const EDIT_LIVE_SUCCESS = 'EDIT_LIVE_SUCCESS';
// export const EDIT_LIVE_FAIL = 'EDIT_LIVE_FAIL';


// export const CREATE_LIVE = 'CREATE_LIVE';
// export const CREATE_LIVE_SUCCESS = 'CREATE_LIVE_SUCCESS';
// export const CREATE_LIVE_FAIL = 'CREATE_LIVE_FAIL';

// export const createLive = (date) => {
//     return {
//         types: [CREATE_LIVE, CREATE_LIVE_SUCCESS, CREATE_LIVE_FAIL],
//         promise: client => client.post('/live/livecreat', {
//             data: date
//         })
//     }
// }



// export const DELETE_LIVE = 'DELETE_LIVE';
// export const DELETE_LIVE_SUCCESS = 'DELETE_LIVE_SUCCESS';
// export const DELETE_LIVE_FAIL = 'DELETE_LIVE_FAIL';


// export const deleteLiveItem = (live) => {
    // return {
    //     types: [DELETE_LIVE, DELETE_LIVE_SUCCESS, DELETE_LIVE_FAIL],
    //     promise: client => client.del(`/live/livedelete/${live._id}`),
    //     live,
    // }
// }

// export const editLiveItem = (live) => {
//     return {
//         types: [EDIT_LIVE, EDIT_LIVE_SUCCESS, EDIT_LIVE_FAIL],
//         promise: client => client.patch(`/live/${live._id}`, {
//             data: live
//         }),
//         live,
//     }
// }

// export const getLives = () => {
//     return {
//         types: [GET_LIVES, GET_LIVES_SUCCESS, GET_LIVES_FAIL],
//         promise: client => client.get('/live/livelist'),
//     }
// }

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
            .then(response => dispatch(requestCreateLiveSuccess(response.data)))
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
            .then(response => dispatch(requestEditLiveSuccess(live)))
            .catch(error => dispatch(requestEditLiveFail(error)))
    }
}




