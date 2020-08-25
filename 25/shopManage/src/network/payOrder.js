import { request } from "./request"
export function getPayOder() {

    //console.log(data)
    return request({
        url: 'api/getMyOder.do?state=0',
    })
}
export function addPayOder(orderNum) {
    //console.log(data)
    return request({
        url: 'api/updateOrderState.do?state=2&orderNum=' + orderNum,
    })
}