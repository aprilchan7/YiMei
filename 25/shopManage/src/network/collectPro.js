import { request } from "./request"

export function collectPro(data) {

  //console.log(data)
  return request({
    url: '/api/collect.do',
    data: data,
    method: 'post'
  })
}
