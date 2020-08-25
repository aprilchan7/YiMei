import { request } from "./request"
//get 热销商品
export function getHotProduct() {

    //console.log(data)
    return request({
        url: '/api/getHotProduct.do',
    })
}