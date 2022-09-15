import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Zoom from "react-img-zoom";
import PropTypes from "prop-types";

Texthinh.propTypes = {
    product: PropTypes.object,
  };
export default function Texthinh(product) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  width: "580px", height: "650px", bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
      >{product.data.map((aa)=>(
        <p> <Zoom
        img={require("../../../images/" + aa.hinhanh )}
        zoomScale={2}
        height={650}
        width={500}
        marginLeft="100px"
      /></p>
      ))}
 
      </Tabs>
    </Box>
  );
}
