import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Tap() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper',  }}>
      
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          <Box value={value} index={0} dir={theme.direction} 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
            
           >
            <img className='img-panel' src='color1.webp' alt='.'   />
        </Box>
        <Box value={value} index={1} dir={theme.direction} 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
        >
            <img className='img-panel' src='color5.jpg_960x960.webp' alt='.'  />
        </Box>
        <Box value={value} index={2} dir={theme.direction} 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
        >
            <img className='img-panel' src='color3.webp' alt='.' />
        </Box>
        <Box value={value} index={3} dir={theme.direction} 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
        >
        <img className='img-panel' src='color4.webp' alt='.' />
        </Box>
        <Box value={value} index={3} dir={theme.direction} 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
        >
        <img className='img-panel' src='color5.webp' alt='.' />
        </Box>
        <Box value={value} index={3} dir={theme.direction} 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
        >
        <img className='img-panel' src='color7.webp' alt='.' />
        </Box>
      </SwipeableViews>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
        //   textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            display:'flex !important',
            flexWrap:'wrap !important'
          }}
        >
        <Tab
            
          label={<img className='img-tap ' src='color1.webp' alt='.'  />}
           {...a11yProps(0)} 
          />
         
          <Tab
            
          label={<img className='img-tap ' src='color5.jpg_960x960.webp' alt='.' />}
           {...a11yProps(1)} 
          />
         
          <Tab
            
          label={<img className='img-tap ' src='color3.webp' alt='.' />}
           {...a11yProps(2)} 
          />
         
          <Tab
            
          label={<img className='img-tap ' src='color4.webp' alt='.' />}
           {...a11yProps(3)} 
          />
         
          <Tab
            
            label={<img className='img-tap ' src='color5.webp' alt='.' />}
             {...a11yProps(4)} 
            />
           
            <Tab
            
            label={<img className='img-tap ' src='color7.webp' alt='.' />}
             {...a11yProps(5)} 
            />
           
         
        </Tabs>

    </Box>
  );
}