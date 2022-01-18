import * as axios from 'axios';

const apiFulldub = axios.create({
    baseURL: `http://localhost:3030`
    // baseURL: 'https://fulldub.fr'
});

apiFulldub.interceptors.request.use( req => {
    return req;
});

export default apiFulldub;
