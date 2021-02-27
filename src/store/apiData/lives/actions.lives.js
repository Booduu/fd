export const CREATE_LIVE = 'TEST';
export const CREATE_LIVE_SUCCESS = 'TEST_SUCCESS';
export const CREATE_LIVE_FAIL = 'TEST_FAIL';

export const GET_LIVES = 'GET_LIVE';
export const GET_LIVES_SUCCESS = 'GET_LIVE_SUCCESS';
export const GET_LIVES_FAIL = 'GET_LIVE_FAIL';

export const DELETE_LIVES = 'DELETE_LIVES';
export const DELETE_LIVES_SUCCESS = 'DELETE_LIVES_SUCCESS';
export const DELETE_LIVES_FAIL = 'DELETE_LIVES_FAIL';

export const EDIT_LIVE = 'EDIT_LIVE';
export const EDIT_LIVE_SUCCESS = 'EDIT_LIVE_SUCCESS';
export const EDIT_LIVE_FAIL = 'EDIT_LIVE_FAIL';

export const createLive = (date) => {
    return {
        types: [CREATE_LIVE, CREATE_LIVE_SUCCESS, CREATE_LIVE_FAIL],
        promise: client => client.post('/live/livecreate', {
            data: date
        })
    }
}

export const deleteLiveItem = (live) => {
    return {
        types: [DELETE_LIVES, DELETE_LIVES_SUCCESS, DELETE_LIVES_FAIL],
        promise: client => client.del(`/live/livedelete/${live._id}`),
        live,
    }
}

export const editLiveItem = (live) => {
    return {
        types: [EDIT_LIVE, EDIT_LIVE_SUCCESS, EDIT_LIVE_FAIL],
        promise: client => client.patch(`/live/${live._id}`, {
            data: live
        }),
        live,
    }
}

export const getLives = () => {
    return {
        types: [GET_LIVES, GET_LIVES_SUCCESS, GET_LIVES_FAIL],
        promise: client => client.get('/live/livelist'),
    }
}
