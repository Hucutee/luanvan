import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import "./skeleton.css";

export default function Skeleton() {
 


  return (

      <div>
    <div class="spiner giua"></div>
    <div class="bar giua">
      <span class="dot1"></span>
      <span class="dot2"></span>
      <span class="dot3"></span>
    </div>
  </div>
        
    

  );
}
