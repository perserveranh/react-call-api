import React from 'react';
import Home from './containers/Home/home';
import NotFound from './containers/Notfound/notfound';
import ProductLists from './containers/ProductList/productlist';

const routes = [
    {
        path:'/',
        exact: true,
        main: () => <Home />
    },
    {
        path:'',
        main: () => <NotFound />
    },
    {
        path:'/product',
        exact:true,
        main:() => <ProductLists />
    }

];

export default routes;