import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import bed from './bed'
import clean from './clean'
import house from './house'
import lifeapp from './lifeapp'
import slipper from './slipper'
import towel from './towel'
import underwear from './underwear'
import baby from './baby'
import cart from './cart'
import order from './order'
import paybyway from './paybyway'
import person from './person'
import productdetails from './productdetails'
Vue.use(VueRouter)

const routes = [...home, ...baby, ...bed, ...clean, ...house, ...lifeapp, ...slipper, ...towel, ...underwear, ...productdetails, ...cart, ...person, ...order, ...paybyway]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router