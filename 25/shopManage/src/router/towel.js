const towel = () =>
    import ('../views/towel')
export default [{
    path: '/towel/:id?',
    name: 'towel',
    component: towel,

}]