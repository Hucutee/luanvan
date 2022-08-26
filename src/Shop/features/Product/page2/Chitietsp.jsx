import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Paper, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import ProductThumbnail from "../components/ProductThumbnail";
import { useLocation } from "react-router-dom";
import useProductDetail from "../Hook/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddToCartForm from "../components/Filters/AddToCartForm";
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import hotro from "./hotro.png";
import baomat from "./baomat.png";
import { useState } from "react";
import { useEffect } from "react";
import productApi from "../../../../api/productApi";
import ProductList from "../../../features/Product/components/ProductListLienquan";
Chitietsp.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "500px",
    padding: 2,
  },
  right: {
    padding: "20px",
    border: "1px solid #ededed",
    width: "600px",
  },
}));

function Chitietsp(props) {
  const classes = useStyles();
  const params = useLocation();
  const productId = params.pathname;
  const { product, loading } = useProductDetail(productId);
  console.log(product);
  const handleAddToCartSubmit = (formValues) => {
    console.log("form", formValues);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [productList, setProductList] = useState([]);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 4,
  });
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll(filters);
        setProductList(data.data);
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [filters]);
  const soluong = 2;
  const loai = product.category;
  console.log(loai);

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <div
            role="presentation"
            style={{
              borderTop: "1px solid #ededed",
              borderBottom: "1px solid #ededed",
              marginBottom: "40px",
            }}
          >
            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              style={{
                fontSize: "13px",
                lineHeight: "40px",
              }}
            >
              <Link underline="hover" color="inherit" href="/app">
                Trang chủ
              </Link>
              <Link underline="hover" color="#339900">
                Chi tiết sản phẩm
              </Link>
            </Breadcrumbs>
          </div>
          <Grid container>
            <Grid item marginRight={5} className={classes.left}>
              <ProductThumbnail />
            </Grid>
            <Grid item className={classes.right}>
              <Typography
                component="h1"
                variant="h3"
                style={{
                  fontSize: "30px",
                  fontWeight: "300",
                  lineHeight: "50px",
                  color: "#333",
                }}
              >
                {product.name}
              </Typography>
              <Typography>
                {" "}
                <Rating
                  style={{ marginTop: "10px" }}
                  size="small"
                  name="read-only"
                  value={4}
                  readOnly
                />
              </Typography>
              <Typography
                style={{
                  fontSize: "36px",
                  lineHeight: "60px",
                  fontWeight: "700",
                  color: "#ABD373",
                  fontFamily: "IBM Plex Sans,sans-serif",
                }}
              >
                {product.salePrice}
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  lineHeight: "30px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                Trang thai: Con Hang
              </Typography>
              <Typography
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "24px",
                  padding: "23px",
                  color: "#333",
                  borderTop: "1px solid #f0f0f0",
                  borderBottom: "1px solid #f0f0f0",
                  marginBottom: "20px",
                }}
              >
                Trái ngược với việc sử dụng 'Nội dung ở đây, nội dung ở đây',
                làm cho nó giống như tiếng Anh có thể đọc được. Nhiều gói xuất
                bản trên máy tính để bàn và trình chỉnh sửa trang web hiện sử
                dụng Lorem Ipsum làm văn bản mô hình mặc định của họ và tìm kiếm
                ...
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  paddingTop: "23px",
                  color: "#333",
                }}
              >
                {" "}
                <Stack direction="row" spacing={2} style={{ height: "50px" }}>
                  <p style={{ marginTop: "10px" }}>Kích thước: </p>
                  <Button variant="contained" color="secondary">
                    Nhỏ
                  </Button>
                  <Button variant="contained" color="success">
                    Vừa
                  </Button>
                  <Button variant="contained" color="error">
                    Lớn
                  </Button>
                </Stack>
              </Typography>
              <Stack
                style={{ height: "55px" }}
                direction="row"
                spacing={2}
                marginTop="30px"
                marginBottom="30px"
              >
                <p>Số lượng: </p>
                <TextField
                  color="success"
                  id="outlined-number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ padding: "none" }}
                />
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "20px", backgroundColor: "#ABD373" }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Stack>

              <Button
                variant="contained"
                color="success"
                sx={{
                  marginLeft: "20px",
                  width: "90%",
                  height: "50px",
                  backgroundColor: "#ABD373",
                }}
              >
                Mua ngay
              </Button>
              <Grid
                style={{
                  borderBottom: "1px solid #ededed",
                  marginTop: "30px",
                  marginBottom: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></Grid>
              <Grid>
                <Typography
                  style={{
                    width: "50%",
                    float: "left",
                  }}
                >
                  <Typography style={{ float: "left" }}>
                    {" "}
                    <img src={hotro} width="50px" />
                  </Typography>{" "}
                  <Typography
                    style={{
                      width: "200px",
                      fontSize: "16px",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Hỗ trợ khách hàng tận tâm 24/7
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    width: "50%",
                    float: "left",
                  }}
                >
                  <Typography style={{ float: "left" }}>
                    {" "}
                    <img src={baomat} width="50px" />
                  </Typography>{" "}
                  <Typography
                    style={{
                      width: "200px",
                      fontSize: "16px",
                      fontWeight: "300",
                      float: "left",
                    }}
                  >
                    Phương thức thanh toán an toàn
                  </Typography>
                </Typography>
              </Grid>
            </Grid>

            <AddToCartForm onSubmit={handleAddToCartSubmit} />
          </Grid>
          <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  style={{
                    marginLeft: "35%",
                  }}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  indicatorColor="none"
                >
                  <Tab label="Mô tả" value="1" style={{ fontSize: "20px" }} />
                  <Tab
                    label="Đánh giá"
                    value="2"
                    style={{ fontSize: "20px" }}
                  />
                  <Tab
                    label="Bình luận"
                    value="3"
                    style={{ fontSize: "20px" }}
                  />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "24px",
                  padding: "23px",
                  color: "rgb(128,128,128)",
                  borderTop: "1px solid #f0f0f0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat. In a free hour, when
                our power of choice is untrammelled and when nothing prevents
                our being able to do what we like best, every pleasure is to be
                welcomed and every pain avoided. But in certain circumstances
                and owing to the claims of duty or the obligations of business
                it will frequently occur that pleasures have to be repudiated
                and annoyances accepted. The wise man therefore always holds in
                these matters to this principle of selection: he rejects
                pleasures to secure other greater pleasures, or else he endures
                pains to avoid worse pains.
              </TabPanel>
              <TabPanel value="2">
                <Grid sx={{ p: 4, border: "1px solid #ededed" }}>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#333",
                      }}
                    >
                      Phản hồi của khách hàng
                    </Typography>
                    <Grid style={{ marginTop: "15px" }}>
                      <Rating
                        style={{ float: "left", marginRight: "10px" }}
                        size="big"
                        name="read-only"
                        value={4}
                        readOnly
                      />{" "}
                      <Typography
                        style={{
                          color: "#333333",
                          fontSize: "15px",
                          fontWeight: "300",
                        }}
                      >
                        2 lượt đánh giá
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                  <Grid>
                    <Grid style={{ marginTop: "15px" }}>
                      <Rating size="big" name="read-only" value={3} readOnly />{" "}
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      Nội dung đánh giá
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                      <i>
                        {" "}
                        Được thêm bởi <b> hậu </b> ngày <b> 11-11-2022</b>
                      </i>
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                  <Grid>
                    <Grid style={{ marginTop: "15px" }}>
                      <Rating size="big" name="read-only" value={5} readOnly />{" "}
                    </Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      Nội dung đánh giá
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                      <i>
                        {" "}
                        Được thêm bởi <b> hậu </b>{" "}
                      </i>
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <Grid sx={{ p: 4, border: "1px solid #ededed" }}>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#333",
                      }}
                    >
                      Bình luận của khách hàng
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      Nội dung bình luận
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                      <i>
                        {" "}
                        Được thêm bởi <b> hậu </b> ngày <b> 11-11-2022</b>
                      </i>
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                  <Grid>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "40px",
                        color: "#333",
                      }}
                    >
                      Nội dung đánh giá
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "15px",
                        fontWeight: "300",
                      }}
                    >
                      <i>
                        {" "}
                        Được thêm bởi <b> hậu </b>{" "}
                      </i>
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      borderBottom: "1px solid #ededed",
                      marginTop: "30px",
                      marginBottom: "30px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
          <Box>
            <Paper elevation={0}>
              <Grid
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "70px",
                  lineHeight: "50px",
                }}
              >
                Sản Phẩm tương tự
                <Grid
                  style={{
                    borderBottom: "3px solid #339900",
                    width: "60px",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                ></Grid>
              </Grid>
              <ProductList data={productList} />
            </Paper>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Chitietsp;
