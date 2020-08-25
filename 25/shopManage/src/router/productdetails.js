const productdetails = () =>
    import ('../components/content/productdetails')
export default [{
        path: '/productdetails/:id?',
        name: 'productdetails',
        component: productdetails
    }
]