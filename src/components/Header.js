import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import WineBarIcon from '@mui/icons-material/WineBar';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky">
            
        <Toolbar>
            <Typography>
                <WineBarIcon fontSize="large" />
                
            </Typography>
            <h1 className='home-h1'>Wine Index</h1>
            <Tabs 
            sx={{ml:'auto'}}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={( e, val) => setValue(val)}
            >
                    <Tab LinkComponent={NavLink} to="/" label='Home'/>
                    <Tab LinkComponent={NavLink} to="/wines" label='All Wines'/>
                    <Tab LinkComponent={NavLink} to="/add" label='Add Wine'/>
                    {/* <Tab LinkComponent={NavLink} to="/about" label='About Us'/> */}
            </Tabs>
        </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;