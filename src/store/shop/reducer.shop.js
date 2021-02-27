import * as actions from './actions.shop';

const initialState = {
    products: [],
}

const shopReducer = (state= initialState, action) => {
    switch(action.type) {

        case actions.CREATE_PRODUCT_SUCCESS:
            const newProductsList = [...state.products].concat(action.result);
            return {
                ...state,
                products: newProductsList,
            };
        
        case actions.GET_LIST_PPRODUCT_SUCCESS:
            return {
                ...state,
                products: action.result,
            };

        case actions.GET_ONE_PPRODUCT_SUCCESS:
            console.log('GET_ONE_PPRODUCT_SUCCESS')
            return state;

        case actions.EDIT_PPRODUCT_SUCCESS:
            const listProducts = [ ...state.products];
            const index = listProducts.findIndex(p => p._id === action.result._id);
            listProducts[index] = action.result
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
};

export default shopReducer; 