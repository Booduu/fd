export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCT_FAIL';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT';
export const GET_ONE_PRODUCT_SUCCESS = 'GET_ONE_PRODUCT_SUCCESS';
export const GET_ONE_PRODUCT_FAIL = 'GET_ONE_PRODUCT_FAIL';

export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAIL = 'EDIT_PRODUCT_FAIL';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

export const createProduct = (data) => {
    return {
        types: [CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL],
        promise: client => client.post('/product/productcreate', {
            data
        })
    }
}

export const getListProducts = () => {
    console.log('getListProducts');
    return {
        types: [GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL],
        promise: client => client.get('/product/productlist')
    }
}

export const getOneProduct = (id) => {
    return {
        types: [GET_ONE_PRODUCT, GET_ONE_PRODUCT_SUCCESS, GET_ONE_PRODUCT_FAIL],
        promise: client => client.get(`/product/${id}`)
    }
}

export const editProduct = (data) => {
    console.log('editProduct', data);
    return {
        types: [EDIT_PRODUCT, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL],
        promise: client => client.patch(`/product/${data._id}`, {
            data
        }),
        data,
    }
}

export const deleteProduct = (data) => {
    console.log('data', data)
    return {
        types: [DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL],
        promise: client => client.del(`/product/${data._id}`, {
            data
        }),
        data,
    }
}