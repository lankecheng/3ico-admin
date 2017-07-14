import axios from 'axios';

const instance = axios.create({
    baseURL: API_ORIGIN,
    // withCredentials: true
});

export const setHeader = (key, val) => {
    instance.defaults.headers.common[key] = val;
};

const handleError = function (err) {
    return Promise.reject(err);
};

export default {
    get(url, options = {}) {
        return instance.get(url, options)
        .catch(handleError);
    },
    post(url, options = {}) {
        return instance.post(url, options)
        .catch(handleError);
    },
    put(url, options = {}) {
        return instance.put(url, options)
        .catch(handleError);
    },
    delete(url, options = {}) {
        return instance.delete(url, options)
        .catch(handleError);
    }
};
