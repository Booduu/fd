import apiFulldub from '../../../conf/api.fulldub';

export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAIL = 'GET_ALBUMS_FAIL';

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS';
export const DELETE_ALBUM_FAIL = 'DELETE_ALBUM_FAIL';

export const EDIT_ALBUM = 'EDIT_ALBUM';
export const EDIT_ALBUM_SUCCESS = 'EDIT_ALBUM_SUCCESS';
export const EDIT_ALBUM_FAIL = 'EDIT_ALBUM_FAIL';

export const deleteAlbum = (album) => {
    return {
        types: [DELETE_ALBUM, DELETE_ALBUM_SUCCESS, DELETE_ALBUM_FAIL],
        promise: client => client.del(`/album/${album._id}`, {
            data: album,
        }),
        album,
    }
}

export const getAlbums = () => {
    return {
        types: [GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAIL],
        promise: client => client.get('/album/albumlist'),
    }
}

export const editAlbum = (album) => {
    return {
        types: [EDIT_ALBUM, EDIT_ALBUM_SUCCESS, EDIT_ALBUM_FAIL],
        promise: client => client.patch(`/album/${album._id}`, {
            data: album,
        }),
        album,
    }
} 


export const REQUEST_CREATE_ALBUM = 'REQUEST_CREATE_ALBUM'; 
export const REQUEST_CREATE_ALBUM_SUCCESS ='REQUEST_CREATE_ALBUM_SUCCESS'; 
export const REQUEST_CREATE_ALBUM_FAIL = 'REQUEST_CREATE_ALBUM_FAIL'; 

export const requestCreateAlbum = () => {
    return {
        type: REQUEST_CREATE_ALBUM
    }
}

export const requestCreateAlbumSuccess = (album) => {
    console.log('requestCreateLiveSuccess', album)
    return {
        type: REQUEST_CREATE_ALBUM_SUCCESS,
        album
    }
}

export const requestCreateAlbumFail = (error) => {
    console.log('requestCreateLiveFail', error)
    return {
        type: REQUEST_CREATE_ALBUM_FAIL,
        error
    }
}

export const createAlbum = (album) => {
    return dispatch => {
        dispatch(requestCreateAlbum());
        return apiFulldub.post('/album/albumcreate', album)
            .then(response => dispatch(requestCreateAlbumSuccess(response.data)))
            .catch(error => dispatch(requestCreateAlbumFail(error)))
    }
}


