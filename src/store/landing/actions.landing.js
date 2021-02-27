export const GET_VIDEO = 'GET_VIDEO';
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEO_FAIL = 'GET_VIDEO_FAIL';

export const getVideo = () => {
    return {
        types: [GET_VIDEO, GET_VIDEO_SUCCESS, GET_VIDEO_FAIL],
        promise: client => client.get('/video'),
    }
};

export const GET_IS_MOBILE = 'GET_IS_MOBILE';

export const getIsMobile = (data) => {
    return {
        type: GET_IS_MOBILE,
        data,
    }
};
