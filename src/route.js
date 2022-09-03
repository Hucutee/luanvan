import React from "react"; 
import { useRoutes } from 'react-router-dom';
import HomePage from './Shop/Components/Pages/HomePage';
import Home from "./Shop/features/Home/Home";
import ListPage from "./Shop/features/Product/page2";
import Chitietsp from "./Shop/features/Product/page2/Chitietsp";
import Listncc  from "./Manage/Pages/nhacungcap/Listncc";
import Listkt  from "./Manage/Pages/kichthuoc/Listkt";
import Listpgg  from "./Manage/Pages/phieugiamgia/Listpgg";
import Listkm  from "./Manage/Pages/khuyenmai/Listkm";
import Listsp  from "./Manage/Pages/sanpham/Listsp";
import Listctsp  from "./Manage/Pages/chitietsanpham/Listctsp";

import HomeManagePage from "./Manage/Component/ManagePage";
import Listlsp from "./Manage/Pages/loaisanpham/Listlsp";
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
            },{
                path: '/Manager/kichthuoc',
                element: <Listkt/>
            },{
                path: '/Manager/loaisanpham',
                element: <Listlsp/>
            },{
                path: '/Manager/phieugiamgia',
                element: <Listpgg/>
            },{
                path: '/Manager/khuyenmai',
                element: <Listkm/>
            },{
                path: '/Manager/sanpham',
                element: <Listsp/>
            },{
                path: '/Manager/chitietsanpham',
                element: <Listctsp/>
            }
        ]
        }
    ])
}
