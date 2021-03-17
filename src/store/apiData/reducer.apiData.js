import * as actions from './actions.apiData';
import { closeDialog } from '../dialogs/actions.dialogs';
const initialState = {
    lives: [],
    albums: [],
    products: [],
    loader: false,
};

const apiDataReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actions.CREATE_ALBUM:
        case actions.DELETE_ALBUM:
        case actions.GET_ALBUMS:
            return {
                ...state,
                loader: true,
            }


        // case actions.CREATE_ALBUM_FAIL:
        case actions.DELETE_ALBUM_FAIL:
        case actions.EDIT_ALBUM_FAIL:
        case actions.GET_ALBUMS_FAIL:
            return {
                ...state,
                loader: false,
            }


        /* ALBUMS */
        // case actions.CREATE_ALBUM_SUCCESS:
        //     const newAlbumList = [...state.albums].concat(action.result);
        //     return {
        //         ...state,
        //         loader: false,
        //         albums: newAlbumList
        //     };   
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
        

        //  NEW  //
        case actions.REQUEST_CREATE_ALBUM_SUCCESS:
            const newAlbumList = [...state.albums].concat(action.album);
            return {
                ...state,
                loader: false,
                albums: newAlbumList
            }; 
            return state;

        case actions.REQUEST_CREATE_PRODUCT_SUCCESS:
            const newProductsList = [...state.products].concat(action.product);
            return {
                ...state,
                loader: false,
                products: newProductsList,
            };
        
        
        case actions.REQUEST_CREATE_LIVE_SUCCESS:
            const upadtedLivesLists = [...state.lives];
            return {
                ...state,
                loader: false,
                lives: upadtedLivesLists.concat(action.date),
            }

        case actions.REQUEST_DELETE_LIVE_SUCCESS:
            const livesAfterDeleteOnes = [...state.lives.filter(l => l._id !== action.live._id)]
            return {
                ...state,
                loader: false,
                lives: livesAfterDeleteOnes,
            }

        case actions.REQUEST_EDIT_LIVE_SUCCESS: 
            const newListLives = [...state.lives];
            const index = newListLives.findIndex(l => l._id === action.live._id);
            newListLives[index] = action.live;
            return {
                ...state,
                loader: false,
                lives: newListLives,
            };

        case actions.REQUEST_GET_LIVES_SUCCESS:
            const livesList = [...action.lives];
            return {
                ...state,
                loader: false,
                lives: livesList,
            };

        case actions.REQUEST_GET_LIVES:
        case actions.REQUEST_CREATE_LIVE:
        case actions.REQUEST_DELETE_LIVE:
        case actions.REQUEST_EDIT_LIVE:
        case actions.REQUEST_CREATE_ALBUM:
        case actions.REQUEST_CREATE_PRODUCT:
        case actions.REQUEST_DELETE_PRODUCT:
        case actions.REQUEST_GET_PRODUCTS:
        case actions.REQUEST_GET_PRODUCT:

            return {
                ...state,
                loader: true,
            }

        case actions.REQUEST_GET_LIVES_FAIL:
        case actions.REQUEST_CREATE_LIVE_FAIL:
        case actions.REQUEST_DELETE_LIVE_FAIL:
        case actions.REQUEST_EDIT_LIVE_FAIL:
        case actions.REQUEST_CREATE_ALBUM_FAIL:
        case actions.REQUEST_CREATE_PRODUCT_FAIL:
        case actions.REQUEST_DELETE_PRODUCT_FAIL:
        case actions.REQUEST_EDIT_PRODUCT_FAIL:
        case actions.REQUEST_GET_PRODUCTS_FAIL:
        case actions.REQUEST_GET_PRODUCT_FAIL:
            // console.log('FAIL', action.error.response.data)
            return {
                ...state,
                loader: false,
            }

        case actions.REQUEST_GET_PRODUCT_SUCCESS:
            return state;
    

        case actions.REQUEST_GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loader: false,
                products: action.products,
            };

        case actions.REQUEST_DELETE_PRODUCT_SUCCESS:
            const listAfterDeleteOneProducts = [ ...state.products ].filter(p => p._id !== action.product._id);
            return {
                ...state,
                loader: false,
                products: listAfterDeleteOneProducts,
            }
            // return state;

        case actions.REQUEST_EDIT_PRODUCT_SUCCESS:
            const listProducts = [ ...state.products];
            const indexProduct = listProducts.findIndex(p => p._id === action.product._id);
            listProducts[indexProduct] = action.product
            return {
                ...state,
                loader: false,
                products: listProducts,
            };

        
        default: return state;
    }
}

export default apiDataReducer;