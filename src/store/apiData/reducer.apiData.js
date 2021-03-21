import * as actions from './actions.apiData';

const initialState = {
    lives: [],
    albums: [],
    products: [],
    loader: false,
    errors: null,
};

const apiDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.REQUEST_CREATE_LIVE:
        case actions.REQUEST_DELETE_LIVE:
        case actions.REQUEST_EDIT_LIVE:

        case actions.REQUEST_CREATE_ALBUM:
        case actions.REQUEST_DELETE_ALBUM:
        case actions.REQUEST_EDIT_ALBUM:

        case actions.REQUEST_CREATE_PRODUCT:
        case actions.REQUEST_DELETE_PRODUCT:
        case actions.REQUEST_GET_PRODUCT:

        case actions.REQUEST_GET_LIVES:
        case actions.REQUEST_GET_PRODUCTS:
        case actions.REQUEST_GET_ALBUMS:

            return {
                ...state,
                loader: true,
            }

        case actions.REQUEST_GET_LIVES_FAIL:
        case actions.REQUEST_CREATE_LIVE_FAIL:
        case actions.REQUEST_EDIT_LIVE_FAIL:
        case actions.REQUEST_CREATE_PRODUCT_FAIL:
        case actions.REQUEST_EDIT_PRODUCT_FAIL:
        case actions.REQUEST_EDIT_ALBUM_FAIL:
        case actions.REQUEST_CREATE_ALBUM_FAIL:

            return {
                ...state,
                loader: false,
                errors: { ...action.error.response.data.errors }
            }
            
        case actions.REQUEST_CREATE_ALBUM_SUCCESS:
            const newAlbumList = [...state.albums].concat(action.album);
            return {
                ...state,
                loader: false,
                albums: newAlbumList,
            }; 

        case actions.REQUEST_CREATE_PRODUCT_SUCCESS:
            const newProductsList = [...state.products].concat(action.product);
            const albumsSortedNew = newProductsList.sort((a, b) => {
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            }) 
            return {
                ...state,
                loader: false,
                products: albumsSortedNew,
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
            const livesSort = newListLives.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            }) 
            return {
                ...state,
                loader: false,
                lives: livesSort,
            };

        case actions.REQUEST_GET_LIVES_SUCCESS:
            const livesList = [...action.lives];
            const livesSortedNew = livesList.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            }) 
            return {
                ...state,
                loader: false,
                lives: livesSortedNew,
            };

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

        case actions.REQUEST_EDIT_PRODUCT_SUCCESS:
            const listProducts = [ ...state.products];
            const indexProduct = listProducts.findIndex(p => p._id === action.product._id);
            listProducts[indexProduct] = action.product
            return {
                ...state,
                loader: false,
                products: listProducts,
            };

        case actions.REQUEST_DELETE_ALBUM_SUCCESS:
            const albumsAfterDeleteOne = [...state.albums].filter(a => a._id !== action.album._id);
            return {
                ...state,
                loader: false,
                albums: albumsAfterDeleteOne,
            };

        case actions.INITAILIZE_ERROR:
            return {
                ...state,
                errors: null,
            }

        case actions.REQUEST_GET_ALBUMS_SUCCESS:
            const livesSorted = action.album.sort((a, b) => {
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            }) 
            return {
                ...state,
                loader: false,
                albums:  [...livesSorted]
            };  
            
        case actions.REQUEST_EDIT_ALBUM_SUCCESS:
            const myAlbums = [...state.albums];
            const indexAlbumModified = myAlbums.findIndex(a => a._id === action.album._id);
            myAlbums[indexAlbumModified] = action.album;
            const albumsSorted = myAlbums.sort((a, b) => {
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            }) 
            return {
                ...state,
                loader: false,
                albums:  [...albumsSorted]
            };  
        default: return state;
    }
}

export default apiDataReducer;


// case actions.REQUEST_DELETE_LIVE_FAIL:
// case actions.REQUEST_DELETE_PRODUCT_FAIL:
// case actions.REQUEST_GET_PRODUCTS_FAIL:
// case actions.REQUEST_GET_PRODUCT_FAIL:
// case actions.REQUEST_DELETE_ALBUM_FAIL:
// case actions.REQUEST_GET_ALBUMS_FAIL: