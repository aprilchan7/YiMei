import PerCenter from "../views/person/components/PerCenter";
import myorder from "../views/person/components/mysetion/myorder";
import mycomment from "../views/person/components/mysetion/mycomment";
import personalData from "../views/person/components/mysetion/personalData";
import xiuGai from "../views/person/components/mysetion/xiuGai";
import ShiAddress from "../views/person/components/mysetion/ShiAddress";
import Information from "../views/person/components/mysetion/Information";
import Mypoints from "../views/person/components/mysetion/Mypoints";
import MyCoupon from "../views/person/components/mysetion/MyCoupon";
import MyMessage from "../views/person/components/mysetion/MyMessage";
import MyCollection from "../views/person/components/mysetion/MyCollection";
import ChangeWord from "../views/person/components/mysetion/ChangeWord";
import nav from "../views/person/components/nav";
import ChangeAdd from "../views/person/components/mysetion/ChangeAdd";
import pointsDetail from "../views/person/components/mysetion/pointsDetail";
export default [{

        path: '/PerCenter',
        name: 'PerCenter',
        component: PerCenter,
        children: [{
                path: '/PerCenter/myorder',
                name: 'myorder',
                component: myorder
            },
            {
                path: '/PerCenter/mycomment',
                name: 'mycomment',
                component: mycomment
            },
            {
                path: '/PerCenter/personalData',
                name: 'personalData',
                component: personalData,
            },
            {
                path: '/PerCenter/personalData/xiuGai',
                name: 'xiuGai',
                component: xiuGai,
            },
            {
                path: '/PerCenter/ShiAddress',
                name: 'ShiAddress',
                component: ShiAddress,
            },
            {
                path: '/PerCenter/Information',
                name: 'Information',
                component: Information,
            },
            {
                path: '/PerCenter/Mypoints',
                name: 'Mypoints',
                component: Mypoints,

            },
            {
                path: '/PerCenter/MyCoupon',
                name: 'MyCoupon',
                component: MyCoupon,
            },
            {
                path: '/PerCenter/MyMessage',
                name: 'MyMessage',
                component: MyMessage,
            },
            {
                path: '/PerCenter/MyCollection',
                name: 'MyCollection',
                component: MyCollection,
            },
            {
                path: '/PerCenter/ChangeWord',
                name: 'ChangeWord',
                component: ChangeWord,
            },
            {
                path: '/PerCenter/ChangeAdd',
                name: 'ChangeAdd',
                component: ChangeAdd,
            },
            {
                path: '/PerCenter/Mypoints/pointsDetail',
                name: 'pointsDetail',
                component: pointsDetail
            },



        ]
    },
    {
        path: '/nav',
        name: 'nav',
        component: nav
    },


]