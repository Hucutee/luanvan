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
('CHN7', 'HDN4', 'CT018', 20, '23000'),
('CHN8', 'HDN4', 'CT034', 20, '15000'),
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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chi_tiet_hdn`
--
ALTER TABLE `chi_tiet_hdn`
  ADD PRIMARY KEY (`ma_cthdn`);
COMMIT;


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
('CT019', 'SP09', 'KT01', 60, 12000, 'Sen đá xứ lạnh', 'Sen đá hồng dâu', 'Nhỏ', 'sen-da-hong-dau-nho.jpg'),
('CT020', 'SP09', 'KT02', 110, 20000, 'Sen đá xứ lạnh', 'Sen đá hồng dâu', 'Vừa', 'hong dau vua.jpg'),
('CT021', 'SP09', 'KT03', 110, 3000, 'Sen đá xứ lạnh', 'Sen đá hồng dâu', 'Trung', 'hong dau lon.jpg'),
('CT022', 'SP010', 'KT03', 110, 30000, 'Sen đá xứ lạnh', 'Sen đá hồng phấn', 'Trung', 'hong phan trung.jpg'),
('CT024', 'SP03', 'KT02', 110, 20000, 'Xương rồng ', 'Xương rồng thanh sơn', 'Vừa', 'xuong-rong-thanh-son-nho.jpg'),
('CT026', 'SP02', 'KT01', 110, 12000, 'Xương rồng', 'Xương rồng tay thỏ', 'Nhỏ', 'xuong-rong-tai-tho-nho.jpg'),
('CT027', 'SP011', 'KT02', 110, 50000, 'Chậu tiểu cảnh sen đá', 'Chậu tiểu cảnh sen đá', 'Vừa', 'chau cay van phong 1.jpg'),
('CT028', 'SP07', 'KT02', 160, 45000, 'Cây cảnh văn phòng', 'Cỏ may mắn', 'Vừa', 'co may man nho.jpg'),
('CT029', 'SP07', 'KT03', 110, 55000, 'Cây cảnh văn phòng', 'Cỏ may mắn', 'Trung', 'co may man to.jpg'),
('CT030', 'SP05', 'KT02', 110, 35000, 'Chậu gốm trồng sen', 'Chậu gốm sứ', 'Vừa', 'chau gom xu.jpg'),
('CT031', 'SP012', 'KT01', 130, 25000, 'Đá rải mặt Masato trọng lượng 1 kí', 'Đá Masato (1kg)', 'Nhỏ', 'masato.jpg'),
('CT032', 'SP08', 'KT01', 110, 130000, 'Đất Soilmix bao 6 kí', 'Đất Soilmix (bao 6kg)', 'Nhỏ', 'Soilimix.jpg'),
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
('CT060', 'SP034', 'KT03', 80, 120000, 'Sen đá xứ lạnh', 'Sen đá đế đỏ', 'Trung', 'S_758000-MLB26295115161_112017-O.jpg'),
('CT061', 'SP033', 'KT04', 60, 150000, 'Sen đá xứ lạnh', 'Sen đá kim cương', 'Lớn', 'sen-da-kim-cuong-xanh-1.jpg'),
('CT062', 'SP032', 'KT01', 60, 40000, 'Sen đá sứ lạnh', 'Sen đá tay gấu', 'Nhỏ', 'Sen-da-tay-gau-bear-Paw.jpg'),
('CT063', 'SP031', 'KT04', 80, 200000, 'Sen đá xứ lạnh', 'Sen đá đất xanh', 'Lớn', 'cay-sen-dưqeqw.jpg'),
('CT064', 'SP035', 'KT01', 110, 120000, 'Thuốc trị nấm', 'Thuốc trị nấm Anvil', 'Nhỏ', 'ANVIL-5SC-100ml.jpg'),
('CT065', 'SP036', 'KT01', 100, 80000, 'Thuốc tím Thái', 'Thuốc tím Thái', 'Nhỏ', '16a809279333351db996b0e5591ed2e4.jpg'),
('CT066', 'SP038', 'KT04', 70, 550000, 'Xương rồng kim hổ', 'Xương rồng kim hổ', 'Lớn', 'edbba0062a81dda5e0f70485dfed639e.jpg'),
('CT067', 'SP037', 'KT02', 60, 35000, 'Xương rồng bánh xinh nhật ', 'Xương rồng bánh sinh nhật', 'Trung', '20190409181519288.jpg'),
('CT068', 'SP039', 'KT03', 80, 70000, 'Xương rồng đuôi cáo to', 'Xương rồng đuôi cáo', 'Trung', 'e7866e257b8c998fd5e99b6d51fcfdc9.jpg'),
('CT069', 'SP040', 'KT03', 60, 72000, 'Chậu tiểu cảnh con cáo', 'Tiểu cảnh con cáo', 'Trung', 'ab8a8edb4457da83b2914bdb636d5bfb.jpg'),
('CT070', 'SP041', 'KT01', 50, 40000, 'Xương rồng Echino nhỏ', 'Xương rồng Echino', 'Nhỏ', '31422afbbdb638d049c02230ced888a5.jpg'),
('CT071', 'SP042', 'KT02', 56, 30000, 'Xương rồng Aster vừa', 'Xương rồng Aster', 'Vừa', 'hat-giong-xuong-rong-aster-1.__.jpg');

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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chi_tiet_san_pham`
--
ALTER TABLE `chi_tiet_san_pham`
  ADD PRIMARY KEY (`ma_ctsp`),
  ADD KEY `chi_tiet_san_pham` (`ma_sp`),
  ADD KEY `thuoc_san_pham` (`ma_sp`),
  ADD KEY `thuoc_kich_thuoc` (`ma_kt`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chi_tiet_san_pham`
--
ALTER TABLE `chi_tiet_san_pham`
  ADD CONSTRAINT `thuoc_kich_thuoc` FOREIGN KEY (`ma_kt`) REFERENCES `kich_thuoc` (`ma_kt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `thuoc_san_pham` FOREIGN KEY (`ma_sp`) REFERENCES `san_pham` (`ma_sp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;


--
-- Cấu trúc bảng cho bảng `hoa_don_nhap`
--

CREATE TABLE IF NOT EXISTS `hoa_don_nhap` (
  `ma_hdn` varchar(50) NOT NULL,
  `ngay_nhap` date NOT NULL,
  `ma_nv` varchar(50) NOT NULL,
  `ma_ncc` varchar(50) DEFAULT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ma_hdn`),
  KEY `thuoc_ncc` (`ma_ncc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hoa_don_nhap`
--

INSERT DELAYED IGNORE INTO `hoa_don_nhap` (`ma_hdn`, `ngay_nhap`, `ma_nv`, `ma_ncc`, `ghi_chu`) VALUES
('HDN1', '2022-09-10', 'NV01', 'CC01', 'Lô hàng sen đá mini'),
('HDN2', '2022-09-30', 'NV01', 'CC02', 'Hàng nhiều loại'),
('HDN3', '2022-09-27', 'NV01', 'CC03', 'Lô hàng xương rồng'),
('HDN4', '2022-09-28', 'NV01', 'CC04', 'Sen đá nhiều loại'),
('HDN5', '2022-09-25', 'NV01', 'CC05', 'Chậu gốm sứ');

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

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `hoa_don_nhap`
--
ALTER TABLE `hoa_don_nhap`
  ADD CONSTRAINT `thuoc_ncc` FOREIGN KEY (`ma_ncc`) REFERENCES `nha_cung_cap` (`ma_ncc`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;


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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `khuyen_mai`
--
ALTER TABLE `khuyen_mai`
  ADD PRIMARY KEY (`ma_km`),
  ADD KEY `khuyen_mai_loai_san_pham` (`sanpham_km`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `khuyen_mai`
--
ALTER TABLE `khuyen_mai`
  ADD CONSTRAINT `khuyen_mai_loai_san_pham` FOREIGN KEY (`sanpham_km`) REFERENCES `loai_san_pham` (`ma_lsp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;




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
('KT04', 'Lớn');

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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `kich_thuoc`
--
ALTER TABLE `kich_thuoc`
  ADD PRIMARY KEY (`ma_kt`);
COMMIT;



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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `loai_san_pham`
--
ALTER TABLE `loai_san_pham`
  ADD PRIMARY KEY (`ma_lsp`);
COMMIT;



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
('ND06', 'Trần Minh Trí', 'Nam', '1996-09-24', 'tri@gmail.com', 'ef209c9343ca8c715265781876657b18', '', '', '0987654321'),
('ND07', 'a a', 'Nam', '2022-09-01', 's@sss.jg', 'ef209c9343ca8c715265781876657b18', '', '', '099574636274'),
('ND08', 'â a', 'Nam', '2022-09-05', 'aa@ss.ss', 'ef209c9343ca8c715265781876657b18', '', '', '0983484358'),
('ND09', 'a a', 'Nam', '2022-09-14', 'haub@sss.sss', 'ef209c9343ca8c715265781876657b18', '', '', '049494949595');

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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `nguoi_dung`
--
ALTER TABLE `nguoi_dung`
  ADD PRIMARY KEY (`ma_nd`);
COMMIT;


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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `nha_cung_cap`
--
ALTER TABLE `nha_cung_cap`
  ADD PRIMARY KEY (`ma_ncc`);
COMMIT;


--
-- Cấu trúc bảng cho bảng `phieu_giam_gia`
--

CREATE TABLE `phieu_giam_gia` (
  `ma_pgg` varchar(50) NOT NULL,
  `ten_pgg` varchar(150) NOT NULL,
  `so_tien_giam` int(20) NOT NULL,
  `ngay_bd` date NOT NULL,
  `ngay_kt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `phieu_giam_gia`
--

INSERT INTO `phieu_giam_gia` (`ma_pgg`, `ten_pgg`, `so_tien_giam`, `ngay_bd`, `ngay_kt`) VALUES
('PGG4', 'Giảm giá trung thu', 10000, '2022-09-03', '2022-10-31');

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

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `phieu_giam_gia`
--
ALTER TABLE `phieu_giam_gia`
  ADD PRIMARY KEY (`ma_pgg`);
COMMIT;



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
('SP031', 'Sen đá đất xanh', 'LSP1', NULL);

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
-- Chỉ mục cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`ma_sp`),
  ADD KEY `loai_san_pham` (`loai_sp`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD CONSTRAINT `loai_san_pham` FOREIGN KEY (`loai_sp`) REFERENCES `loai_san_pham` (`ma_lsp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
