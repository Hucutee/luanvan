import { styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderManage from "../Header";
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});
const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  //   paddingTop: APP_BAR_MOBILE + 12,
  //   paddingBottom: theme.spacing(10),
  //   [theme.breakpoints.up('lg')]: {
  //     paddingTop: APP_BAR_DESKTOP,
  //     paddingLeft: '140px',
  //     paddingRight: '140px',
  //   },
}));
const HomeManagePage = () => {
  return (
    <RootStyle>
      <MainStyle>
        <HeaderManage/>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default HomeManagePage;
