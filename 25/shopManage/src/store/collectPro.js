import Vue from 'vue'
import Vuex from 'vuex'
import { showCollect,CollectProSrc,deleteCollectPro } from '@/network/showCollect';
Vue.use(Vuex);


const state = {
  collectProList:[],
  myP_Id: ''
}


const getters = {
  /*展示收藏*/
  showCartList(state){
    // console.log(state.collectProList);
    return state.collectProList;
  }
}


const actions = {
  showPro(){
    state.collectProList=[];
    let UId=window.pageConfig.userInfo.UId;
    let mypid;//图片ID

    showCollect(UId)
      .then(rep=> {

        mypid = rep.data.data;
        console.log("mypid的长度是" + mypid.length);
        console.log(mypid);

        let mm = mypid.forEach(item => {
          console.log(item);
          CollectProSrc(item.PId)
            .then(rep => {
              console.log(rep.data.data[0]);
              let mma = Object.assign(rep.data.data[0], {PId: item.PId})
              console.log(mma)
              state.collectProList.push(mma);
            })
            .catch(e => {
              console.log(e);
            })
        })
      })
  },



  /*删除收藏*/
  deleteCollect(ctx,product){
    ctx.commit('delThisShop',product);
  }

}



const mutations = {
  /*删除收藏产品*/
  delThisShop(state,product){
    // console.log(product);
    state.collectProList.map((item,index)=>{
      if(item.PId==product.PId){
        state.collectProList.splice(index,1);
      }
    });
    /*该产品ID*/
    let PId=product.PId;
    /*用户ID*/
    let UId=window.pageConfig.userInfo.UId;

    let data={PId,UId};
    deleteCollectPro(data)
      .then((rep)=>{
        console.log(rep.data.message);
      })

  }
}


export default {
  state,
  mutations,
  getters,
  actions
}
