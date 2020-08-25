import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueCookies from 'vue-cookies';
import { Plugin } from "vue-fragment";
import moment from 'moment'
import ElementUI from 'element-ui' // 引入饿了么的组件
import 'element-ui/lib/theme-chalk/index.css' // 引入饿了么的组件样式

//vueX
Vue.use(ElementUI);
// fragment, 空节点
Vue.use(Plugin);

Vue.config.productionTip = false
Vue.prototype.$cookie = VueCookies;
//全局过滤器
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
        //es5函数参数设置默认值
        //const lastFormatString = formatString || ''


        // moment(input) 把时间字符串转成时间对象
        // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
        return moment(input).format(formatString)
    })
    // Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')