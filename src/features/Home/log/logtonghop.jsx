import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import log1 from "./log1.png";
import log2 from "./log2.png";
import log3 from "./log3.png";
const useStyles = makeStyles((theme) => ({
  root: {},
  mot: {
    width: "31%",
    color: "#333",

    border: "1px solid #ccffcc",
    fontSize: "18px",
    fontWeight: "500",
    "&:hover": {
      opacity: 0.8,
    },
  },
  hai: {
    padding: 20,
  },
  ba: {
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "70px",
    lineHeight: "50px",
    marginBottom: "20px",
  },
}));

function Logg() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid className={classes.ba}>
            Góc Chia Sẻ
            <Grid
              style={{
                borderBottom: "3px solid #339900",
                width: "60px",
                margin: "auto",
              }}
            ></Grid>
          </Grid>

          <Grid container>
            <Grid item marginRight={3} className={classes.mot}>
              <img src={log1} width="100%" />
              <Grid className={classes.hai}>
                Cách chăm sóc cây khi mới mua về
              </Grid>
            </Grid>
            <Grid item marginRight={3} className={classes.mot}>
              <img src={log2} width="100%" />
              <Grid className={classes.hai}>
                Cách chăm sóc cây khi mới mua về
              </Grid>
            </Grid>
            <Grid item marginRight={3} className={classes.mot}>
              <img src={log3} width="100%" />
              <Grid className={classes.hai}>
                Cách chăm sóc cây khi mới mua về
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Logg;
