import { request } from "./request";

export function register(data) {

    return request({
        url: '/api/register.do',
        data: data,
        method: 'post',

    })
}