const house = () =>
    import ('../views/lifeapp')
export default [{
    path: '/lifeapp/:id?',
    name: 'lifeapp',
    component: house
}]