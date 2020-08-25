const home = () =>
    import ('../views/home')
    /*这是登录*/
import denglu from '../views/login/components/denglu'
/*这是注册*/
import zhuce from '../views/login/components/zhuce'
/*这是忘记密码*/
import forgetPwd from '../views/login/components/forgetPwd'
const product = () =>
    import ('../views/home/product')
export default [{
        path: '/home/:id?',
        name: 'home',
        component: home
    },
    {
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/denglu',
        name: 'denglu',
        component: denglu
    },
    {
        path: '/zhuce',
        name: 'zhuce',
        component: zhuce
    },
    {
        path: '/forgetPwd',
        name: 'forgetPwd',
        component: forgetPwd
    },
    {
        path: '/product/:id?',
        name: 'product',
        component: product
    }
]