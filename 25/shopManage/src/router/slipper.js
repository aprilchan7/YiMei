const slipper = () =>
    import ('../views/slipper')
export default [{
    path: '/slipper/:id?',
    name: 'slipper',
    component: slipper,

}]