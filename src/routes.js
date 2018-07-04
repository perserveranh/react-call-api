import React from 'react';
import Home from './components/Home/home';
import ProductList from './components/productList/productList';
import ProductAction from './components/ProductAction/productaction';
import NotFound from './components/Notfound/notfound';
const routes = [{
        path: '/',
        exact: true,

        main: () => < Home / >
    },
    {
        path: '/product-list',
        exact: false,

        main: () => < ProductList  />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history,location}) => < ProductAction location={location} history={history}/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main: ({match,history}) => <ProductAction history={history} match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => < NotFound / >
    }

];

export default routes;