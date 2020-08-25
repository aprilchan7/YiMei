import Vue from 'vue'
import Vuex from 'vuex'
import { getAddresslist } from '@/network/order'
Vue.use(Vuex);
const state = {
    siteData: [], // 收货地址信息
    cartData: [], // 提交的购物车信息
    checkedData: [{
        payway: '网上支付',
        whichway: '支付宝',
        payId: 16
    }], // 选中配送方式
}
const getters = {
    siteList: state => state.siteData,
    cartData: state => state.cartData,
    checkedData: state => state.checkedData,
}
const actions = {
    // 获取收货地址信息
    getSiteList({ commit }, data) {
        return getAddresslist(data)
            .then(res => {
                let data = res.data.data
                    // console.log(data)
                commit('getSiteList', data)
            })
            .catch(e => {
                console.log(e)
            })
    },
    // 提交购物车
    submitOrder(context, obj) {
        context.commit("submitOrder", obj);
    },
}
const mutations = {
    // 获取收货地址信息
    getSiteList(state, data) {
        state.siteData = data;
        // console.log(state.siteData);
    },
    // 提交购物车 
    submitOrder(state, value) {
        state.cartData = value
            // console.log(state.cartData)
    },
}
export default {
    state,
    mutations,
    getters,
    actions
}