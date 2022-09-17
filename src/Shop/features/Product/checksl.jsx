import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
Checksl.propTypes = {
    product: PropTypes.object
  };

export default function Checksl(product) {
 const [soluong, setSoluong]= useState(1);
  const handlesl = (value)=>{
    if(value >=0 && value%1 == 0 ){
        setSoluong(value);
    product.handleTruyensl(value);
    }
  };


  return (
   <Box >
     <TextField
     color="success"
          id="outlined-number"
          type="number"
          value={soluong}
          onChange={(e)=>handlesl(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
    
   </Box>
  );
}
