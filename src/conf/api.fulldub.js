import * as axios from 'axios';

// const baseURL = process.env.NODE_ENV === "production" ? 'https://fulldub.fr' : 'http://localhost:3030'

const baseURL =   'https://fulldub.fr'

const apiFulldub = axios.create({
    baseURL,
});

apiFulldub.interceptors.request.use( req => {
    return req;
});

export default apiFulldub;
