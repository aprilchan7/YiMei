import { request } from "./request"
//get 方式
export function getMenu() {
    return request({
        url: '/api/getMenu.do'
    })
}