const baby = () =>
    import ('../views/baby')
export default [{
    path: '/baby/:id?',
    name: 'baby',
    component: baby
}]