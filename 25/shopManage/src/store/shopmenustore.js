import Vue from 'vue'
import Vuex from 'vuex'
import { getMenu } from '@/network/shopMenu';
Vue.use(Vuex);
const state = {
    menulist: [], //菜单栏信息
    navbar: ''
}
const getters = {
    //菜单栏信息
    menulist: state => state.menulist,
    list: (state, getters) => { //可以通过形参获取getter自己，拿到购物车的信息：getter.cartProducts
        let data = getters.menulist;
        data.forEach(function(item) {
                delete item.children
            })
            // 将数据存储为 以 id 为 KEY 的 map 索引数据列
        var map = {}
        data.forEach(function(item) {
                map[item.id] = item
            })
            // console.log(map)
        var val = []
        data.forEach(function(item) {
            // 以当前遍历项，的pid,去map对象中找到索引的id
            var parent = map[item.pid]
                // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
            if (parent) {
                // parent[0].show = false
                ;
                (parent.children || (parent.children = [])).push(item)
            } else {
                //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                val.push(item)
            }
        })
        return val;
    },
    navbar: state => state.navbar
}
const actions = {
    //获取菜单栏信息
    getMenuList({ commit }) {
        getMenu()
            .then(res => {
                let data = res.data.data
                commit('getMenuList', data)
            })
            .catch(e => {
                console.log(e)
            })
    },
    /* 查找导航 */
    setNav({ commit }, str) {
        commit('setnav', str)
    }
}
const mutations = {
    getMenuList(state, data) {
        // console.log(data)
        state.menulist = data;
        // state.navbar = 
        // return state;
    },
    setnav(state, data) {
        state.navbar = data;
        // console.log(data + "setnav store");
        // console.log(state.navbar)
        // console.log(state)
        // console.log(state.menulist)
    }
}
export default {
    state,
    mutations,
    getters,
    actions
}