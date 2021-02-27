import * as actions from './actions.discography';

const initialState = {
    albums: [],
}

const discographyReducer = (state= initialState, action) => {
    switch(action.type) {
        case actions.CREATE_ALBUM_SUCCESS:
            const newAlbumList = [...state.albums].concat(action.result);
            return {
                ...state,
                albums: newAlbumList
            };
        case actions.GET_LIST_ALBUM:
            console.log('CREATE_ALBUM_SUCCESS', action.result);
            return state;
        case actions.GET_LIST_ALBUM_SUCCESS:
            console.log('GET_LIST_ALBUM_SUCCESS', action.result);
            return {
                ...state,
                albums:  [...action.result]
            };
        case actions.DELETE_ALBUM_SUCCESS:
            const albumsAfterDeleteOne = [...state.albums].filter(a => a._id !== action.album._id);
            return {
                ...state,
                albums: albumsAfterDeleteOne,
            };
        case actions.EDIT_ALBUM_SUCCESS:
            const newList = [ ...state.albums];
            const index = newList.findIndex(a => a._id === action.result._id);
            newList[index] = action.result;
            return {
                ...state,
                albums: newList,
            };
        
        case actions.EDIT_ALBUM_COVER:
            return state;
            
        default: return state;
    }
};

export default discographyReducer;