export const CREATE_ALBUM = 'CREATE_ALBUM';
export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS';
export const CREATE_ALBUM_FAIL = 'CREATE_ALBUM_FAIL';

export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAIL = 'GET_ALBUMS_FAIL';

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS';
export const DELETE_ALBUM_FAIL = 'DELETE_ALBUM_FAIL';

export const EDIT_ALBUM = 'EDIT_ALBUM';
export const EDIT_ALBUM_SUCCESS = 'EDIT_ALBUM_SUCCESS';
export const EDIT_ALBUM_FAIL = 'EDIT_ALBUM_FAIL';

export const createAlbum = (data) => {
    return {
        types: [CREATE_ALBUM, CREATE_ALBUM_SUCCESS, CREATE_ALBUM_FAIL],
        promise: client => client.post('/album/albumcreate', {
            data
        })
    }
}

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


