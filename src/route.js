import React from "react"; 
import { useRoutes } from 'react-router-dom';
import HomePage from './Shop/Components/Pages/HomePage';
import Home from "./Shop/features/Home/Home";
import ListPage from "./Shop/features/Product/page2";
import Chitietsp from "./Shop/features/Product/page2/Chitietsp";
import Listncc  from "./Manage/Pages/nhacungcap/Listncc";
import HomeManagePage from "./Manage/Component/ManagePage";
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
                path: '/',
                element: <Home />
            },{
                path: '/app',
                element: <Home />
            },{
                path: '/products/:id',
                element: <Chitietsp />
            }
            
           
        ],
       

        },{
            path: '/Manager',
            element: <HomeManagePage/>,
            children: [{
                path: '/Manager/nhacungcap',
                element: <Listncc />
            }]
        }
    ])
}
