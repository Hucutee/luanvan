import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Sosao() {
  const [value, setValue] = useState(5);

  return (
    <Box
     
    >  
      <Rating  size="small"name="read-only" value={value} readOnly />

    </Box>
  );
}
