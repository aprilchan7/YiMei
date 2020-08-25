const clean = () =>
    import ('../views/clean')
export default [{
    path: '/clean/:id?',
    name: 'clean',
    component: clean,

}]