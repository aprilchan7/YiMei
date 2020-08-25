import { request } from "./request";

export function login(data) {

    return request({
        url: '/api/login.do',
        data: data,
        method: 'post',

    })
}
export function exitLogin() {

    return request({
        url: '/api/exitLogin.do'

    })
}