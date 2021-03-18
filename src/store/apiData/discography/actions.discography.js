import apiFulldub from '../../../conf/api.fulldub';

// export const GET_ALBUMS = 'GET_ALBUMS';
// export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
// export const GET_ALBUMS_FAIL = 'GET_ALBUMS_FAIL';

// export const DELETE_ALBUM = 'DELETE_ALBUM';
// export const DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS';
// export const DELETE_ALBUM_FAIL = 'DELETE_ALBUM_FAIL';

// export const EDIT_ALBUM = 'EDIT_ALBUM';
// export const EDIT_ALBUM_SUCCESS = 'EDIT_ALBUM_SUCCESS';
// export const EDIT_ALBUM_FAIL = 'EDIT_ALBUM_FAIL';

// export const deleteAlbum = (album) => {
    // return {
    //     types: [DELETE_ALBUM, DELETE_ALBUM_SUCCESS, DELETE_ALBUM_FAIL],
    //     promise: client => client.del(`/album/${album._id}`, {
    //         data: album,
    //     }),
    //     album,
    // }
// }

// export const getAlbum = () => {
//     return {
//         types: [GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAIL],
//         promise: client => client.get('/album/albumlist'),
//     }
// }

// export const editAlbums = (album) => {
//     return {
//         types: [EDIT_ALBUM, EDIT_ALBUM_SUCCESS, EDIT_ALBUM_FAIL],
//         promise: client => client.patch(`/album/${album._id}`, {
//             data: album,
//         }),
//         album,
//     }
// } 


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
        error
    }
}

export const deleteAlbum = (album) => {
    console.log('createAlbums', album);
    return dispatch => {
        dispatch(requestDeleteAlbum());
        return apiFulldub.delete(`/album/${album._id}`, { data: album })
            .then(response => dispatch(requestDeleteAlbumSuccess(album)))
            // .catch(error => dispatch(requestDeleteAlbumFail(error)))

            //suceess sans success
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
        error
    }
}

export const getAlbums = () => {
    return dispatch => {
        dispatch(requestGetAlbums());
        return apiFulldub.get('/album/albumlist')
            .then(response => dispatch(requestGetAlbumsSuccess(response.data)))
            .catch(error => dispatch(requestGetAlbumsFail(error)))
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
        error
    }
}

export const editAlbum = (album) => {
    return dispatch => {
        console.log('OOOOO')
        dispatch(requestEditAlbum());
        return apiFulldub.patch(`/album/${album._id}`, album)
            .then(response => dispatch(requestEditAlbumSuccess(response.data)))
            .catch(error => dispatch(requestEditAlbumFail(error)))

            //suceess sans success
    }
}

