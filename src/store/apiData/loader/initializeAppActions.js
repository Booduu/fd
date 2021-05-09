import { getProducts, getAlbums, getLives } from '../actions.apiData';
import {  verifyUser } from '../../authentification/actions.authentification';
import { batch } from "react-redux";

export const INITIALIZE_APP_DONE = 'INITIALIZE_APP_DONE'; 

export const initializeAppDone = () => {
    return {
        type: INITIALIZE_APP_DONE,
    }
}

// export const initializeApp = () => {
//     return dispatch => {
//         batch(async () => {
//             dispatch(getProducts());
//             dispatch(getAlbums());
//             dispatch(getLives());
//         }).then(() => initializeAppDone())
//     }
// }

export const initializeApp = () => async (dispatch) => {
    await Promise.all([
        dispatch(getProducts()),
        dispatch(getAlbums()),
        dispatch(getLives()),
        dispatch(verifyUser()), 
    ]);
  
    return dispatch(initializeAppDone());
  };