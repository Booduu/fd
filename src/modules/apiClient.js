import superagent from 'superagent';


// import request from 'superagent';
// import localStorage from 'localstorage';

// const superagent = () => request
//   .set('auth-token', `Bearer ${localStorage.getItem('jwtToken')}`);

const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class ApiClient {
    constructor() {
        methods.forEach(method =>
            this[method] = (path, { params, data, attach } = {}) => new Promise((resolve, reject) => {

                console.log('method', method, path);
                let request = superagent[method]('http://localhost:3030' + path)
                    // .set('auth-token', `Bearer ${localStorage.getItem('jwtToken')}`);
                if (params) {
                    request.query(params);
                    console.log('params')
                }

                if (attach) {
                    attach.map((item) => {
                        request.attach(item.name, item.file);
                    });
                }

                if (data) {
                    console.log('gonna send', data);
                    request.send(data);
                }

                request.end((err, res) => {
                    if (err || [200, 201].indexOf(res.status) === -1) {
                        reject(err)
                    } else {
                        resolve(res.body);
                    }
                });
            }));
    }
    empty() {}
}