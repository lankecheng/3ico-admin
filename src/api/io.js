import axios from 'axios';
import {Message} from 'element-ui';
import {tokenHandle} from '../utils';
import router from '../router';

const instance = axios.create({
    baseURL: API_ORIGIN,
    headers: {
        Authorization: tokenHandle.get()
    }
});

export const setHeader = (key, val) => {
    instance.defaults.headers.common[key] = val;
};

const handle = function (res) {
    const data = res.data;
    const errCode = data.errCode;
    const errMsg = data.errMsg;
    if (errCode && errCode !== 0) {
        Message({
            message: errMsg || '未知错误',
            type: 'error'
        });
        return Promise.reject(res);
    } else {
        return Promise.resolve(res);
    }
};

const handleError = function (err) {
    const response = err.response;
    const data = response.data || {};
    const errCode = data.error_code;
    const errMsg = data.error_msg;

    switch (errCode) {
    case 20001:
    // case 20002:
        router.push({
            path: '/login'
        });
        break;
    default:
        Message({
            message: errMsg || '未知错误',
            type: 'error'
        });
        break;
    }

    return Promise.reject(err);
};

export default {
    get(url, options = {}) {
        return instance.get(url, options)
        .then(handle).catch(handleError);
    },
    post(url, data = {}, config = {}) {
        return instance.post(url, data, config)
        .then(handle).catch(handleError);
    },
    put(url, data = {}, config = {}) {
        return instance.put(url, data, config)
        .then(handle).catch(handleError);
    },
    delete(url, options = {}) {
        return instance.delete(url, options)
        .then(handle).catch(handleError);
    }
};
