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
    console.log('requestCreateLiveSuccess', product)
    return {
        type: REQUEST_CREATE_PRODUCT_SUCCESS,
        product
    }
}

export const requestCreateProductFail = (error) => {
    console.log('requestCreateLiveFail', error)
    return {
        type: REQUEST_CREATE_PRODUCT_FAIL,
        error
    }
}

export const createProduct = (product) => {
    console.log('createProducts', product);
    return dispatch => {
        dispatch(requestCreateProduct());
        return apiFulldub.post('/product/productcreate', product)
            .then(response => dispatch(requestCreateProductSuccess(response.data)))
            .catch(error => dispatch(requestCreateProductFail(error)))
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
    console.log('requestDeleteProductSuccess', product)
    return {
        type: REQUEST_DELETE_PRODUCT_SUCCESS,
        product
    }
}

export const requestDeleteProductFail = (error) => {
    console.log('requestDeleteProductFail', error)
    return {
        type: REQUEST_DELETE_PRODUCT_FAIL,
        error
    }
}

export const deleteProduct = (product) => {
    console.log('createProducts', product);
    return dispatch => {
        console.log('OOOOO')
        dispatch(requestDeleteProduct());
        return apiFulldub.delete(`/product/${product._id}`, { data: product })
            .then(response => dispatch(requestDeleteProductSuccess(product)))
            .catch(error => dispatch(requestDeleteProductFail(error)))

            //suceess sans success
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
    console.log('requestDeleteProductSuccess', product)
    return {
        type: REQUEST_EDIT_PRODUCT_SUCCESS,
        product
    }
}

export const requestEditProductFail = (error) => {
    console.log('requestDeleteProductFail', error)
    return {
        type: REQUEST_EDIT_PRODUCT_FAIL,
        error
    }
}

export const editProduct = (product) => {
    return dispatch => {
        console.log('OOOOO')
        dispatch(requestEditProduct());
        return apiFulldub.patch(`/product/${product._id}`, product)
            .then(response => dispatch(requestEditProductSuccess(response.data)))
            .catch(error => dispatch(requestEditProductFail(error)))

            //suceess sans success
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
    console.log('requestDeleteProductSuccess', )
    return {
        type: REQUEST_GET_PRODUCTS_SUCCESS,
        products
    }
}

export const requestGetProductsFail = (error) => {
    console.log('requestDeleteProductFail', error)
    return {
        type: REQUEST_GET_PRODUCTS_FAIL,
        error
    }
}

export const getProducts = () => {
    return dispatch => {
        console.log('OOOOO')
        dispatch(requestGetProducts());
        return apiFulldub.get('/product/productlist')
            .then(response => dispatch(requestGetProductsSuccess(response.data)))
            .catch(error => dispatch(requestGetProductsFail(error)))
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
    console.log('requestDeleteProductSuccess', )
    return {
        type: REQUEST_GET_PRODUCT_SUCCESS,
        product
    }
}

export const requestGetProductFail = (error) => {
    console.log('requestDeleteProductFail', error)
    return {
        type: REQUEST_GET_PRODUCT_FAIL,
        error
    }
}

export const getProduct = (productId) => {
    return dispatch => {
        console.log('OOOOO')
        dispatch(requestGetProduct());
        return apiFulldub.get(`/product/${productId}`)
            .then(response => dispatch(requestGetProductSuccess(response.data)))
            .catch(error => dispatch(requestGetProductFail(error)))
    }
}





