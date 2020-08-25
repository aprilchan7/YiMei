import { request } from "./request"


export function getProductDetail(id) {

    return request({
        url: '/api/getProductDetail.do?Pro_Id=' + id //产品详情

    })
}
export function getComment(id) {
    console.log(id)
    return request({
        url: '/api/getProductComment.do?Pro_Id=' + id //产品详情

    })
}