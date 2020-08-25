import { request } from "./request"
export function getpaylist() {

    return request({
        url: '/api/getPayBy.do'
    })
}