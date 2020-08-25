import { request } from "./request"

export function addcomment(data) {

  //console.log(data)
  return request({
    url: '/api/addComment.do',
    data: data,
    method: 'post'
  })
}

export function updateOrderState(orderNum,state) {

  //console.log(data)
  return request({
    url: '/api/updateOrderState.do?orderNum='+orderNum +'&state='+state,
  })
}
