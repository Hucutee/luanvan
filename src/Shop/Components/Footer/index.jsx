import { Box, Grid, AppBar, Typography } from "@mui/material";
import * as React from "react";
import "./footer.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  rong: {
    width: "75%",
    margin: "auto",
    marginTop: "50px",
    marginTop: "50px",
  },
  grid1: {
    width: "40%",
    float: "left",
  },
  grid2: {
    width: "20%",
    float: "left",
  },
  footer1: {
    color: "#333",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  footer2: {
    color: "#333",
    fontSize: "16px",
    fontWeight: "350",
    marginBottom: "20px",
    marginRight: "40px",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    
    <Box>


      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "#fff" }}
        style={{ margin: "auto", width: "100%" }}
      >
        <Grid className="footerimg">
          <Grid className={classes.rong}>
            <Grid className={classes.grid1}>
              <Grid
                className={classes.footer1}
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#339900",
                }}
              >
                Hau's Garden
              </Grid>
              <Grid>
                <Grid className={classes.footer2}>
                  <Grid fontWeight="650">Địa chỉ:</Grid> Đường 3/2, phường Xuân
                  Khánh, quận Ninh Kiều, thành phố Cần Thơ
                </Grid>
                <Grid className={classes.footer2}>
                  <Grid fontWeight="650">Liên hệ:</Grid> 012345402135
                </Grid>
                <Grid className={classes.footer2}>
                  <Grid fontWeight="650">Email:</Grid>
                  haub1809235@student.ctu.edu.vn
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.grid2}>
              <Grid className={classes.footer1}>Cửa hàng</Grid>
              <Grid>
                <Grid className={classes.footer2}>a</Grid>
                <Grid className={classes.footer2}>a</Grid>
                <Grid className={classes.footer2}>a</Grid>
              </Grid>
            </Grid>
            <Grid className={classes.grid2}>
              <Grid className={classes.footer1}>Cửa hàng</Grid>
              <Grid>
                <Grid className={classes.footer2}>a</Grid>
                <Grid className={classes.footer2}>a</Grid>
                <Grid className={classes.footer2}>a</Grid>
              </Grid>
            </Grid>
            <Grid className={classes.grid2}>
              <Grid className={classes.footer1}>Cửa hàng</Grid>
              <Grid>
                <Grid className={classes.footer2}>a</Grid>
                <Grid className={classes.footer2}>a</Grid>
                <Grid className={classes.footer2}>a</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
