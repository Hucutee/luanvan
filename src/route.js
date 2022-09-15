import React from "react"; 
import { useRoutes } from 'react-router-dom';
import HomePage from './Shop/Components/Pages/HomePage';
import Home from "./Shop/features/Home/Home";
import ListPage from "./Shop/features/Product/page2";
import Chitietsp from "./Shop/features/Product/Chitietsp";
import Listncc  from "./Manage/Pages/nhacungcap/Listncc";
import Listkt  from "./Manage/Pages/kichthuoc/Listkt";
import Listpgg  from "./Manage/Pages/phieugiamgia/Listpgg";
import Listkm  from "./Manage/Pages/khuyenmai/Listkm";
import Listsp  from "./Manage/Pages/sanpham/Listsp";
import Listctsp  from "./Manage/Pages/chitietsanpham/Listctsp";
import HomeManagePage from "./Manage/Component/ManagePage";
import Listlsp from "./Manage/Pages/loaisanpham/Listlsp";
import Listproduct from "./Shop/features/Product/Listproduct";
import Listhdn from "./Manage/Pages/hoadonnhap/Listhdn";
import Listcthdn from "./Manage/Pages/chitiethoadonnhap/Listcthdn";
import Dictaphone1 from "./Shop/features/Product/giongnoi";
import Texthinh from "./Shop/features/Product/texthinh";
export default function Router() {
    // https://github.com/nvnhann/nlcn/blob/main/frontend/src/Router/Router.js
    return useRoutes([
        {
            path: '/',
            element: <HomePage />,
            children: [{
                path: '/products',
                element: <Listproduct />
            },{
                path: '/',
                element: <Home />
            },{
                path: '/app',
                element: <Home />
            },{
                path: '/products/:id',
                element: <Chitietsp />
            },{
                path: '/products/gn',
                element: <Dictaphone1/>
            },{
                path: '/products/texthinh',
                element: <Texthinh/>
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
            },{
                path: '/Manager/hoadonnhap',
                element: <Listhdn/>
            },{
                path: '/Manager/chitiethoadonnhap',
                element: <Listcthdn/>
            }
        ]
        }
    ])
}
