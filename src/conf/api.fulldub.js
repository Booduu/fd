import * as axios from 'axios';

const apiFulldub = axios.create({
    // baseURL: 'https://boodu.fr',
    baseUrl: `https://fulldub.fr`
})

apiFulldub.interceptors.request.use( req => {
    // req.headers['Authorization'] =  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTQ5OTk4YWEzNGQ4YTA0MjhlNGY0Njc5NTc0MTM0YyIsInN1YiI6IjVmNDc5MmJlODEzY2I2MDAzNjhjYTM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q9erEZ0XAq2dn1qFPI7Oq5DXLoKlZ1lmSXK8qDWCkNE',
    // req.headers = {
    //     'auth-token': `${localStorage.getItem('jwtToken')}`
    //     };
    return req;
})

export default apiFulldub;
