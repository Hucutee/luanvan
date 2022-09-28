-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 28, 2022 lúc 08:53 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ct593`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_dh`
--

CREATE TABLE `chi_tiet_dh` (
  `ma_ctdh` varchar(50) NOT NULL,
  `ma_ctsp` varchar(50) NOT NULL,
  `ma_dh` varchar(50) NOT NULL,
  `so_luong` int(20) NOT NULL,
  `gia` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_dh`
--

INSERT INTO `chi_tiet_dh` (`ma_ctdh`, `ma_ctsp`, `ma_dh`, `so_luong`, `gia`) VALUES
('CTD1', 'CT043', 'DH01', 1, 36000),
('CTD2', 'CT035', 'DH01', 3, 50000),
('CTD3', 'CT018', 'DH02', 8, 27000),
('CTD4', 'CT049', 'DH02', 11, 28800);

--
-- Bẫy `chi_tiet_dh`
--
DELIMITER $$
CREATE TRIGGER `them_ctdh` BEFORE INSERT ON `chi_tiet_dh` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("CTD",SUBSTRING(ma_ctdh,4)+1) FROM chi_tiet_dh ORDER BY SUBSTRING(ma_ctdh,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_ctdh = 'CTD1';
ELSE SET NEW.ma_ctdh = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_hdn`
--

CREATE TABLE `chi_tiet_hdn` (
  `ma_cthdn` varchar(50) NOT NULL,
  `ma_hdn` varchar(50) NOT NULL,
  `ma_ctsp` varchar(50) NOT NULL,
  `so_luong_nhap` int(20) NOT NULL,
  `gia_nhap` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_hdn`
--

INSERT INTO `chi_tiet_hdn` (`ma_cthdn`, `ma_hdn`, `ma_ctsp`, `so_luong_nhap`, `gia_nhap`) VALUES
('CHN9', 'HDN2', 'CT052', 25, '8000');

--
-- Bẫy `chi_tiet_hdn`
--
DELIMITER $$
CREATE TRIGGER `them_cthdn` BEFORE INSERT ON `chi_tiet_hdn` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("CHN",SUBSTRING(ma_cthdn,4)+1) FROM chi_tiet_hdn ORDER BY SUBSTRING(ma_cthdn,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_cthdn = 'CHN1';
ELSE SET NEW.ma_cthdn = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_san_pham`
--

CREATE TABLE `chi_tiet_san_pham` (
  `ma_ctsp` varchar(50) NOT NULL,
  `ma_sp` varchar(50) NOT NULL,
  `ma_kt` varchar(50) NOT NULL,
  `soluong` int(20) NOT NULL,
  `giaban` int(20) NOT NULL,
  `thongtin` text NOT NULL,
  `ten_sp` varchar(150) DEFAULT NULL,
  `ten_kt` varchar(150) DEFAULT NULL,
  `hinhanh` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_san_pham`
--

INSERT INTO `chi_tiet_san_pham` (`ma_ctsp`, `ma_sp`, `ma_kt`, `soluong`, `giaban`, `thongtin`, `ten_sp`, `ten_kt`, `hinhanh`) VALUES
('CT018', 'SP01', 'KT03', 56, 30000, 'Sen đá xứ lạnh', 'Sen đá hoa hồng', 'Trung', '4-sen-da-hoa-hong-xanh-lon.jpg'),
('CT022', 'SP010', 'KT03', 110, 30000, 'Sen đá xứ lạnh', 'Sen đá hồng phấn', 'Trung', 'hong phan trung.jpg'),
('CT024', 'SP03', 'KT02', 110, 20000, 'Xương rồng ', 'Xương rồng thanh sơn', 'Vừa', 'xuong-rong-thanh-son-nho.jpg'),
('CT026', 'SP02', 'KT01', 110, 12000, 'Xương rồng', 'Xương rồng tay thỏ', 'Nhỏ', 'xuong-rong-tai-tho-nho.jpg'),
('CT027', 'SP011', 'KT02', 110, 50000, 'Chậu tiểu cảnh sen đá', 'Chậu tiểu cảnh sen đá', 'Vừa', 'chau cay van phong 1.jpg'),
('CT031', 'SP012', 'KT01', 130, 25000, 'Đá rải mặt Masato trọng lượng 1 kí', 'Đá Masato (1kg)', 'Nhỏ', 'masato.jpg'),
('CT033', 'SP014', 'KT03', 110, 15000, 'Thuốc tím túi 1kg', 'Thuốc tím', 'Trung', 'thuoc-tim-thai-lan.jpg'),
('CT034', 'SP013', 'KT01', 1030, 20000, 'Thuốc Coc85 bịch 20g', 'Thuốc trị nấm Coc85', 'Nhỏ', 'coc85 nho.jpg'),
('CT035', 'SP013', 'KT03', 110, 50000, 'Thuốc Coc85 bịch 100g', 'Thuốc trị nấm Coc85', 'Trung', 'COC-85-01.jpg'),
('CT036', 'SP015', 'KT01', 40, 75000, 'Chậu tiểu cảnh xương rồng nhiều loại', 'Mix xương rồng', 'Nhỏ', 'mix a.jpg'),
('CT037', 'SP015', 'KT03', 30, 100000, 'Chậu tiểu cảnh xương rồng nhiều loại', 'Mix xương rồng', 'Trung', 'mix xuong rong a.jpg'),
('CT038', 'SP016', 'KT02', 49, 65000, 'Chậu mix sen đá nhiều loại', 'Mix sen đá nhiều loại', 'Vừa', 'mix sen da 1.webp'),
('CT039', 'SP017', 'KT03', 30, 82000, 'Mix 10 loai sen đá', 'Sen đá mix 10 loại', 'Trung', 'sen đá.jpg'),
('CT040', 'SP018', 'KT01', 1010, 20000, 'Xương rồng gym nhỏ', 'Xương rồng gym', 'Nhỏ', 'gym nho.jpg'),
('CT041', 'SP018', 'KT02', 55, 40000, 'Xương rồng gym to', 'Xương rồng gym', 'Vừa', 'gym to.jpg'),
('CT043', 'SP019', 'KT01', 110, 45000, 'Xương rồng gym lem nhỏ', 'Xương rồng gym lem', 'Nhỏ', 'gym lem nho.jpg'),
('CT044', 'SP020', 'KT01', 75, 15000, 'Xương rồng bí xanh nhỏ', 'Xương rồng bí xanh', 'Nhỏ', 'bi xanh nho.jpg'),
('CT045', 'SP021', 'KT02', 66, 170000, 'Xương rồng LB lem vừa', 'Xương rồng LB lem', 'Vừa', 'lb lem.jpg'),
('CT046', 'SP019', 'KT04', 110, 170000, 'Xương rồng gym lem lớn', 'Xương rồng gym lem', 'Lớn', 'gym lem trung.jpg'),
('CT047', 'SP022', 'KT01', 0, 15000, 'Sen đá xứ lạnh', 'Sen đá phật bà', 'Nhỏ', '0-sen-da-phat-ba-dep.jpg'),
('CT048', 'SP022', 'KT03', 110, 75000, 'Sen đá xứ lạnh', 'Sen đá phật bà', 'Trung', '12c170f0ad9f3257f646260c50bf882a.jpg'),
('CT049', 'SP023', 'KT01', 55, 32000, 'Sen đá xứ lạnh', 'Sen đá pha lê', 'Nhỏ', '23c0266387ce9e142792de1c6e4e07c7.jpg'),
('CT050', 'SP023', 'KT02', 0, 50000, 'Sen đá xứ lạnh', 'Sen đá pha lê', 'Vừa', 'fbec04112ea3246fddceb252a40a2773.jpg'),
('CT051', 'SP024', 'KT04', 55, 100000, 'Sen đá xứ lạnh', 'Sen đá hồng điệu', 'Lớn', '69483c7d30644e6edc45e8238881fdad.jpg'),
('CT052', 'SP025', 'KT01', 100, 15000, 'Sen đá ưa mát', 'Sen đá Hawathia', 'Nhỏ', 'sen-da-sedum-da-quang-haworthia-cymbiformis-1.jpg'),
('CT053', 'SP026', 'KT01', 50, 50000, 'Sen đá ư mát', 'Sen đá Hawathia ngọc', 'Nhỏ', '4af503e829ea776cbddbb715bd65e658_tn.jpg'),
('CT054', 'SP027', 'KT01', 85, 75000, 'Sen đá ưa mát', 'Sen đá Hawathia vuốt đen', 'Nhỏ', '8f8950b55b25025e7b60a74cca14f47b.jpg'),
('CT055', 'SP030', 'KT03', 64, 35000, 'Sen đá ưa mát', 'Sen đá sao biển', 'Trung', 'f6592196401564bd686cb0793aa84cc0.jpg'),
('CT056', 'SP028', 'KT02', 53, 20000, 'Sen đá xứ lạnh', 'Sen thanh ngọc', 'Vừa', 'thanh-ngoc-to-2.jpg'),
('CT057', 'SP029', 'KT02', 70, 12000, 'Sen đá xứ lạnh', 'Sen đá Liên đài tím', 'Vừa', '5434f3ba476fce62ee907686152d84e9.jpg'),
('CT058', 'SP029', 'KT03', 40, 35000, 'Sen đá xứ lạnh', 'Sen đá Liên đài tím', 'Trung', '6566ae1e4f7c7102375d0898563ecfc4.jpg'),
('CT059', 'SP029', 'KT04', 60, 85000, 'Sen đá xứ lạnh', 'Sen đá Liên đài tím', 'Lớn', 'ldh.jpg'),
('CT063', 'SP031', 'KT04', 80, 200000, 'Sen đá xứ lạnh', 'Sen đá đất xanh', 'Lớn', 'cay-sen-dưqeqw.jpg'),
('CT064', 'SP032', 'KT03', 50, 50000, 'Cây cảnh văn phòng', 'Cỏ may mắn', 'Trung', 'co may man nho.jpg'),
('CT065', 'SP032', 'KT04', 100, 70000, 'Cây cảnh văn phòng', 'Cỏ may mắn', 'Lớn', 'co may man to.jpg'),
('CT066', 'SP034', 'KT05', 100, 130000, 'Đất chuyên dụng trồng sen đá', 'Đất soilmix Túi 6kg', 'Túi lớn', 'Soilimix.jpg'),
('CT067', 'SP035', 'KT02', 90, 35000, 'Sen đá xứ lạnh', 'Sen đá đế đỏ', 'Vừa', 'S_758000-MLB26295115161_112017-O.jpg'),
('CT068', 'SP036', 'KT03', 100, 120000, 'Sen đá xứ lạnh', 'Sen đá kim cương', 'Trung', 'sen-da-kim-cuong-xanh-1.jpg'),
('CT069', 'SP037', 'KT02', 200, 35000, 'Sen đá xứ lạnh', 'Sen đá tay gấu', 'Vừa', 'Sen-da-tay-gau-bear-Paw.jpg'),
('CT070', 'SP038', 'KT07', 100, 40000, 'Thuốc trị nấm', 'Thuốc trị nấm Anvil', 'Chai nhỏ', 'ANVIL-5SC-100ml.jpg'),
('CT071', 'SP039', 'KT06', 60, 65000, 'Thuốc trị rệp', 'Thuốc tím Thái', 'Túi nhỏ', '16a809279333351db996b0e5591ed2e4.jpg'),
('CT072', 'SP033', 'KT02', 30, 25000, 'Chậu gốm sứ', 'Chậu gốm sứ', 'Vừa', 'chau gom xu.jpg'),
('CT073', 'SP015', 'KT02', 50, 70000, 'Chậu tiểu cảnh xương rồng', 'Mix xương rồng', 'Vừa', 'mix xuong rong.jpg'),
('CT074', 'SP015', 'KT04', 20, 100000, 'Chậu tiểu cảnh ', 'Mix xương rồng', 'Lớn', 'mix xuong rong a.jpg'),
('CT075', 'SP016', 'KT03', 40, 65000, 'Mix sen đá nhiều loại', 'Mix sen đá nhiều loại', 'Trung', 'mix sen da 1.webp'),
('CT076', 'SP040', 'KT04', 30, 150000, 'Xương rồng kim hổ lớn', 'Xương rồng kim hổ', 'Lớn', 'edbba0062a81dda5e0f70485dfed639e.jpg'),
('CT077', 'SP042', 'KT02', 100, 50000, 'Xương rồng Aster', 'Xương rồng Aster', 'Vừa', 'hat-giong-xuong-rong-aster-1.__.jpg'),
('CT078', 'SP044', 'KT03', 30, 70000, 'Xương rồng Mickey', 'Xương rồng Mickey', 'Trung', 'cay-xuong-rong-tai-tho-trung.jpg'),
('CT079', 'SP045', 'KT03', 50, 90000, 'Chậu cảnh con cáo', 'Chậu cây con cáo', 'Trung', 'ab8a8edb4457da83b2914bdb636d5bfb.jpg'),
('CT080', 'SP046', 'KT01', 50, 30000, 'Chậu trồng cây', 'Chậu gốm nhật', 'Nhỏ', '0665b9d50eb8f90fbf857b5b8a424ee1.jpg'),
('CT081', 'SP047', 'KT02', 100, 10000, 'Chậu trồng cây', 'Chậu đất nung', 'Vừa', 'chau-dat-nung.jpg'),
('CT082', 'SP048', 'KT02', 100, 25000, 'Chậu trồng cây', 'Chậu họa tiết lá', 'Vừa', 'z2515470090222_5bb2b1f86f53988dab36f93c23eeab88.jpg'),
('CT083', 'SP050', 'KT05', 100, 12000, 'Đất trồng cây', 'Promix', 'Túi lớn', 'w-sen-da.png'),
('CT084', 'SP049', 'KT05', 100, 60000, 'Đất trồng cây', 'Namix', 'Túi lớn', 'gia-the-trong-sen-da-xuong-rong.jpg'),
('CT085', 'SP051', 'KT01', 10, 20000, 'Xẻn nhỏ', 'Xẻn nhỏ', 'Nhỏ', 'c4b59dbeecde8f1c1ddc5530e0c3c3c2.jpg'),
('CT086', 'SP052', 'KT01', 60, 5000, 'Nhíp', 'Nhíp', 'Nhỏ', '586f1066599536c83cd699f03179cd2b.jpg'),
('CT087', 'SP053', 'KT01', 100, 10000, 'Ống thổi nước', 'Ống thổi nước', 'Nhỏ', '1f66c5654c7cf5ef978968fb133a971d.jpg'),
('CT088', 'SP054', 'KT06', 100, 15000, 'Đá Lava đen', 'Đá Lava đen', 'Túi nhỏ', '653005c1bf4f4a11135e.webp'),
('CT089', 'SP055', 'KT06', 100, 20000, 'Đá Lava đỏ', 'Đá Lava đỏ', 'Túi nhỏ', 'e99681e1b3397f4a4143d21418f85c7d.jpg');

--
-- Bẫy `chi_tiet_san_pham`
--
DELIMITER $$
CREATE TRIGGER `them_ctsp` BEFORE INSERT ON `chi_tiet_san_pham` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("CT0",SUBSTRING(ma_ctsp,4)+1) FROM chi_tiet_san_pham ORDER BY SUBSTRING(ma_ctsp,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_ctsp = 'CT01';
ELSE SET NEW.ma_ctsp = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dia_chi`
--

CREATE TABLE `dia_chi` (
  `ma_dc` varchar(50) NOT NULL,
  `ten_dc` varchar(255) NOT NULL,
  `ma_nd` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `dia_chi`
--

INSERT INTO `dia_chi` (`ma_dc`, `ten_dc`, `ma_nd`) VALUES
('DC01', 'a', 'ND01'),
('DC02', 'AAAA', 'ND01');

--
-- Bẫy `dia_chi`
--
DELIMITER $$
CREATE TRIGGER `them_dc` BEFORE INSERT ON `dia_chi` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("DC0",SUBSTRING(ma_dc,4)+1) FROM dia_chi ORDER BY SUBSTRING(ma_dc,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_dc = 'DC01';
ELSE SET NEW.ma_dc = id;
END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `them_dcC` BEFORE INSERT ON `dia_chi` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("DC0",SUBSTRING(ma_dc,4)+1) FROM dia_chi ORDER BY SUBSTRING(ma_dc,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_dc = 'DC01';
ELSE SET NEW.ma_dc = id;
END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `them_dccc` BEFORE INSERT ON `dia_chi` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("DC0",SUBSTRING(ma_dc,4)+1) FROM dia_chi ORDER BY SUBSTRING(ma_dc,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_dc = 'DC01';
ELSE SET NEW.ma_dc = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `don_hang`
--

CREATE TABLE `don_hang` (
  `ma_dh` varchar(50) NOT NULL,
  `ma_kh` varchar(50) NOT NULL,
  `ma_pgg` varchar(50) NOT NULL,
  `ma_nv` varchar(50) NOT NULL,
  `ngay_dat_hang` datetime NOT NULL,
  `dia_chi_giao` varchar(255) NOT NULL,
  `hinh_thuc_thanh_toan` varchar(50) NOT NULL,
  `tong_tien` int(20) NOT NULL,
  `trang_thai` varchar(20) NOT NULL,
  `nguoi_nhan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `don_hang`
--

INSERT INTO `don_hang` (`ma_dh`, `ma_kh`, `ma_pgg`, `ma_nv`, `ngay_dat_hang`, `dia_chi_giao`, `hinh_thuc_thanh_toan`, `tong_tien`, `trang_thai`, `nguoi_nhan`) VALUES
('DH01', 'ND01', 'PGG1', 'ND01', '2022-09-28 13:49:57', 'a', '1', 186000, '0', 'Trần Hoàng Na, 0939542889'),
('DH02', 'ND01', 'PGG2', 'ND01', '2022-09-28 13:51:57', 'AAAA', '1', 522800, '0', 'Phan Hậu, 0464545454');

--
-- Bẫy `don_hang`
--
DELIMITER $$
CREATE TRIGGER `them_don_hang` BEFORE INSERT ON `don_hang` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("DH0",SUBSTRING(ma_dh,4)+1) FROM don_hang ORDER BY SUBSTRING(ma_dh,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_dh = 'DH01';
ELSE SET NEW.ma_dh = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giao_hang`
--

CREATE TABLE `giao_hang` (
  `ma_gh` varchar(50) NOT NULL,
  `ngay_gh` date NOT NULL,
  `ma_ngh` varchar(50) NOT NULL,
  `ma_dh` varchar(50) NOT NULL,
  `ghi_chu` varchar(255) NOT NULL,
  `trang_thai` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Bẫy `giao_hang`
--
DELIMITER $$
CREATE TRIGGER `them_gh` BEFORE INSERT ON `giao_hang` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("GH0",SUBSTRING(ma_gh,4)+1) FROM giao_hang ORDER BY SUBSTRING(ma_gh,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_gh = 'GH01';
ELSE SET NEW.ma_gh = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoa_don_nhap`
--

CREATE TABLE `hoa_don_nhap` (
  `ma_hdn` varchar(50) NOT NULL,
  `ngay_nhap` date NOT NULL,
  `ma_nv` varchar(50) NOT NULL,
  `ma_ncc` varchar(50) DEFAULT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hoa_don_nhap`
--

INSERT INTO `hoa_don_nhap` (`ma_hdn`, `ngay_nhap`, `ma_nv`, `ma_ncc`, `ghi_chu`) VALUES
('HDN1', '2022-09-10', 'ND01', 'CC01', 'Lô hàng sen đá mini'),
('HDN2', '2022-09-30', 'ND01', 'CC02', 'Hàng nhiều loại');

--
-- Bẫy `hoa_don_nhap`
--
DELIMITER $$
CREATE TRIGGER `them_hoa_don_nhap` BEFORE INSERT ON `hoa_don_nhap` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("HDN",SUBSTRING(ma_hdn,4)+1) FROM hoa_don_nhap ORDER BY SUBSTRING(ma_hdn,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_hdn = 'HDN1';
ELSE SET NEW.ma_hdn = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khuyen_mai`
--

CREATE TABLE `khuyen_mai` (
  `ma_km` varchar(50) NOT NULL,
  `ten_km` varchar(150) NOT NULL,
  `sanpham_km` varchar(50) NOT NULL,
  `phantram_km` int(20) NOT NULL,
  `ngay_bd` date NOT NULL,
  `ngay_kt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `khuyen_mai`
--

INSERT INTO `khuyen_mai` (`ma_km`, `ten_km`, `sanpham_km`, `phantram_km`, `ngay_bd`, `ngay_kt`) VALUES
('KM01', 'Khuyến mãi sen đá', 'LSP1', 10, '2022-09-02', '2022-09-23'),
('KM02', 'Khuyến mãi sen đá 2', 'LSP1', 10, '2022-08-02', '2022-08-03'),
('KM03', 'Khuyến mãi sen đá 3', 'LSP1', 25, '2022-10-03', '2022-10-08'),
('KM04', 'Khuyến mãi xương rồng', 'LSP2', 20, '2022-09-05', '2022-09-28');

--
-- Bẫy `khuyen_mai`
--
DELIMITER $$
CREATE TRIGGER `them_khuyem_mai` BEFORE INSERT ON `khuyen_mai` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("KM0",SUBSTRING(ma_km,4)+1) FROM khuyen_mai ORDER BY SUBSTRING(ma_km,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_km = 'KM01';
ELSE SET NEW.ma_km = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `kich_thuoc`
--

CREATE TABLE `kich_thuoc` (
  `ma_kt` varchar(50) NOT NULL,
  `ten_kt` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `kich_thuoc`
--

INSERT INTO `kich_thuoc` (`ma_kt`, `ten_kt`) VALUES
('KT01', 'Nhỏ'),
('KT02', 'Vừa'),
('KT03', 'Trung'),
('KT04', 'Lớn'),
('KT05', 'Túi lớn'),
('KT06', 'Túi nhỏ'),
('KT07', 'Chai nhỏ');

--
-- Bẫy `kich_thuoc`
--
DELIMITER $$
CREATE TRIGGER `them_kich_thuoc` BEFORE INSERT ON `kich_thuoc` FOR EACH ROW BEGIN
DECLARE id varchar(150);

SET id = (SELECT CONCAT("KT0",SUBSTRING(ma_kt,4)+1) FROM kich_thuoc ORDER BY SUBSTRING(ma_kt,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_kt = 'KT01';
ELSE SET NEW.ma_kt = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loai_san_pham`
--

CREATE TABLE `loai_san_pham` (
  `ma_lsp` varchar(50) NOT NULL,
  `ten_lsp` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `loai_san_pham`
--

INSERT INTO `loai_san_pham` (`ma_lsp`, `ten_lsp`) VALUES
('LSP1', 'Sen đá'),
('LSP10', 'Thuốc trị nấm'),
('LSP11', 'Thuốc trị rệp'),
('LSP2', 'Xương rồng'),
('LSP4', 'Cây cảnh văn phòng'),
('LSP5', 'Chậu tiểu cảnh'),
('LSP6', 'Chậu trồng cây'),
('LSP7', 'Đất trồng'),
('LSP8', 'Dụng cụ chăm sóc cây'),
('LSP9', 'Đá rải mặt');

--
-- Bẫy `loai_san_pham`
--
DELIMITER $$
CREATE TRIGGER `them_loai_san_pham` BEFORE INSERT ON `loai_san_pham` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("LSP",SUBSTRING(ma_lsp,4)+1) FROM loai_san_pham ORDER BY SUBSTRING(ma_lsp,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_lsp = 'LSP1';
ELSE SET NEW.ma_lsp = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoi_dung`
--

CREATE TABLE `nguoi_dung` (
  `ma_nd` varchar(50) NOT NULL,
  `ten_nd` varchar(255) NOT NULL,
  `gioi_tinh` varchar(10) NOT NULL,
  `ngay_sinh` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `dia_chi` varchar(255) NOT NULL,
  `quyen` varchar(5) NOT NULL,
  `sdt_nd` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nguoi_dung`
--

INSERT INTO `nguoi_dung` (`ma_nd`, `ten_nd`, `gioi_tinh`, `ngay_sinh`, `email`, `mat_khau`, `dia_chi`, `quyen`, `sdt_nd`) VALUES
('ND01', 'Phan Trung Hậu', 'Nam', '2000-04-19', 'haub1809235@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'Cần Thơ', '1', NULL),
('ND02', 'Bùi Công Minh', 'Nam', '2000-09-14', 'minh@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0999484885'),
('ND03', 'Nguyễn Thị Hòa', 'Nữ', '2001-09-24', 'hoa@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0987667889'),
('ND06', 'Trần Minh Trí', 'Nam', '1996-09-24', 'tri@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0987654321');

--
-- Bẫy `nguoi_dung`
--
DELIMITER $$
CREATE TRIGGER `them_nguoi_dung` BEFORE INSERT ON `nguoi_dung` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("ND0",SUBSTRING(ma_nd,4)+1) FROM nguoi_dung ORDER BY SUBSTRING(ma_nd,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_nd = 'ND01';
ELSE SET NEW.ma_nd = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoi_giao_hang`
--

CREATE TABLE `nguoi_giao_hang` (
  `ma_ngh` varchar(50) NOT NULL,
  `ten_ngh` varchar(150) NOT NULL,
  `gioi_tinh` varchar(5) NOT NULL,
  `ngay_sinh` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `dia_chi` varchar(255) NOT NULL,
  `sdt` varchar(20) NOT NULL,
  `mat_khau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nguoi_giao_hang`
--

INSERT INTO `nguoi_giao_hang` (`ma_ngh`, `ten_ngh`, `gioi_tinh`, `ngay_sinh`, `email`, `dia_chi`, `sdt`, `mat_khau`) VALUES
('NGH1', 'Bùi Công Minh', 'Nam', '2012-09-01', 'minh@gmail.com', 'Cần Thơ', '0987654321', 'ef209c9343ca8c715265781876657b18');

--
-- Bẫy `nguoi_giao_hang`
--
DELIMITER $$
CREATE TRIGGER `them_nguoi_giao_hang` BEFORE INSERT ON `nguoi_giao_hang` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("NGH",SUBSTRING(ma_ngh,4)+1) FROM nguoi_giao_hang ORDER BY SUBSTRING(ma_ngh,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_ngh = 'NGH1';
ELSE SET NEW.ma_ngh = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nha_cung_cap`
--

CREATE TABLE `nha_cung_cap` (
  `ma_ncc` varchar(50) NOT NULL,
  `ten_ncc` varchar(150) NOT NULL,
  `sdt_ncc` varchar(12) NOT NULL,
  `diachi_ncc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nha_cung_cap`
--

INSERT INTO `nha_cung_cap` (`ma_ncc`, `ten_ncc`, `sdt_ncc`, `diachi_ncc`) VALUES
('CC01', 'Vườn An Khánh', '0939543543', 'An Khánh, Ninh Kiều, Cần Thơ'),
('CC02', 'Vườn Đà Lạt', '023567891', 'Đà Lạt'),
('CC03', 'Vườn Cần Thơ', '01213987654', 'Cần Thơ'),
('CC04', 'Vườn Thốt Nốt', '098456875', 'Thốt Nốt'),
('CC05', 'Vườn Ninh Kiều', '0956745765', 'Ninh Kiều');

--
-- Bẫy `nha_cung_cap`
--
DELIMITER $$
CREATE TRIGGER `them_ncc` BEFORE INSERT ON `nha_cung_cap` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("CC0",SUBSTRING(ma_ncc,4)+1) FROM nha_cung_cap ORDER BY SUBSTRING(ma_ncc,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_ncc = 'CC01';
ELSE SET NEW.ma_ncc = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phieu_giam_gia`
--

CREATE TABLE `phieu_giam_gia` (
  `ma_pgg` varchar(50) NOT NULL,
  `ten_pgg` varchar(150) NOT NULL,
  `so_tien_giam` int(20) NOT NULL,
  `ngay_bd` date NOT NULL,
  `ngay_kt` date NOT NULL,
  `toi_thieu` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `phieu_giam_gia`
--

INSERT INTO `phieu_giam_gia` (`ma_pgg`, `ten_pgg`, `so_tien_giam`, `ngay_bd`, `ngay_kt`, `toi_thieu`) VALUES
('PGG1', '1', 1000, '2022-09-28', '2022-09-28', 100000000),
('PGG2', 'Giảm giá trung thu', 10000, '2022-09-28', '2022-10-26', 100000);

--
-- Bẫy `phieu_giam_gia`
--
DELIMITER $$
CREATE TRIGGER `them_phieu_giam_gia` BEFORE INSERT ON `phieu_giam_gia` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("PGG",SUBSTRING(ma_pgg,4)+1) FROM phieu_giam_gia ORDER BY SUBSTRING(ma_pgg,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_pgg = 'PGG1';
ELSE SET NEW.ma_pgg = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `san_pham`
--

CREATE TABLE `san_pham` (
  `ma_sp` varchar(50) NOT NULL,
  `ten_sp` varchar(255) NOT NULL,
  `loai_sp` varchar(50) NOT NULL,
  `ngay_them` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `san_pham`
--

INSERT INTO `san_pham` (`ma_sp`, `ten_sp`, `loai_sp`, `ngay_them`) VALUES
('SP01', 'Sen đá hoa hồng', 'LSP1', NULL),
('SP010', 'Sen đá hồng phấn', 'LSP1', NULL),
('SP011', 'Chậu tiểu cảnh sen đá', 'LSP4', NULL),
('SP012', 'Đá Masato (1kg)', 'LSP9', NULL),
('SP013', 'Thuốc trị nấm Coc85', 'LSP10', NULL),
('SP014', 'Thuốc tím', 'LSP11', NULL),
('SP015', 'Mix xương rồng', 'LSP5', NULL),
('SP016', 'Mix sen đá nhiều loại', 'LSP5', NULL),
('SP017', 'Sen đá mix 10 loại', 'LSP5', NULL),
('SP018', 'Xương rồng gym', 'LSP2', NULL),
('SP019', 'Xương rồng gym lem', 'LSP2', NULL),
('SP02', 'Xương rồng tay thỏ', 'LSP2', NULL),
('SP020', 'Xương rồng bí xanh', 'LSP2', NULL),
('SP021', 'Xương rồng LB lem', 'LSP2', NULL),
('SP022', 'Sen đá phật bà', 'LSP1', NULL),
('SP023', 'Sen đá pha lê', 'LSP1', NULL),
('SP024', 'Sen đá hồng điệu', 'LSP1', NULL),
('SP025', 'Sen đá Hawathia', 'LSP1', NULL),
('SP026', 'Sen đá Hawathia ngọc', 'LSP1', NULL),
('SP027', 'Sen đá Hawathia vuốt đen', 'LSP1', NULL),
('SP028', 'Sen thanh ngọc', 'LSP1', NULL),
('SP029', 'Sen đá Liên đài tím', 'LSP1', NULL),
('SP03', 'Xương rồng thanh sơn', 'LSP2', NULL),
('SP030', 'Sen đá sao biển', 'LSP1', NULL),
('SP031', 'Sen đá đất xanh', 'LSP1', NULL),
('SP032', 'Cỏ may mắn', 'LSP4', '2022-09-26'),
('SP033', 'Chậu gốm sứ', 'LSP6', '2022-09-26'),
('SP034', 'Đất soilmix Túi 6kg', 'LSP7', '2022-09-26'),
('SP035', 'Sen đá đế đỏ', 'LSP1', '2022-09-26'),
('SP036', 'Sen đá kim cương', 'LSP1', '2022-09-26'),
('SP037', 'Sen đá tay gấu', 'LSP1', '2022-09-26'),
('SP038', 'Thuốc trị nấm Anvil', 'LSP10', '2022-09-26'),
('SP039', 'Thuốc tím Thái', 'LSP11', '2022-09-26'),
('SP040', 'Xương rồng kim hổ', 'LSP2', '2022-09-26'),
('SP041', 'Xương rồng Echino', 'LSP2', '2022-09-26'),
('SP042', 'Xương rồng Aster', 'LSP2', '2022-09-26'),
('SP043', 'Xương rồng Astro', 'LSP2', '2022-09-26'),
('SP044', 'Xương rồng Mickey', 'LSP2', '2022-09-26'),
('SP045', 'Chậu cây con cáo', 'LSP4', '2022-09-26'),
('SP046', 'Chậu gốm nhật', 'LSP6', '2022-09-26'),
('SP047', 'Chậu đất nung', 'LSP6', '2022-09-26'),
('SP048', 'Chậu họa tiết lá', 'LSP6', '2022-09-26'),
('SP049', 'Namix', 'LSP7', '2022-09-26'),
('SP050', 'Promix', 'LSP7', '2022-09-26'),
('SP051', 'Xẻn nhỏ', 'LSP8', '2022-09-26'),
('SP052', 'Nhíp', 'LSP8', '2022-09-26'),
('SP053', 'Ống thổi nước', 'LSP8', '2022-09-26'),
('SP054', 'Đá Lava đen', 'LSP9', '2022-09-26'),
('SP055', 'Đá Lava đỏ', 'LSP9', '2022-09-26');

--
-- Bẫy `san_pham`
--
DELIMITER $$
CREATE TRIGGER `them_sp` BEFORE INSERT ON `san_pham` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("SP0",SUBSTRING(ma_sp,4)+1) FROM san_pham ORDER BY SUBSTRING(ma_sp,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_sp = 'SP01';
ELSE SET NEW.ma_sp = id;
END IF;
END
$$
DELIMITER ;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chi_tiet_dh`
--
ALTER TABLE `chi_tiet_dh`
  ADD PRIMARY KEY (`ma_ctdh`),
  ADD KEY `co_ctsp` (`ma_ctsp`),
  ADD KEY `thuoc_dh` (`ma_dh`);

--
-- Chỉ mục cho bảng `chi_tiet_hdn`
--
ALTER TABLE `chi_tiet_hdn`
  ADD PRIMARY KEY (`ma_cthdn`),
  ADD KEY `thuoc_hdn` (`ma_hdn`),
  ADD KEY `co_ctsp` (`ma_ctsp`);

--
-- Chỉ mục cho bảng `chi_tiet_san_pham`
--
ALTER TABLE `chi_tiet_san_pham`
  ADD PRIMARY KEY (`ma_ctsp`),
  ADD KEY `chi_tiet_san_pham` (`ma_sp`),
  ADD KEY `thuoc_san_pham` (`ma_sp`),
  ADD KEY `thuoc_kich_thuoc` (`ma_kt`);

--
-- Chỉ mục cho bảng `dia_chi`
--
ALTER TABLE `dia_chi`
  ADD PRIMARY KEY (`ma_dc`),
  ADD KEY `thuoc_nd` (`ma_nd`);

--
-- Chỉ mục cho bảng `don_hang`
--
ALTER TABLE `don_hang`
  ADD PRIMARY KEY (`ma_dh`),
  ADD KEY `them_boi` (`ma_nv`),
  ADD KEY `mua_boi` (`ma_kh`),
  ADD KEY `co_pgg` (`ma_pgg`);

--
-- Chỉ mục cho bảng `giao_hang`
--
ALTER TABLE `giao_hang`
  ADD PRIMARY KEY (`ma_gh`),
  ADD KEY `thuoc_ngh` (`ma_ngh`),
  ADD KEY `thuoc_dh` (`ma_dh`);

--
-- Chỉ mục cho bảng `hoa_don_nhap`
--
ALTER TABLE `hoa_don_nhap`
  ADD PRIMARY KEY (`ma_hdn`),
  ADD KEY `thuoc_ncc` (`ma_ncc`),
  ADD KEY `them_boi` (`ma_nv`);

--
-- Chỉ mục cho bảng `khuyen_mai`
--
ALTER TABLE `khuyen_mai`
  ADD PRIMARY KEY (`ma_km`),
  ADD KEY `khuyen_mai_loai_san_pham` (`sanpham_km`);

--
-- Chỉ mục cho bảng `kich_thuoc`
--
ALTER TABLE `kich_thuoc`
  ADD PRIMARY KEY (`ma_kt`);

--
-- Chỉ mục cho bảng `loai_san_pham`
--
ALTER TABLE `loai_san_pham`
  ADD PRIMARY KEY (`ma_lsp`);

--
-- Chỉ mục cho bảng `nguoi_dung`
--
ALTER TABLE `nguoi_dung`
  ADD PRIMARY KEY (`ma_nd`);

--
-- Chỉ mục cho bảng `nguoi_giao_hang`
--
ALTER TABLE `nguoi_giao_hang`
  ADD PRIMARY KEY (`ma_ngh`);

--
-- Chỉ mục cho bảng `nha_cung_cap`
--
ALTER TABLE `nha_cung_cap`
  ADD PRIMARY KEY (`ma_ncc`);

--
-- Chỉ mục cho bảng `phieu_giam_gia`
--
ALTER TABLE `phieu_giam_gia`
  ADD PRIMARY KEY (`ma_pgg`);

--
-- Chỉ mục cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`ma_sp`),
  ADD KEY `loai_san_pham` (`loai_sp`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chi_tiet_dh`
--
ALTER TABLE `chi_tiet_dh`
  ADD CONSTRAINT `co_ctspp` FOREIGN KEY (`ma_ctsp`) REFERENCES `chi_tiet_san_pham` (`ma_ctsp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_dhh` FOREIGN KEY (`ma_dh`) REFERENCES `don_hang` (`ma_dh`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `chi_tiet_hdn`
--
ALTER TABLE `chi_tiet_hdn`
  ADD CONSTRAINT `co_ctsp` FOREIGN KEY (`ma_ctsp`) REFERENCES `chi_tiet_san_pham` (`ma_ctsp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_hdn` FOREIGN KEY (`ma_hdn`) REFERENCES `hoa_don_nhap` (`ma_hdn`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `chi_tiet_san_pham`
--
ALTER TABLE `chi_tiet_san_pham`
  ADD CONSTRAINT `thuoc_kich_thuoc` FOREIGN KEY (`ma_kt`) REFERENCES `kich_thuoc` (`ma_kt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_san_pham` FOREIGN KEY (`ma_sp`) REFERENCES `san_pham` (`ma_sp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `dia_chi`
--
ALTER TABLE `dia_chi`
  ADD CONSTRAINT `thuoc_nd` FOREIGN KEY (`ma_nd`) REFERENCES `nguoi_dung` (`ma_nd`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `don_hang`
--
ALTER TABLE `don_hang`
  ADD CONSTRAINT `don_hang_ibfk_1` FOREIGN KEY (`ma_kh`) REFERENCES `nguoi_dung` (`ma_nd`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `don_hang_ibfk_2` FOREIGN KEY (`ma_nv`) REFERENCES `nguoi_dung` (`ma_nd`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `don_hang_ibfk_3` FOREIGN KEY (`ma_pgg`) REFERENCES `phieu_giam_gia` (`ma_pgg`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `giao_hang`
--
ALTER TABLE `giao_hang`
  ADD CONSTRAINT `thuoc_dh` FOREIGN KEY (`ma_dh`) REFERENCES `don_hang` (`ma_dh`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_ngh` FOREIGN KEY (`ma_ngh`) REFERENCES `nguoi_giao_hang` (`ma_ngh`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hoa_don_nhap`
--
ALTER TABLE `hoa_don_nhap`
  ADD CONSTRAINT `them_boi` FOREIGN KEY (`ma_nv`) REFERENCES `nguoi_dung` (`ma_nd`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_ncc` FOREIGN KEY (`ma_ncc`) REFERENCES `nha_cung_cap` (`ma_ncc`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `khuyen_mai`
--
ALTER TABLE `khuyen_mai`
  ADD CONSTRAINT `khuyen_mai_loai_san_pham` FOREIGN KEY (`sanpham_km`) REFERENCES `loai_san_pham` (`ma_lsp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD CONSTRAINT `loai_san_pham` FOREIGN KEY (`loai_sp`) REFERENCES `loai_san_pham` (`ma_lsp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
