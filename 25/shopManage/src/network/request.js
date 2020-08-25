import axios from 'axios'
import { Loading } from 'element-ui';

export function request(config) {
    // console.log('axios111');

    const instance = axios.create({
            /* 1创建axios实例 */
            // baseURL: 'http://192.168.3.196:8888',
            // baseURL: '//localhost:8081',
            timeout: 5000
        })
        /* 2axios的拦截器 */
        //2.1请求拦截的作用
    instance.interceptors.request.use(
        config => {
            loading()
            return config;
        },
        err => {
            return Promise.reject(err);
        });

    // //2.2响应拦截
    instance.interceptors.response.use(res => {
            loading(false)
            return res
        }, err => {
            loading(false)
            console.log(err);
        })
        // console.log(config);

    return instance(config)
}

window.loading = function loading(loading = true) {
    let $loading = document.querySelector('#loading');
    if (!$loading && loading) {
        $loading = document.createElement('div');
        $loading.id = 'loading';
        $loading.innerHTML = '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
        document.body.appendChild($loading);
    }
    if (loading === false) {
        $loading && $loading.remove();
    }
}