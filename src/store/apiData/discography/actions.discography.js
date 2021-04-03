import apiFulldub from '../../../conf/api.fulldub';

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
    console.log('requestCreateLiveFail', error.data)
    return {
        type: REQUEST_CREATE_ALBUM_FAIL,
        error: { ...error.data },
    }
}

export const createAlbum = (album) => {
    console.log('createAlbum', album);
    return dispatch => {
        dispatch(requestCreateAlbum());
        return apiFulldub.post('/protected/album/albumcreate', album, {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            }})
            .then(response => dispatch(requestCreateAlbumSuccess(response.data)))
            .catch(error => dispatch(requestCreateAlbumFail(error.response)))
    }
}

export const REQUEST_DELETE_ALBUM = 'REQUEST_DELETE_ALBUM'; 
export const REQUEST_DELETE_ALBUM_SUCCESS ='REQUEST_DELETE_ALBUM_SUCCESS'; 
export const REQUEST_DELETE_ALBUM_FAIL = 'REQUEST_DELETE_ALBUM_FAIL'; 

export const requestDeleteAlbum = () => {
    return {
        type: REQUEST_DELETE_ALBUM,
    }
}

export const requestDeleteAlbumSuccess = (album) => {
    console.log('requestDeleteAlbumSuccess', album)
    return {
        type: REQUEST_DELETE_ALBUM_SUCCESS,
        album
    }
}

export const requestDeleteAlbumFail = (error) => {
    console.log('requestDeleteAlbumFail', error)
    return {
        type: REQUEST_DELETE_ALBUM_FAIL,
        error: { ...error.data },
    }
}

export const deleteAlbum = (album) => {
    console.log('deleteAlbum', album);
    return dispatch => {
        dispatch(requestDeleteAlbum());
        return apiFulldub.delete(`/protected/album/${album._id}`, {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            },
            data: {
                album
            }
        })
            .then(response => dispatch(requestDeleteAlbumSuccess(album)))
            .catch(error => dispatch(requestDeleteAlbumFail(error.response)))
    }
}

export const REQUEST_GET_ALBUMS = 'REQUEST_GET_ALBUMS'; 
export const REQUEST_GET_ALBUMS_SUCCESS ='REQUEST_GET_ALBUMS_SUCCESS'; 
export const REQUEST_GET_ALBUMS_FAIL = 'REQUEST_GET_ALBUMS_FAIL'; 

export const requestGetAlbums = () => {
    return {
        type: REQUEST_GET_ALBUMS,
    }
}

export const requestGetAlbumsSuccess = (album) => {
    console.log('requestDeleteAlbumSuccess', )
    return {
        type: REQUEST_GET_ALBUMS_SUCCESS,
        album
    }
}

export const requestGetAlbumsFail = (error) => {
    console.log('requestDeleteAlbumFail', error)
    return {
        type: REQUEST_GET_ALBUMS_FAIL,
        error: { ...error.data },
    }
}

export const getAlbums = () => {
    return dispatch => {
        dispatch(requestGetAlbums());
        return apiFulldub.get('/album/albumlist')
            .then(response => dispatch(requestGetAlbumsSuccess(response.data)))
            .catch(error => dispatch(requestGetAlbumsFail(error.response)))
    }
}


export const REQUEST_EDIT_ALBUM = 'REQUEST_EDIT_ALBUM'; 
export const REQUEST_EDIT_ALBUM_SUCCESS ='REQUEST_EDIT_ALBUM_SUCCESS'; 
export const REQUEST_EDIT_ALBUM_FAIL = 'REQUEST_EDIT_ALBUM_FAIL'; 

export const requestEditAlbum = () => {
    return {
        type: REQUEST_EDIT_ALBUM,
    }
}

export const requestEditAlbumSuccess = (album) => {
    return {
        type: REQUEST_EDIT_ALBUM_SUCCESS,
        album
    }
}

export const requestEditAlbumFail = (error) => {
    return {
        type: REQUEST_EDIT_ALBUM_FAIL,
        error: { ...error.data },
    }
}

export const editAlbum = (album) => {
    return dispatch => {
        dispatch(requestEditAlbum());
        return apiFulldub.patch(`/protected/album/${album._id}`, album, {
            headers: {
                'auth-token': `${localStorage.getItem('jwtToken')}`
            }})
            .then(response => dispatch(requestEditAlbumSuccess(response.data)))
            .catch(error => dispatch(requestEditAlbumFail(error.response)))
    }
}

