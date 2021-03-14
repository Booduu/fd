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
        case actions.CREATE_ALBUM:
        case actions.CREATE_PRODUCT:
        case actions.DELETE_LIVE:
        case actions.DELETE_ALBUM:
        case actions.DELETE_PRODUCT:
        case actions.EDIT_LIVE:
        case actions.EDIT_ALBUM:
        case actions.EDIT_PRODUCT:
        case actions.GET_LIVES:
        case actions.GET_ALBUMS:
        case actions.GET_PRODUCTS:
            console.log('CREATE_LIVE')
            return {
                ...state,
                loader: true,
            }

        case actions.CREATE_LIVE_FAIL:
        case actions.CREATE_ALBUM_FAIL:
        case actions.CREATE_PRODUCT_FAIL:
        case actions.DELETE_LIVE_FAIL:
        case actions.DELETE_ALBUM_FAIL:
        case actions.DELETE_PRODUCT_FAIL:
        case actions.EDIT_LIVE_FAIL:
        case actions.EDIT_ALBUM_FAIL:
        case actions.EDIT_PRODUCT_FAIL: 
        case actions.GET_LIVES_FAIL:
        case actions.GET_ALBUMS_FAIL:
        case actions.GET_PRODUCTS_FAIL:
            // console.log('CREATE_LIVE_FaIL', action.error.response.text)
            // console.log('CREATE_LIVE_FaIL', action)
            console.log('FAAAAILL', action.error.response.error)


            return {
                ...state,
                loader: false,
            }

        /* LIVES */
        case actions.CREATE_LIVE_SUCCESS:
            console.log('CREATE_LIVE_SUCEESS')
            const upadtedLivesList = [...state.lives];
            return {
                ...state,
                loader: false,
                lives: upadtedLivesList.concat(action.result),
            }

        case actions.EDIT_LIVE_SUCCESS: 
            const newListLives = [...state.lives];
            const index = newListLives.findIndex(l => l._id === action.live._id);
            newListLives[index] = action.live;
            return {
                ...state,
                loader: false,
                lives: newListLives,
            };

        case actions.DELETE_LIVE_SUCCESS:
            const livesAfterDeleteOne = [...state.lives.filter(l => l._id !== action.live._id)]
            return {
                ...state,
                loader: false,
                lives: livesAfterDeleteOne,
            }
            
        case actions.GET_LIVES_SUCCESS:
            const livesList = [...action.result];
            return {
                ...state,
                loader: false,
                lives: livesList,
            };

        /* ALBUMS */
        case actions.CREATE_ALBUM_SUCCESS:
            const newAlbumList = [...state.albums].concat(action.result);
            return {
                ...state,
                loader: false,
                albums: newAlbumList
            };   
        case actions.GET_ALBUMS_SUCCESS:
            const livesSorted = action.result.sort((a, b) => {
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            }) 
            return {
                ...state,
                loader: false,
                albums:  [...livesSorted]
            };
        case actions.DELETE_ALBUM_SUCCESS:
            const albumsAfterDeleteOne = [...state.albums].filter(a => a._id !== action.album._id);
            return {
                ...state,
                loader: false,
                albums: albumsAfterDeleteOne,
            };
        case actions.EDIT_ALBUM_SUCCESS:
            const newList = [ ...state.albums];
            const indexAlbum = newList.findIndex(a => a._id === action.result._id);
            newList[indexAlbum] = action.result;
            return {
                ...state,
                loader: false,
                albums: newList,
            };
        
        /* PRODUCTS */
        case actions.CREATE_PRODUCT_SUCCESS:
            const newProductsList = [...state.products].concat(action.result);
            return {
                ...state,
                loader: false,
                products: newProductsList,
            };
        
        case actions.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loader: false,
                products: action.result,
            };

        case actions.EDIT_PRODUCT_SUCCESS:
            const listProducts = [ ...state.products];
            const indexProduct = listProducts.findIndex(p => p._id === action.result._id);
            listProducts[indexProduct] = action.result
            return {
                ...state,
                loader: false,
                products: listProducts,
            };
        
        case actions.DELETE_PRODUCT_SUCCESS:
            const listAfterDeleteOneProduct = [ ...state.products ].filter(p => p._id !== action.data._id);
            return {
                ...state,
                loader: false,
                products: listAfterDeleteOneProduct,
            }
    
        default: return state;
    }
}

export default apiDataReducer;