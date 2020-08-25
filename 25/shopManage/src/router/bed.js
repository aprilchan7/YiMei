const bed = () =>
    import ('../views/bed');
export default [{
    path: '/bed/:id?',
    name: 'bed',
    component: bed,
}]