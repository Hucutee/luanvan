import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Paper, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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
import chitietsanphamApi from "../../../Manage/api/chitietsanphamApi";
import Zoom from "react-img-zoom";
import Texthinh from "./texthinh";
import khuyenmaiAPI from "../../../Manage/api/khuyenmaiApi";
import Sptt from "./sptt";
import Checksl from "./checksl";

Chitietsp.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "540px",
    height: "600px",
    padding: 2,
  },
  right: {
    padding: "20px",
    border: "1px solid #ededed",
    width: "600px",
  },
}));

function Chitietsp() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const params = useLocation();
  const productId = params.pathname.slice(10);
  const [data, setData] = useState([]);
  const [datasp, setDatasp] = useState([]);
  const [makt, setMakt] = useState("");
  const [mactsp, setMactsp] = useState("");
  const [tenkt, setTenkt] = useState("");
  const [soluong, setSoluong] = useState(0);
  const [soluongnhap, setSoluongnhap] = useState(1);

  const [giaban, setGiaban] = useState("");
  const [hinhanh, setHinhanh] = useState("");
  const [km, setKm] = useState([]);
  const handleTruyenn = (aaa,hinhanh) =>{
    console.log(aaa);setHinhanh(hinhanh);
     setCount((e) => e + 1);

  }
  const handleTruyensl = (aaa) =>{
    setSoluongnhap(aaa);
     setCount((e) => e + 1);


  }
  const handleAddToCartSubmit = (formValues) => {
    console.log("form", formValues);
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeha = (mactsp,ha,makt,tenkt,sl,gb) => {
    setMactsp(mactsp);
    setMakt(makt); setTenkt(tenkt); setSoluong(sl); setGiaban(gb);
    setHinhanh(ha); setCount((e) => e + 1);  
  };
const handleaddcart = () =>{
  if(soluongnhap > 0){
    console.log(soluongnhap);
    if(soluongnhap <= soluong){
      console.log(soluongnhap,soluong);
    }else{
        console.log("ko du hang");
      
    }
  }else{
    console.log("nhap so > 0");
  }
}

  useEffect(() => {
    (async () => {
      try {
        console.log(soluong);
        const dataa = await chitietsanphamApi.getsp(productId);
        const dataaa = await chitietsanphamApi.getsp1(productId);
        const kmm = await khuyenmaiAPI.getkm(productId); setKm(kmm);
        setData(dataa);
        setDatasp(dataaa); 
        
       
      } catch (error) {
        console.log("loi", error);
      }
    })();
  }, [count]);

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
              separator="&ensp; › &ensp;"
              aria-label="breadcrumb"
              style={{
                fontSize: "13px",
                lineHeight: "40px",
              }}
            >
              <Link underline="hover" color="inherit" href="/app">
                Trang chủ
              </Link>
              <Link underline="hover" color="inherit" href="/app">
                Sản phẩm
              </Link>
              <Link underline="hover" color="#339900">
                Chi tiết sản phẩm
              </Link>
            </Breadcrumbs>
          </div>
          <Grid container>
            <Grid item  className={classes.left}>
            <Typography>

              {hinhanh =="" ? (
                  datasp.map((aa)=>( <div style={{ float: "left", marginBottom: "10px" , marginLeft: "8px" }}> <Zoom
                    img={require("../../../images/" + aa.hinhanh )}
                    zoomScale={2}
                    height={600}
                    width={500}
                  /></div>))
                 ): (
                  data.map((aa)=>(
                    hinhanh == aa.hinhanh ?  <div style={{marginBottom: "10px" , marginLeft: "8px" }}> <Zoom
                    img={require("../../../images/" + hinhanh )}
                    zoomScale={2}
                    height={600}
                    width={500}
                  /></div> : <p></p>
                  ))
                 )}
              </Typography> 
              <Typography>
                { data.map((aa)=>(
                      <Button  color="success" onClick={(e)=>handleChangeha(aa.ma_ctsp,aa.hinhanh,aa.ma_kt,aa.ten_kt,aa.soluong,aa.giaban)}> <Zoom
                    img={require("../../../images/" + aa.hinhanh )}
                    height={100}
                    width={100}
                   onClick={(e) => setHinhanh(aa.hinhanh)}
                  /></Button>
                  ))}
                </Typography> </Grid>
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
                {datasp.map((aa) => aa.ten_sp)}
              </Typography>
              <Typography>
                {" "}
                <Rating
                  style={{ marginTop: "10px" }}
                  size="small"
                  name="half-rating-read" defaultValue={2.6} precision={0.1}
                  
                  readOnly
                />
              </Typography>
              <Typography
               
              >
                {giaban =="" ? (
                 km.length ? (
                  km.map((aaa)=>(
                    datasp.map((aa)=>(<p><span style={{fontSize:"20px", color:"#333", fontWeight:"300", textDecoration: "line-through"
                  }}>{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(aa.giaban)}</span>&ensp; &ensp;
                     <span  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
                }}>{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(aa.giaban-aa.giaban*aaa.phantram_km/100)}</span></p>)
                   )
                  ))
                 ):( datasp.map((aa)=>(<p  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
                }}> {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(aa.giaban)}</p>)
               ))): (km.length ? (
                km.map((aaa)=>(
                  <p><span style={{fontSize:"20px", color:"#333", fontWeight:"300", textDecoration: "line-through"
                }}>{new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(giaban)}</span>&ensp; &ensp;
                   <span  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
              }}>{new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(giaban-giaban*aaa.phantram_km/100)}</span></p>)
                 )
                
               ):(<p  style={{  fontSize: "36px",  lineHeight: "60px",  fontWeight: "700",  color: "#ABD373",  fontFamily: "IBM Plex Sans,sans-serif",
              }}> {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(giaban)}</p>)
             )}
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
                 {tenkt =="" ? (
                  datasp.map((aa)=>(<p>Số lượng: {aa.soluong ? <span style={{color:"#339900", fontWeight:"400"}}>{aa.soluong}</span> : <span style={{color:"RED"}}>hết hàng</span>}, &ensp; &ensp; kích thước: <span style={{color:"#339900", fontWeight:"400"}}>{aa.ten_kt}</span></p>))
                 ): (<p>Số lượng: {soluong ? <span style={{color:"#339900",fontWeight:"400"}}>{soluong}</span> : <span style={{color:"red"}}>hết hàng</span>}, &ensp; &ensp; kích thước: <span style={{color:"#339900", fontWeight:"400"}}>{tenkt}</span></p>)}
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

                  {data.map((aa) => (
                    aa.soluong ? <Button variant="contained" color="success" onClick={(e)=>handleChangeha(aa.ma_ctsp,aa.hinhanh,aa.ma_kt,aa.ten_kt,aa.soluong,aa.giaban)}>
                    {aa.ten_kt}
                  </Button> :  <Button variant="outlined" color="success" onClick={(e)=>handleChangeha(aa.ma_ctsp,aa.hinhanh,aa.ma_kt,aa.ten_kt,aa.soluong,aa.giaban)}>
                    {aa.ten_kt}
                  </Button>
                  ))}
                </Stack>
              </Typography>
              <Stack
                style={{ height: "50px" }}
                direction="row"
                spacing={2}
                marginTop="30px"
                marginBottom="30px"
              >
                <p style={{marginTop:"10px"}}>Số lượng: </p>
               
                <Checksl data={soluong} handleTruyensl={handleTruyensl}/>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "20px", backgroundColor: "#ABD373", height: "55px" }}
                  onClick={handleaddcart}
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
              {datasp.map((aa)=>(
                <Sptt data={aa} handleTruyenn={handleTruyenn}/>
              ))}
            </Paper>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Chitietsp;
