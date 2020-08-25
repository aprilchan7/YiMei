const underwear = () =>
    import ('../views/underwear')
export default [{
    path: '/underwear/:id?',
    name: 'underwear',
    component: underwear
}]