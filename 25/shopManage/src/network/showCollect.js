import  {request} from "./request";

export function showCollect(data) {
  return request({
    url:'/api/myCollect.do?UId='+data,
    // data:data,
    // method:'get',

  })
}


export function CollectProSrc(data) {
  return request({
    url:'/api/proSrc.do?PId='+data

  })
}


export function deleteCollectPro(data) {
  return request({
    url:'/api/deletePro.do',
    data:data,
    method:'post',

  })
}
