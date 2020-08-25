import { request } from "./request"
export function getProductListByKey(key) {
    return request({
        url: '/api/getProductListByKey.do?key=' + key //根据

    })
}