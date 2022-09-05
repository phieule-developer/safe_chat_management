import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';
import { readLocalStorage } from '../helpers/localStorage';


const instance = axios.create({
    baseURL: "http://117.4.247.68:10800/api/v1",
    headers: {
        'content-type': 'application/json',
    }
});
instance.defaults.timeout = 2500000;

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        let data = error.response.data ? error.response.data : error.response;
        return Promise.reject(data);
    }
);
// Add a response interceptor
instance.interceptors.request.use(
    function (response) {
        return response;
    },
    function (error) {
        let data = error.response.data ? error.response.data : error.response;
        return Promise.reject(data);
    }
);
const setRequestParams = (url, params) => {
    if (typeof params === "object" && params !== null) {
        const keyParams = Object.keys(params);
        const arrayParams = [];
        for (const key of keyParams) {
            const param = key + "=" + params[key];
            arrayParams.push(param);
        }
        if (Array.isArray(arrayParams) && arrayParams.length) {
            url = url + "?" + arrayParams.join("&");
        }
    }
    return url;
};

export const request = ({ method, url, data, isAuthRequest, params, headers = {} }) => {
    return new Promise((resolve, reject) => {

        if (isAuthRequest) {

            const accessToken = readLocalStorage(ACCESS_TOKEN);
            headers['x_access_token'] = accessToken;
        }
        // set request params
        url = setRequestParams(url, params);

        instance({ method, url, data, headers })
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};
