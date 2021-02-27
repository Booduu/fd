import * as actions from './actions.apiData';

const initialState = {
    lives: [],
    albums: [],
    products: [],
    loader: false,
};

const apiDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE_LIVE:
            return {
                ...state,
                loader: true,
            }
        case actions.CREATE_LIVE_SUCCESS:
            const upadtedLivesList = [...state.lives];
            return {
                ...state,
                lives: upadtedLivesList.concat(action.result),
            }
        case actions.CREATE_LIVE_FAIL:
            return {
                ...state,
                loader: false,
            }

        case actions.EDIT_LIVE_SUCCESS: 
            const newListLives = [...state.lives];
            const index = newListLives.findIndex(l => l._id === action.live._id);
            newListLives[index] = action.live;
            return {
                ...state,
                lives: newListLives,
            };

        case actions.DELETE_LIVES:
            return state

        case actions.DELETE_LIVES_SUCCESS:
            const livesAfterDeleteOne = [...state.lives.filter(l => l._id !== action.live._id)]
            return {
                ...state,
                lives: livesAfterDeleteOne,
            }
        case actions.DELETE_LIVES_FAIL:
            return state
            
        case actions.GET_LIVES_SUCCESS:
            const livesList = [...action.result];
            return {
                ...state,
                lives: livesList,
            };

        case actions.CREATE_ALBUM_SUCCESS:
            const newAlbumList = [...state.albums].concat(action.result);
            return {
                ...state,
                albums: newAlbumList
            };   
        case actions.GET_LIST_ALBUM_SUCCESS:
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
            const indexAlbum = newList.findIndex(a => a._id === action.result._id);
            newList[indexAlbum] = action.result;
            return {
                ...state,
                albums: newList,
            };
        case actions.EDIT_ALBUM_COVER:
            return state;
        
        case actions.CREATE_PRODUCT_SUCCESS:
            const newProductsList = [...state.products].concat(action.result);
            return {
                ...state,
                products: newProductsList,
            };
        
        case actions.GET_LIST_PRODUCT_SUCCESS:
            console.log('eeeeee', action.result)
            return {
                ...state,
                products: action.result,
            };

        case actions.GET_ONE_PRODUCT_SUCCESS:
            console.log('GET_ONE_PRODUCT_SUCCESS')
            return state;

        case actions.EDIT_PRODUCT_SUCCESS:
            const listProducts = [ ...state.products];
            const indexProduct = listProducts.findIndex(p => p._id === action.result._id);
            listProducts[indexProduct] = action.result
            return {
                ...state,
                products: listProducts,
            };
        
        case actions.DELETE_PRODUCT_SUCCESS:
            const listAfterDeleteOneProduct = [ ...state.products ].filter(p => p._id !== action.data._id);
            return {
                ...state,
                products: listAfterDeleteOneProduct,
            }
    
        default: return state;
    }
}

export default apiDataReducer;