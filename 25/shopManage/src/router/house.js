const house = () =>
    import ('../views/house')
export default [{
    path: '/house/:id?',
    name: 'house',
    component: house
}]