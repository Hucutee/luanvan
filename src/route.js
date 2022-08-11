import React from "react"; 
import { useRoutes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Home from "./features/Home/Home";
import Product from "./features/Product/components/Product";
import ProductList from "./features/Product/components/ProductList";
import ListPage from "./features/Product/page2";
import Chitietsp from "./features/Product/page2/Chitietsp";
export default function Router() {
    // https://github.com/nvnhann/nlcn/blob/main/frontend/src/Router/Router.js
    return useRoutes([
        {
            path: '/',
            element: <HomePage />,
            children: [{
                path: '/products',
                element: <ListPage />
            },{
                path: '/app',
                element: <Home />
            },{
                path: '/products/:id',
                element: <Chitietsp />
            }
            
           
        ],
            

        }
    ])
}
