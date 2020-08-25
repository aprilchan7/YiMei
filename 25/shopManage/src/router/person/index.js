const house = () =>
    import ('../views/house')
export default [{
    path: '/house',
    name: 'house',
    component: house,
    children: [{
        path: '/house/:id?',
        name: 'house',
        component: house
    }]
}]