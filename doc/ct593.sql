-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 06, 2022 lúc 05:28 AM
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
-- Cấu trúc bảng cho bảng `anh_dai_dien`
--

CREATE TABLE `anh_dai_dien` (
  `ma_avt` varchar(50) NOT NULL,
  `ten_avt` varchar(255) NOT NULL,
  `ma_nd` varchar(50) NOT NULL,
  `ngay_them` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `anh_dai_dien`
--

INSERT INTO `anh_dai_dien` (`ma_avt`, `ten_avt`, `ma_nd`, `ngay_them`) VALUES
('AVT1', '1664971734790.jpg', 'ND09', '2022-10-05 19:08:54'),
('AVT10', '1664974680843.jpg', 'ND08', '2022-10-05 19:58:00'),
('AVT11', '1664975054906.jpg', 'ND08', '2022-10-05 20:04:14'),
('AVT2', '1664971881063.jpg', 'ND09', '2022-10-05 19:11:21'),
('AVT3', '1664971915834.jpg', 'ND09', '2022-10-05 19:11:55'),
('AVT4', '1664972811876.jpg', 'ND08', '2022-10-05 19:26:51'),
('AVT5', '1664972839070.jpg', 'ND08', '2022-10-05 19:27:19'),
('AVT6', '1664973139702.jpg', 'ND08', '2022-10-05 19:32:19'),
('AVT7', '1664973852518.jpg', 'ND08', '2022-10-05 19:44:12'),
('AVT8', '1664973879409.jpg', 'ND08', '2022-10-05 19:44:39'),
('AVT9', '1664973989490.jpg', 'ND08', '2022-10-05 19:46:29');

--
-- Bẫy `anh_dai_dien`
--
DELIMITER $$
CREATE TRIGGER `them_avt` BEFORE INSERT ON `anh_dai_dien` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("AVT",SUBSTRING(ma_avt,4)+1) FROM anh_dai_dien ORDER BY SUBSTRING(ma_avt,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_avt = 'AVT1';
ELSE SET NEW.ma_avt = id;
END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binh_luan`
--

CREATE TABLE `binh_luan` (
  `ma_bl` varchar(50) NOT NULL,
  `ma_kh` varchar(50) NOT NULL,
  `noi_dung` varchar(255) NOT NULL,
  `trang_thai` varchar(20) NOT NULL,
  `ngay_bl` datetime NOT NULL,
  `ma_sp` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `binh_luan`
--

INSERT INTO `binh_luan` (`ma_bl`, `ma_kh`, `noi_dung`, `trang_thai`, `ngay_bl`, `ma_sp`) VALUES
('BL03', 'ND09', 'dep', '0', '2022-10-06 04:06:20', 'SP010'),
('BL04', 'ND08', 'Cây này dể trồng không shop', '0', '2022-10-06 05:11:26', 'SP010');

--
-- Bẫy `binh_luan`
--
DELIMITER $$
CREATE TRIGGER `them_bl` BEFORE INSERT ON `binh_luan` FOR EACH ROW BEGIN
DECLARE id varchar(50);

SET id = (SELECT CONCAT("BL0",SUBSTRING(ma_bl,4)+1) FROM binh_luan ORDER BY SUBSTRING(ma_bl,4)*1 DESC LIMIT 1);

IF id IS NULL 
THEN SET NEW.ma_bl = 'BL01';
ELSE SET NEW.ma_bl = id;
END IF;
END
$$
DELIMITER ;

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
('CTD10', 'CT051', 'DH06', 1, 90000),
('CTD11', 'CT043', 'DH07', 1, 36000),
('CTD12', 'CT046', 'DH07', 1, 136000),
('CTD13', 'CT045', 'DH08', 1, 136000),
('CTD14', 'CT044', 'DH08', 1, 12000),
('CTD15', 'CT031', 'DH09', 1, 25000),
('CTD16', 'CT089', 'DH09', 1, 20000),
('CTD17', 'CT070', 'DH010', 1, 40000),
('CTD18', 'CT035', 'DH010', 1, 50000),
('CTD19', 'CT045', 'DH011', 1, 136000),
('CTD20', 'CT018', 'DH012', 1, 27000),
('CTD21', 'CT080', 'DH013', 1, 30000),
('CTD22', 'CT022', 'DH014', 1, 27000),
('CTD23', 'CT033', 'DH015', 1, 15000),
('CTD24', 'CT040', 'DH016', 1, 16000),
('CTD25', 'CT041', 'DH016', 1, 32000),
('CTD26', 'CT027', 'DH017', 1, 50000),
('CTD27', 'CT048', 'DH018', 1, 67500),
('CTD28', 'CT052', 'DH019', 1, 13500),
('CTD29', 'CT026', 'DH020', 1, 9600),
('CTD31', 'CT051', 'DH022', 1, 90000),
('CTD32', 'CT046', 'DH023', 1, 136000),
('CTD33', 'CT022', 'DH024', 1, 27000),
('CTD34', 'CT034', 'DH025', 1, 20000),
('CTD35', 'CT035', 'DH025', 1, 50000),
('CTD36', 'CT018', 'DH026', 1, 27000),
('CTD37', 'CT051', 'DH026', 1, 90000),
('CTD38', 'CT048', 'DH027', 1, 67500),
('CTD39', 'CT018', 'DH028', 1, 27000),
('CTD40', 'CT034', 'DH029', 1, 20000),
('CTD41', 'CT043', 'DH030', 1, 36000),
('CTD42', 'CT026', 'DH031', 1, 9600),
('CTD43', 'CT051', 'DH032', 1, 90000),
('CTD44', 'CT018', 'DH032', 1, 27000),
('CTD5', 'CT022', 'DH03', 1, 27000),
('CTD6', 'CT051', 'DH03', 1, 90000),
('CTD7', 'CT048', 'DH03', 1, 67500),
('CTD8', 'CT043', 'DH04', 1, 36000),
('CTD9', 'CT022', 'DH05', 1, 27000);

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
  `hinhanh` text DEFAULT NULL,
  `da_ban` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_san_pham`
--

INSERT INTO `chi_tiet_san_pham` (`ma_ctsp`, `ma_sp`, `ma_kt`, `soluong`, `giaban`, `thongtin`, `ten_sp`, `ten_kt`, `hinhanh`, `da_ban`) VALUES
('CT018', 'SP01', 'KT03', 13, 30000, 'Sen đá xứ lạnh', 'Sen đá hoa hồng', 'Trung', '4-sen-da-hoa-hong-xanh-lon.jpg', 5),
('CT022', 'SP010', 'KT03', 95, 30000, 'Sen đá xứ lạnh', 'Sen đá hồng phấn', 'Trung', 'hong phan trung.jpg', 15),
('CT024', 'SP03', 'KT02', 110, 20000, 'Xương rồng ', 'Xương rồng thanh sơn', 'Vừa', 'xuong-rong-thanh-son-nho.jpg', 0),
('CT026', 'SP02', 'KT01', 109, 12000, 'Xương rồng', 'Xương rồng tay thỏ', 'Nhỏ', 'xuong-rong-tai-tho-nho.jpg', 2),
('CT027', 'SP011', 'KT02', 108, 50000, 'Chậu tiểu cảnh sen đá', 'Chậu tiểu cảnh sen đá', 'Vừa', 'chau cay van phong 1.jpg', 2),
('CT031', 'SP012', 'KT01', 123, 25000, 'Đá rải mặt Masato trọng lượng 1 kí', 'Đá Masato (1kg)', 'Nhỏ', 'masato.jpg', 5),
('CT033', 'SP014', 'KT03', 105, 15000, 'Thuốc tím túi 1kg', 'Thuốc tím', 'Trung', 'thuoc-tim-thai-lan.jpg', 5),
('CT034', 'SP013', 'KT01', 1023, 20000, 'Thuốc Coc85 bịch 20g', 'Thuốc trị nấm Coc85', 'Nhỏ', 'coc85 nho.jpg', 7),
('CT035', 'SP013', 'KT03', 106, 50000, 'Thuốc Coc85 bịch 100g', 'Thuốc trị nấm Coc85', 'Trung', 'COC-85-01.jpg', 2),
('CT036', 'SP015', 'KT01', 40, 75000, 'Chậu tiểu cảnh xương rồng nhiều loại', 'Mix xương rồng', 'Nhỏ', 'mix a.jpg', 0),
('CT037', 'SP015', 'KT03', 30, 100000, 'Chậu tiểu cảnh xương rồng nhiều loại', 'Mix xương rồng', 'Trung', 'mix xuong rong a.jpg', 0),
('CT039', 'SP017', 'KT03', 30, 82000, 'Mix 10 loai sen đá', 'Sen đá mix 10 loại', 'Trung', 'sen đá.jpg', 0),
('CT040', 'SP018', 'KT01', 1009, 20000, 'Xương rồng gym nhỏ', 'Xương rồng gym', 'Nhỏ', 'gym nho.jpg', 1),
('CT041', 'SP018', 'KT02', 54, 40000, 'Xương rồng gym to', 'Xương rồng gym', 'Vừa', 'gym to.jpg', 1),
('CT043', 'SP019', 'KT01', 101, 45000, 'Xương rồng gym lem nhỏ', 'Xương rồng gym lem', 'Nhỏ', 'gym lem nho.jpg', 8),
('CT044', 'SP020', 'KT01', 74, 15000, 'Xương rồng bí xanh nhỏ', 'Xương rồng bí xanh', 'Nhỏ', 'bi xanh nho.jpg', 1),
('CT045', 'SP021', 'KT02', 65, 170000, 'Xương rồng LB lem vừa', 'Xương rồng LB lem', 'Vừa', 'lb lem.jpg', 2),
('CT046', 'SP019', 'KT04', 108, 170000, 'Xương rồng gym lem lớn', 'Xương rồng gym lem', 'Lớn', 'gym lem trung.jpg', 2),
('CT047', 'SP022', 'KT01', 0, 15000, 'Sen đá xứ lạnh', 'Sen đá phật bà', 'Nhỏ', '0-sen-da-phat-ba-dep.jpg', 0),
('CT048', 'SP022', 'KT03', 105, 75000, 'Sen đá xứ lạnh', 'Sen đá phật bà', 'Trung', '12c170f0ad9f3257f646260c50bf882a.jpg', 6),
('CT049', 'SP023', 'KT01', 0, 32000, 'Sen đá xứ lạnh', 'Sen đá pha lê', 'Nhỏ', '23c0266387ce9e142792de1c6e4e07c7.jpg', 0),
('CT050', 'SP023', 'KT02', 0, 50000, 'Sen đá xứ lạnh', 'Sen đá pha lê', 'Vừa', 'fbec04112ea3246fddceb252a40a2773.jpg', 0),
('CT051', 'SP024', 'KT04', 49, 100000, 'Sen đá xứ lạnh', 'Sen đá hồng điệu', 'Lớn', '69483c7d30644e6edc45e8238881fdad.jpg', 7),
('CT052', 'SP025', 'KT01', 99, 15000, 'Sen đá ưa mát', 'Sen đá Hawathia', 'Nhỏ', 'sen-da-sedum-da-quang-haworthia-cymbiformis-1.jpg', 1),
('CT053', 'SP026', 'KT01', 50, 50000, 'Sen đá ư mát', 'Sen đá Hawathia ngọc', 'Nhỏ', '4af503e829ea776cbddbb715bd65e658_tn.jpg', 0),
('CT054', 'SP027', 'KT01', 85, 75000, 'Sen đá ưa mát', 'Sen đá Hawathia vuốt đen', 'Nhỏ', '8f8950b55b25025e7b60a74cca14f47b.jpg', 0),
('CT055', 'SP030', 'KT03', 64, 35000, 'Sen đá ưa mát', 'Sen đá sao biển', 'Trung', 'f6592196401564bd686cb0793aa84cc0.jpg', 0),
('CT056', 'SP028', 'KT02', 53, 20000, 'Sen đá xứ lạnh', 'Sen thanh ngọc', 'Vừa', 'thanh-ngoc-to-2.jpg', 0),
('CT057', 'SP029', 'KT02', 70, 12000, 'Sen đá xứ lạnh', 'Sen đá Liên đài tím', 'Vừa', '5434f3ba476fce62ee907686152d84e9.jpg', 0),
('CT058', 'SP029', 'KT03', 40, 35000, 'Sen đá xứ lạnh', 'Sen đá Liên đài tím', 'Trung', '6566ae1e4f7c7102375d0898563ecfc4.jpg', 0),
('CT059', 'SP029', 'KT04', 60, 85000, 'Sen đá xứ lạnh', 'Sen đá Liên đài tím', 'Lớn', 'ldh.jpg', 0),
('CT063', 'SP031', 'KT04', 80, 200000, 'Sen đá xứ lạnh', 'Sen đá đất xanh', 'Lớn', 'cay-sen-dưqeqw.jpg', 0),
('CT064', 'SP032', 'KT03', 50, 50000, 'Cây cảnh văn phòng', 'Cỏ may mắn', 'Trung', 'co may man nho.jpg', 0),
('CT065', 'SP032', 'KT04', 100, 70000, 'Cây cảnh văn phòng', 'Cỏ may mắn', 'Lớn', 'co may man to.jpg', 0),
('CT066', 'SP034', 'KT05', 100, 130000, 'Đất chuyên dụng trồng sen đá', 'Đất soilmix Túi 6kg', 'Túi lớn', 'Soilimix.jpg', 0),
('CT067', 'SP035', 'KT02', 90, 35000, 'Sen đá xứ lạnh', 'Sen đá đế đỏ', 'Vừa', 'S_758000-MLB26295115161_112017-O.jpg', 0),
('CT068', 'SP036', 'KT03', 100, 120000, 'Sen đá xứ lạnh', 'Sen đá kim cương', 'Trung', 'sen-da-kim-cuong-xanh-1.jpg', 0),
('CT069', 'SP037', 'KT02', 200, 35000, 'Sen đá xứ lạnh', 'Sen đá tay gấu', 'Vừa', 'Sen-da-tay-gau-bear-Paw.jpg', 0),
('CT070', 'SP038', 'KT07', 100, 40000, 'Thuốc trị nấm', 'Thuốc trị nấm Anvil', 'Chai nhỏ', 'ANVIL-5SC-100ml.jpg', 1),
('CT071', 'SP039', 'KT06', 59, 65000, 'Thuốc trị rệp', 'Thuốc tím Thái', 'Túi nhỏ', '16a809279333351db996b0e5591ed2e4.jpg', 1),
('CT072', 'SP033', 'KT02', 30, 25000, 'Chậu gốm sứ', 'Chậu gốm sứ', 'Vừa', 'chau gom xu.jpg', 0),
('CT073', 'SP015', 'KT02', 50, 70000, 'Chậu tiểu cảnh xương rồng', 'Mix xương rồng', 'Vừa', 'mix xuong rong.jpg', 0),
('CT074', 'SP015', 'KT04', 20, 100000, 'Chậu tiểu cảnh ', 'Mix xương rồng', 'Lớn', 'mix xuong rong a.jpg', 0),
('CT075', 'SP016', 'KT03', 37, 65000, 'Mix sen đá nhiều loại', 'Mix sen đá nhiều loại', 'Trung', 'mix sen da 1.webp', 3),
('CT076', 'SP040', 'KT04', 30, 150000, 'Xương rồng kim hổ lớn', 'Xương rồng kim hổ', 'Lớn', 'edbba0062a81dda5e0f70485dfed639e.jpg', 0),
('CT077', 'SP042', 'KT02', 100, 50000, 'Xương rồng Aster', 'Xương rồng Aster', 'Vừa', 'hat-giong-xuong-rong-aster-1.__.jpg', 0),
('CT078', 'SP044', 'KT03', 30, 70000, 'Xương rồng Mickey', 'Xương rồng Mickey', 'Trung', 'cay-xuong-rong-tai-tho-trung.jpg', 0),
('CT079', 'SP045', 'KT03', 50, 90000, 'Chậu cảnh con cáo', 'Chậu cây con cáo', 'Trung', 'ab8a8edb4457da83b2914bdb636d5bfb.jpg', 0),
('CT080', 'SP046', 'KT01', 49, 30000, 'Chậu trồng cây', 'Chậu gốm nhật', 'Nhỏ', '0665b9d50eb8f90fbf857b5b8a424ee1.jpg', 1),
('CT081', 'SP047', 'KT02', 100, 10000, 'Chậu trồng cây', 'Chậu đất nung', 'Vừa', 'chau-dat-nung.jpg', 0),
('CT082', 'SP048', 'KT02', 100, 25000, 'Chậu trồng cây', 'Chậu họa tiết lá', 'Vừa', 'z2515470090222_5bb2b1f86f53988dab36f93c23eeab88.jpg', 0),
('CT083', 'SP050', 'KT05', 100, 12000, 'Đất trồng cây', 'Promix', 'Túi lớn', 'w-sen-da.png', 0),
('CT084', 'SP049', 'KT05', 100, 60000, 'Đất trồng cây', 'Namix', 'Túi lớn', 'gia-the-trong-sen-da-xuong-rong.jpg', 0),
('CT085', 'SP051', 'KT01', 10, 20000, 'Xẻn nhỏ', 'Xẻn nhỏ', 'Nhỏ', 'c4b59dbeecde8f1c1ddc5530e0c3c3c2.jpg', 0),
('CT086', 'SP052', 'KT01', 60, 5000, 'Nhíp', 'Nhíp', 'Nhỏ', '586f1066599536c83cd699f03179cd2b.jpg', 0),
('CT087', 'SP053', 'KT01', 100, 10000, 'Ống thổi nước', 'Ống thổi nước', 'Nhỏ', '1f66c5654c7cf5ef978968fb133a971d.jpg', 0),
('CT088', 'SP054', 'KT06', 100, 15000, 'Đá Lava đen', 'Đá Lava đen', 'Túi nhỏ', '653005c1bf4f4a11135e.webp', 0),
('CT089', 'SP055', 'KT06', 99, 20000, 'Đá Lava đỏ', 'Đá Lava đỏ', 'Túi nhỏ', 'e99681e1b3397f4a4143d21418f85c7d.jpg', 1);

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
('DC02', 'AAAA', 'ND01'),
('DC03', 'â', 'ND07'),
('DC04', 'Cần Thơ', 'ND02'),
('DC05', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 'ND09'),
('DC06', 'p.trung kiên , q. thốt nốt , tp.cần thơ', 'ND08');

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
  `hinh_thuc_thanh_toan` int(20) NOT NULL,
  `tong_tien` int(20) NOT NULL,
  `trang_thai` int(20) NOT NULL,
  `nguoi_nhan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `don_hang`
--

INSERT INTO `don_hang` (`ma_dh`, `ma_kh`, `ma_pgg`, `ma_nv`, `ngay_dat_hang`, `dia_chi_giao`, `hinh_thuc_thanh_toan`, `tong_tien`, `trang_thai`, `nguoi_nhan`) VALUES
('DH010', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:47:09', 'Cần Thơ', 1, 90000, 6, 'Trần Minh a, 0787766766'),
('DH011', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:48:10', 'Cần Thơ', 1, 136000, 6, 'a a, 0347577474'),
('DH012', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:48:35', 'Cần Thơ', 1, 27000, 6, 'a a, 0494949499'),
('DH013', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:49:25', 'Cần Thơ', 1, 30000, 6, 'hau hau, 0387473748'),
('DH014', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:50:36', 'Cần Thơ', 1, 27000, 6, 'a a, 0384745555'),
('DH015', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:50:59', 'Cần Thơ', 1, 15000, 9, 'a a, 085708085757'),
('DH016', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:51:27', 'Cần Thơ', 1, 48000, 4, 'a a, 0834884774'),
('DH017', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:51:58', 'Cần Thơ', 1, 50000, 6, 'a a, 0385544444'),
('DH018', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:52:24', 'Cần Thơ', 1, 67500, 6, 'a a, 0477474774'),
('DH019', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:52:52', 'Cần Thơ', 1, 13500, 4, 'a a, 0384848444'),
('DH020', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:53:23', 'Cần Thơ', 1, 9600, 6, 'a a, 0123456789'),
('DH021', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:54:02', 'Cần Thơ', 1, 65000, 4, 'a a, 0123456789'),
('DH022', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:55:05', 'Cần Thơ', 1, 90000, 4, 'a a, 003847575775'),
('DH023', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:55:33', 'Cần Thơ', 1, 136000, 4, 'a a, 03875747477'),
('DH024', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:56:56', 'Cần Thơ', 1, 27000, 6, 'a a, 0847474747'),
('DH025', 'ND02', 'PGG1', 'ND01', '2022-10-01 09:13:58', 'Cần Thơ', 1, 70000, 6, 'a a, 0394848322'),
('DH026', 'ND09', 'PGG1', 'ND01', '2022-10-01 11:10:42', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 1, 117000, 6, 'Bùi Minh, 0487755433'),
('DH027', 'ND09', 'PGG1', 'ND01', '2022-10-02 09:29:19', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 1, 67500, 6, 'Trần Minh Nam, 0987654321'),
('DH028', 'ND09', 'PGG1', 'ND01', '2022-10-02 11:46:26', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 1, 27000, 1, 'Phan Hậu, 09876546666'),
('DH029', 'ND09', 'PGG1', 'ND01', '2022-10-02 13:07:01', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 1, 20000, 3, 'Phan Hậu, 07364663644'),
('DH03', 'ND01', 'PGG1', 'ND01', '2022-09-29 20:12:27', 'a', 1, 184500, 6, 'aa a, 04874737477'),
('DH030', 'ND09', 'PGG1', 'ND01', '2022-10-02 13:07:40', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 1, 36000, 4, 'Phan Hậu, 03874646364'),
('DH031', 'ND09', 'PGG1', 'ND01', '2022-10-02 13:08:10', 'p.An Khánh, q.Ninh Kiều,tp.Cần Thơ', 1, 9600, 6, 'Phan Hậu, 0283747575'),
('DH032', 'ND08', 'PGG1', 'ND01', '2022-10-05 19:34:28', 'p.trung kiên , q. thốt nốt , tp.cần thơ', 1, 117000, 0, 'Phan Trung Hậu, 0968483854'),
('DH04', 'ND01', 'PGG1', 'ND01', '2022-09-29 20:13:27', 'a', 0, 36000, 4, 'aa a, 0484757644'),
('DH05', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:36:28', 'Cần Thơ', 1, 27000, 4, 'a a, 0848484844'),
('DH06', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:37:40', 'Cần Thơ', 1, 90000, 6, 'a a, 0384747333'),
('DH07', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:39:07', 'Cần Thơ', 1, 172000, 9, 'a a, 0485858585'),
('DH08', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:45:37', 'Cần Thơ', 1, 148000, 6, 'tr trí, 0888888888'),
('DH09', 'ND02', 'PGG1', 'ND01', '2022-09-30 23:46:21', 'Cần Thơ', 1, 45000, 6, 'a a, 0975665555');

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
  `trang_thai` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `giao_hang`
--

INSERT INTO `giao_hang` (`ma_gh`, `ngay_gh`, `ma_ngh`, `ma_dh`, `ghi_chu`, `trang_thai`) VALUES
('GH010', '2022-09-30', 'NGH3', 'DH05', '', 2),
('GH011', '2022-09-30', 'NGH3', 'DH05', '', 3),
('GH012', '2022-09-30', 'NGH3', 'DH05', '', 4),
('GH013', '2022-09-30', 'NGH3', 'DH06', '', 2),
('GH014', '2022-09-30', 'NGH3', 'DH07', '', 2),
('GH015', '2022-09-30', 'NGH3', 'DH07', '', 3),
('GH016', '2022-09-30', 'NGH3', 'DH06', '', 3),
('GH017', '2022-09-30', 'NGH3', 'DH06', '', 6),
('GH018', '2022-09-30', 'NGH3', 'DH023', '', 2),
('GH019', '2022-09-30', 'NGH3', 'DH022', '', 2),
('GH020', '2022-09-30', 'NGH3', 'DH022', '', 2),
('GH021', '2022-09-30', 'NGH3', 'DH021', '', 2),
('GH022', '2022-09-30', 'NGH3', 'DH020', '', 2),
('GH023', '2022-09-30', 'NGH3', 'DH019', '', 2),
('GH024', '2022-09-30', 'NGH3', 'DH019', '', 2),
('GH025', '2022-09-30', 'NGH3', 'DH018', '', 2),
('GH026', '2022-09-30', 'NGH3', 'DH017', '', 2),
('GH027', '2022-09-30', 'NGH3', 'DH016', '', 2),
('GH028', '2022-09-30', 'NGH3', 'DH015', '', 2),
('GH029', '2022-09-30', 'NGH3', 'DH014', '', 2),
('GH030', '2022-09-30', 'NGH3', 'DH013', '', 2),
('GH031', '2022-09-30', 'NGH3', 'DH012', '', 2),
('GH032', '2022-09-30', 'NGH3', 'DH011', '', 2),
('GH033', '2022-09-30', 'NGH3', 'DH010', '', 2),
('GH034', '2022-09-30', 'NGH3', 'DH09', '', 2),
('GH035', '2022-09-30', 'NGH3', 'DH08', '', 2),
('GH036', '2022-09-30', 'NGH3', 'DH023', '', 3),
('GH037', '2022-09-30', 'NGH3', 'DH021', '', 3),
('GH038', '2022-09-30', 'NGH3', 'DH020', '', 3),
('GH039', '2022-09-30', 'NGH3', 'DH020', '', 6),
('GH04', '2022-09-30', 'NGH3', 'DH03', '', 2),
('GH040', '2022-09-30', 'NGH3', 'DH023', '', 4),
('GH041', '2022-09-30', 'NGH3', 'DH022', '', 4),
('GH042', '2022-09-30', 'NGH3', 'DH021', '', 4),
('GH043', '2022-09-30', 'NGH3', 'DH019', '', 4),
('GH044', '2022-09-30', 'NGH3', 'DH018', '', 3),
('GH045', '2022-09-30', 'NGH3', 'DH017', '', 3),
('GH046', '2022-10-01', 'NGH3', 'DH018', '', 6),
('GH047', '2022-10-01', 'NGH3', 'DH07', '', 6),
('GH048', '2022-10-01', 'NGH3', 'DH07', '', 6),
('GH049', '2022-10-01', 'NGH3', 'DH017', '', 6),
('GH05', '2022-09-30', 'NGH3', 'DH03', '', 3),
('GH050', '2022-10-01', 'NGH3', 'DH025', '', 2),
('GH051', '2022-10-01', 'NGH3', 'DH08', '', 3),
('GH052', '2022-10-01', 'NGH3', 'DH08', '', 6),
('GH053', '2022-10-01', 'NGH3', 'DH025', '', 3),
('GH054', '2022-10-01', 'NGH3', 'DH025', '', 6),
('GH055', '2022-10-01', 'NGH3', 'DH016', '', 3),
('GH056', '2022-10-01', 'NGH3', 'DH016', '', 4),
('GH057', '2022-10-01', 'NGH3', 'DH015', '', 3),
('GH058', '2022-10-01', 'NGH3', 'DH015', '', 6),
('GH059', '2022-10-01', 'NGH3', 'DH015', '', 6),
('GH06', '2022-09-30', 'NGH3', 'DH03', '', 6),
('GH060', '2022-10-01', 'NGH3', 'DH014', '', 3),
('GH061', '2022-10-01', 'NGH3', 'DH014', '', 6),
('GH062', '2022-10-01', 'NGH3', 'DH013', '', 3),
('GH063', '2022-10-01', 'NGH3', 'DH013', '', 6),
('GH064', '2022-10-01', 'NGH3', 'DH012', '', 3),
('GH065', '2022-10-01', 'NGH3', 'DH012', '', 6),
('GH066', '2022-10-01', 'NGH3', 'DH011', '', 3),
('GH067', '2022-10-01', 'NGH3', 'DH011', '', 6),
('GH068', '2022-10-01', 'NGH3', 'DH010', '', 3),
('GH069', '2022-10-01', 'NGH3', 'DH010', '', 6),
('GH07', '2022-09-30', 'NGH3', 'DH04', '', 2),
('GH070', '2022-10-01', 'NGH3', 'DH09', '', 3),
('GH071', '2022-10-01', 'NGH3', 'DH09', '', 6),
('GH072', '2022-10-01', 'NGH3', 'DH024', '', 2),
('GH073', '2022-10-01', 'NGH3', 'DH024', '', 3),
('GH074', '2022-10-01', 'NGH3', 'DH024', '', 6),
('GH075', '2022-10-01', 'NGH3', 'DH026', '', 2),
('GH076', '2022-10-01', 'NGH3', 'DH026', '', 3),
('GH077', '2022-10-01', 'NGH3', 'DH026', '', 6),
('GH078', '2022-10-02', 'NGH3', 'DH027', '', 2),
('GH079', '2022-10-02', 'NGH3', 'DH027', '', 3),
('GH08', '2022-09-30', 'NGH3', 'DH04', '', 3),
('GH080', '2022-10-02', 'NGH3', 'DH027', '', 6),
('GH081', '2022-10-02', 'NGH5', 'DH031', '', 2),
('GH082', '2022-10-02', 'NGH5', 'DH029', '', 2),
('GH083', '2022-10-02', 'NGH5', 'DH030', '', 2),
('GH084', '2022-10-02', 'NGH5', 'DH031', '', 3),
('GH085', '2022-10-02', 'NGH5', 'DH030', '', 3),
('GH086', '2022-10-02', 'NGH5', 'DH031', '', 6),
('GH087', '2022-10-02', 'NGH5', 'DH030', '', 4),
('GH088', '2022-10-02', 'NGH5', 'DH029', '', 3),
('GH09', '2022-09-30', 'NGH3', 'DH04', '', 4);

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
  `sdt_nd` varchar(50) DEFAULT NULL,
  `boom` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `nguoi_dung`
--

INSERT INTO `nguoi_dung` (`ma_nd`, `ten_nd`, `gioi_tinh`, `ngay_sinh`, `email`, `mat_khau`, `dia_chi`, `quyen`, `sdt_nd`, `boom`) VALUES
('ND01', 'Phan Trung Hậu', 'Nam', '2000-04-19', 'haub1809235@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'Cần Thơ', '1', NULL, 0),
('ND02', 'Bùi Công Minh', 'Nam', '2000-09-14', 'minh@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0999484885', 0),
('ND03', 'Nguyễn Thị Hòa', 'Nữ', '2001-09-24', 'hoa@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0987667889', 0),
('ND06', 'Trần Minh Trí', 'Nam', '1996-09-24', 'tri@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0987654321', 0),
('ND07', 'Trần Minh a', 'Nam', '2022-09-01', 'aa@aa.aa', 'ef209c9343ca8c715265781876657b18', '', '', '0485849394', 0),
('ND08', 'Nguyễn Thị  Anh', 'Nữ', '2000-10-01', 'anh@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0858588584', 0),
('ND09', 'Trần Thế Hưng', 'Nam', '2000-10-01', 'hung@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0987654321', 5);

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
('NGH1', 'Bùi Công Minh', 'Nam', '2012-09-01', 'minh@gmail.com', 'Cần Thơ', '0987654321', 'ef209c9343ca8c715265781876657b18'),
('NGH3', 'Nguyễn Minh An', 'Nam', '2012-10-01', 'an@gmail.com', 'P.An Khánh, Q.Ninh Kiều, TP.Cần Thơ', '0972735273', 'ef209c9343ca8c715265781876657b18'),
('NGH5', 'Trần Văn Phát', 'Nam', '2012-09-07', 'phat@gmail.com', 'P.Xuân Khánh, Q.Ninh Kiều, TP.Cần Thơ', '092765485885', 'ef209c9343ca8c715265781876657b18');

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `credential` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `verify` tinyint(1) DEFAULT 0,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `user_id`, `email`, `fullname`, `credential`, `phone`, `gender`, `birthday`, `verify`, `active`) VALUES
(100, '114872046152355360109', 'nvnhan.dev@gmail.com', 'Nhẫn', '$2a$10$okmL2DBF5k0aGK1DofQnB.2qSG6OpKE8iBtiNu2/lggoxdzfdW/pO', NULL, NULL, NULL, 0, 1),
(103, '114872046152355360109', 'nvnhan.dev@gmail.com', 'Nhẫn', '$2a$10$dYtiqR8l6.a5yQ1V2PzE5uFErCW7CEZgdTlz0Av.unHagjzaLclLG', NULL, NULL, NULL, 0, 1),
(104, '114872046152355360109', 'nvnhan.dev@gmail.com', 'Nhẫn', '$2a$10$6JzivuK8aZgO5NOJcUJVuOPx0Gw9S4RAZKY2IOAe489ucerQigr6q', NULL, NULL, NULL, 0, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `anh_dai_dien`
--
ALTER TABLE `anh_dai_dien`
  ADD PRIMARY KEY (`ma_avt`);

--
-- Chỉ mục cho bảng `binh_luan`
--
ALTER TABLE `binh_luan`
  ADD PRIMARY KEY (`ma_bl`);

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
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

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
