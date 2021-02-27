export const CREATE_ALBUM = 'CREATE_ALBUM';
export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS';
export const CREATE_ALBUM_FAIL = 'CREATE_ALBUM_FAIL';

export const GET_LIST_ALBUM = 'GET_LIST_ALBUM';
export const GET_LIST_ALBUM_SUCCESS = 'GET_LIST_ALBUM_SUCCESS';
export const GET_LIST_ALBUM_FAIL = 'GET_LIST_ALBUM_FAIL';

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS';
export const DELETE_ALBUM_FAIL = 'DELETE_ALBUM_FAIL';

export const EDIT_ALBUM = 'EDIT_ALBUM';
export const EDIT_ALBUM_SUCCESS = 'EDIT_ALBUM_SUCCESS';
export const EDIT_ALBUM_FAIL = 'EDIT_ALBUM_FAIL';

export const EDIT_ALBUM_COVER = 'EDIT_ALBUM_COVER';
export const EDIT_ALBUM_COVER_SUCCESS = 'EDIT_ALBUM_COVER_SUCCESS';
export const EDIT_ALBUM_COVER_FAIL = 'EDIT_ALBUM_COVER_FAIL';

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
        types: [GET_LIST_ALBUM, GET_LIST_ALBUM_SUCCESS, GET_LIST_ALBUM_FAIL],
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

export  const editAlbumCover = (cover, id) => {
    return {
        types: [EDIT_ALBUM_COVER, EDIT_ALBUM_COVER_SUCCESS, EDIT_ALBUM_COVER_FAIL],
        promise: client => client.patch(`/albumcover/${id}`, {
            id,
        }),
        id,
    }
}

