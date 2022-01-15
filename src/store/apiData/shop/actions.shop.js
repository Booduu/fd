import apiFulldub from '../../../conf/api.fulldub';

export const REQUEST_CREATE_PRODUCT = 'REQUEST_CREATE_PRODUCT'; 
export const REQUEST_CREATE_PRODUCT_SUCCESS ='REQUEST_CREATE_PRODUCT_SUCCESS'; 
export const REQUEST_CREATE_PRODUCT_FAIL = 'REQUEST_CREATE_PRODUCT_FAIL'; 

export const requestCreateProduct = () => {
    return {
        type: REQUEST_CREATE_PRODUCT
    }
}

export const requestCreateProductSuccess = (product) => {
    return {
        type: REQUEST_CREATE_PRODUCT_SUCCESS,
        product
    }
}

export const requestCreateProductFail = (error) => {
    return {
        type: REQUEST_CREATE_PRODUCT_FAIL,
        error: { ...error.data }
    }
}

export const createProduct = (product) => {
    return dispatch => {
        dispatch(requestCreateProduct());
        return apiFulldub.post('/protected/product/productcreate', product, {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            }})
            .then(response => dispatch(requestCreateProductSuccess(response.data)))
            .catch(error => dispatch(requestCreateProductFail(error.response)))
    }
}



export const REQUEST_DELETE_PRODUCT = 'REQUEST_DELETE_PRODUCT'; 
export const REQUEST_DELETE_PRODUCT_SUCCESS ='REQUEST_DELETE_PRODUCT_SUCCESS'; 
export const REQUEST_DELETE_PRODUCT_FAIL = 'REQUEST_DELETE_PRODUCT_FAIL'; 

export const requestDeleteProduct = () => {
    return {
        type: REQUEST_DELETE_PRODUCT,
    }
}

export const requestDeleteProductSuccess = (product) => {
    return {
        type: REQUEST_DELETE_PRODUCT_SUCCESS,
        product
    }
}

export const requestDeleteProductFail = (error) => {
    return {
        type: REQUEST_DELETE_PRODUCT_FAIL,
        error: { ...error.data },
    }
}

export const deleteProduct = (product) => {
    return dispatch => {
        dispatch(requestDeleteProduct());
        return apiFulldub.delete(`/protected/product/${product._id}`, {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            },
            data: {
                product
            }
        })
            .then(response => dispatch(requestDeleteProductSuccess(product)))
            .catch(error => dispatch(requestDeleteProductFail(error.response)))
    }
}


export const REQUEST_EDIT_PRODUCT = 'REQUEST_EDIT_PRODUCT'; 
export const REQUEST_EDIT_PRODUCT_SUCCESS ='REQUEST_EDIT_PRODUCT_SUCCESS'; 
export const REQUEST_EDIT_PRODUCT_FAIL = 'REQUEST_EDIT_PRODUCT_FAIL'; 

export const requestEditProduct = () => {
    return {
        type: REQUEST_EDIT_PRODUCT,
    }
}

export const requestEditProductSuccess = (product) => {
    return {
        type: REQUEST_EDIT_PRODUCT_SUCCESS,
        product
    }
}

export const requestEditProductFail = (error) => {
    return {
        type: REQUEST_EDIT_PRODUCT_FAIL,
        error: { ...error.data },
    }
}

export const editProduct = (product) => {
    return dispatch => {
        dispatch(requestEditProduct());
        return apiFulldub.patch(`/protected/product/${product._id}`, product, {
            headers: {
            'auth-token': `${localStorage.getItem('jwtToken')}`
            }})
            .then(response => dispatch(requestEditProductSuccess(response.data)))
            .catch(error => dispatch(requestEditProductFail(error.response)))
    }
}


export const REQUEST_GET_PRODUCTS = 'REQUEST_GET_PRODUCTS'; 
export const REQUEST_GET_PRODUCTS_SUCCESS ='REQUEST_GET_PRODUCTS_SUCCESS'; 
export const REQUEST_GET_PRODUCTS_FAIL = 'REQUEST_GET_PRODUCTS_FAIL'; 

export const requestGetProducts = () => {
    return {
        type: REQUEST_GET_PRODUCTS,
    }
}

export const requestGetProductsSuccess = (products) => {
    return {
        type: REQUEST_GET_PRODUCTS_SUCCESS,
        products
    }
}

export const requestGetProductsFail = (error) => {
    return {
        type: REQUEST_GET_PRODUCTS_FAIL,
        // error: { ...error.data },
    }
}

export const getProducts = () => {
    return dispatch => {
        dispatch(requestGetProducts());
        return apiFulldub.get('/product/productlist')
            .then(response => dispatch(requestGetProductsSuccess(response.data)))
            .catch(error => dispatch(requestGetProductsFail(error.reponse)))
    }
}

export const REQUEST_GET_PRODUCT = 'REQUEST_GET_PRODUCT'; 
export const REQUEST_GET_PRODUCT_SUCCESS ='REQUEST_GET_PRODUCT_SUCCESS'; 
export const REQUEST_GET_PRODUCT_FAIL = 'REQUEST_GET_PRODUCT_FAIL'; 

export const requestGetProduct = () => {
    return {
        type: REQUEST_GET_PRODUCT,
    }
}

export const requestGetProductSuccess = (product) => {
    return {
        type: REQUEST_GET_PRODUCT_SUCCESS,
        product
    }
}

export const requestGetProductFail = (error) => {
    return {
        type: REQUEST_GET_PRODUCT_FAIL,
        error: { ...error.data },
    }
}

export const getProduct = (productId) => {
    return dispatch => {
        dispatch(requestGetProduct());
        return apiFulldub.get(`/product/${productId}`)
            .then(response => dispatch(requestGetProductSuccess(response.data)))
            .catch(error => dispatch(requestGetProductFail(error.response)))
    }
}





