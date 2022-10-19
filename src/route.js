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
import Dangnhap from "./Shop/features/Nguoidung/dangnhap";
import Carts from "./Shop/features/Carts/carts";
import Thongtincanhan from "./Shop/features/Nguoidung/thongtincanhan";
import Dangky from "./Shop/features/Nguoidung/dangky";
import Thanhtoan from "./Shop/features/Carts/thanhtoan";
import Lichsu from "./Shop/features/Nguoidung/lichsu";
import Donhang from "./Shop/features/Nguoidung/donhang";
import Donhangquanly from "./Manage/Pages/donhang/donhang";
import Dangnhapshipper from "./Shipper/dangnhap";
import HomeShipper from "./Shipper";
import Donhangshipper from "./Shipper/donhang";
import Dangnhapnhanvien from "./Manage/Component/dangnhap/dangnhap";
import Thongtinnhanvien from "./Manage/Component/dangnhap/thongtincanhan";
import Repbl from "./Manage/Pages/cskh/repbl";
import Kttt from "./Shop/features/Carts/kttt";
import RegisterForm from "./Shop/features/dn/components/authentication/register/RegisterForm";
import VerifyCode from "./Shop/features/dn/pages/authentication/VerifyCode";
import Xacthuc from "./Shop/features/Nguoidung/xacthuc";
import Quenmk from "./Shop/features/Nguoidung/quenmk";
import Resetmk from "./Shop/features/Nguoidung/resetmk";
import Dangnhapgg from "./Shop/features/Nguoidung/dangnhapgg";
export default function Router() {
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
            },{
                path: '/products/dangnhap',
                element: <Dangnhap/>
            },{
                path: '/products/dangnhapgg',
                element: <Dangnhapgg/>
            },{
                path: '/products/carts',
                element: <Carts/>
            },{
                path: '/products/thongtincanhan',
                element: <Thongtincanhan/>
            },{
                path: '/products/dangky',
                element: <Dangky/>
            },{
                path: '/products/thanhtoan',
                element: <Thanhtoan/>
            },{
                path: '/products/lichsumuahang',
                element: <Lichsu/>
            }
            ,{
                path: '/products/donhang',
                element: <Donhang/>
            },{
                path: '/products/dk',
                element: <RegisterForm/>
                
            }
            
           
        ],
       

        },{
            path: '/auth/verify',
            element: <Xacthuc/>
        },{
            path: '/auth/forgot-password',
            element: <Quenmk/>
        },{
            path: '/auth/reset-password/:token',
            element: <Resetmk/>
        },{
            path: '/Manage',
            element: <Dangnhapnhanvien/> 
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
            },{
                path: '/Manager/donhang',
                element: <Donhangquanly/>
            },{
                path: '/Manager/thongtincanhan',
                element: <Thongtinnhanvien/>
            },{
                path: '/Manager/repbl',
                element: <Repbl/>
            }
        ]
        },{
            path: '/Shipper',
            element: <HomeShipper/>,
            children: [{
                path: '/Shipper',
                element: <Dangnhapshipper/>
            },{
                path: '/Shipper/donhang',
                element: <Donhangshipper/>
            }
        ]
        },{
            path: '/kttt',
            element: <Kttt/>
        }
    ])
}
