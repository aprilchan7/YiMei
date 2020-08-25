import { request } from "./request"


export function getUserInfo(id) { //获取个人资料
    return request({
        url: '/api/getUserInfo.do'
    })
}
export function updataUserInfo(data) { //个人资料保存
    return request({
        url: '/api/updataUserInfo.do',
        data: data,
        method: 'post'
    })
}
// export function getMyOder(id) {//获取我的订单用户信息
//   return request({
//     url: '/api/getMyOder.do'
//   })
// }
export function getComment(currentPage, pageSize) { //获取我的订单用户信息
    return request({
        url: '/api/getComment.do?currentPage=' + currentPage + '&pageSize=' + pageSize,
    })
}

export function updataPass(data) { //获取我的订单用户信息
    return request({
        url: '/api/updataPass.do',
        data: data,
        method: 'post'
    })
}
export function addMyAddress(data) { //保存我的收获地址
    return request({
        url: '/api/addMyAddress.do',
        data: data,
        method: 'post'
    })
}


export function getMyAddress() { //获取我的收获地址
    return request({
        url: '/api/getMyAddress.do',

    })
}

export function delMyAddress(data) { //删除我的订单用户信息
    return request({
        url: '/api/delMyAddress.do',
        data: data,
        method: 'post'

    })
}
export function updateMyAddress(data) { //删除我的订单用户信息
    return request({
        url: '/api/updateMyAddress.do',
        data: data,
        method: 'post'

    })
}
export function updataUserINV(data) { //发票信息修改
    return request({
        url: '/api/updataUserINV.do',
        data: data,
        method: 'post'

    })
}
export function getUserINV(id) { //获取我的订单用户信息
    return request({
        url: '/api/getUserINV.do'
    })
}

export function updataPhoe(data) { //发票信息修改
    return request({
        url: '/api/updataPhoe.do',
        data: data,
        method: 'post'

    })
}


export function baoCunNew(data) { //个人资料保存
    return request({
        url: '/api/getUserBC.do',
        data: data,
        method: 'post'
    })
}
export function getMyOder(state) { //获取我的订单用户信息
    return request({
        url: '/api/getMyOder.do?state=' + state
    })
}
export function getMymessage(currentPage, pageSize) { //我的消息
    console.log(currentPage, pageSize);

    return request({
        url: '/api/getMyMessage.do?currentPage=' + currentPage + '&pageSize=' + pageSize,

    })
}
export function getDleMessage(id) { //删除我的消息
    console.log(id)
    return request({
        url: '/api/deleteMyMessage.do?message_Id=' + id,
    })
}
export function getPoints(currentPage, pageSize) { //积分详情
    return request({
        url: '/api/getMyIntegralDetail.do?currentPage=' + currentPage + '&pageSize=' + pageSize

    })
}