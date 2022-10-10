import React, {useEffect} from "react";
import {useSnackbar} from "notistack";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import payOnlineAPI from "../../../Manage/api/payOnlineAPI";

function Kttt() {
 
  
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <Stack sx={{color: "grey.500"}}>
          <CircularProgress color="success" />
        </Stack>
      </div>
    </div>
  );
}

export default Kttt;
