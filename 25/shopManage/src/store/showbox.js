import Vue from 'vue'
import Vuex from 'vuex'
import { getList } from '@/network/home';
Vue.use(Vuex);
const state = {
    showlist: [],
    key: '',
    root: 0,
    size: 0,
    type: 0,
    totalSize: 0
}
const getters = {
    showlist: state => state.showlist,
    key: state => state.key,
    root: state => state.root,
    size: state => state.size,
    type: state => state.type,
    totalSize: state => state.totalSize
}
const actions = {
    getshowlist({ commit }, data) {
        return getList(data)
            .then(res => {
                let data = res.data.data
                let totalSize = res.data.total
                commit('getshowlist', data)
                commit('gettotalSize', totalSize)
            })
            .catch(e => {
                console.log(e)
            })
    },
    setKey({ commit, state }, key) {
        commit('setkey', key)
    },
    setRoot({ commit, state }, key) {
        commit('setRoot', key)
    },
    setSize({ commit, state }, key) {
        commit('setSize', key)
    },
    setType({ commit, state }, key) {
        commit('setType', key)
    }

}
const mutations = {
    getshowlist(state, data, totalSize) {
        state.showlist = data;

    },
    gettotalSize(state, totalSize) {
        state.totalSize = totalSize;
        console.log(totalSize);
    },
    /* 关键字搜索 */
    setkey(state, key) {
        /* 判断是否有传递参数 没有自己构建 */
        state.key = key;
    },
    /*设置根数 */
    setRoot(state, key) {
        state.root = key;
        console.log('setRoot' + state.root);

    },
    /* 设置尺寸 */
    setSize(state, key) {
        state.size = key;
        console.log('state' + state.size);
    },
    /* 设置类型 */
    setType(state, key) {
        state.type = key;
        console.log('root' + state.type);
    }
}
export default {
    state,
    mutations,
    getters,
    actions
}