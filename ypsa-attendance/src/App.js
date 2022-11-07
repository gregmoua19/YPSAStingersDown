import './App.css';
import React from 'react';
import ypsacademylogo from "../src/images/ypsa-logo.png";
import {Container} from './components/styles/Container.styled'
import {LeftPane} from './components/styles/LeftPane.styled'
import {RightPane, Logo, Slogan} from './components/styles/RightPane.styled'
import {Title } from './components/styles/Wrapper.styled'


import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

function App() {
  return (
    <div className="App">
    <Container>
        <LeftPane>
          <h1> &nbsp; Welcome &nbsp; </h1>
          <h3> YPSA Attendance Tracker</h3>
          <Title>Parent Login</Title>
          
          <div class="Login">
        <IconTextField sx={{width:500, marginLeft:7, marginTop:2 }}
        label="Email / User name"
        iconStart={<EmailIcon sx={{ color: "#000", fontSize: 25}} />}
      />
      <IconTextField sx={{width:500, marginLeft:7, marginTop:2 }}
        label="Password"
        inputType="password" 
        name="password"
        iconStart={<KeyIcon sx={{ color: "#000", fontSize: 25}} />}
        iconEnd={<VisibilityIcon sx={{ color: "#000", fontSize: 25}} />}
      />
      <br/>
      <Checkbox  sx={{marginLeft:6, color:"#b8b8b8", '&.Mui-checked':{color:"#d1d1d1"} }}
      label={'Remember Me'}
      disableRipple
      size="small"
      /> 
        <p
        style={{fontSize:13, marginLeft:85, marginTop:-27}}>Remember Me</p>
        <p
        style={{fontSize:13, marginLeft:435, marginTop:-27}}>Forgot Password?</p>
      
      <Button
      variant='contained'
      sx={{ 
      backgroundColor: '#F99335',
      width: 500, 
      marginTop:2,
      marginLeft:7, 
      height: 45, 
      fontWeight:400,
      "&MuiButton-text":{ color: "#fff", hover:"#000"}
      }}
      >
  LOGIN
</Button>
        </div>
          
       </LeftPane>
      <RightPane>
       <Logo>
        <img src={ypsacademylogo} alt="YPSA Logo" />
        </Logo>
        <Slogan>Becoming Smart in More Ways than One</Slogan>
      </RightPane>
     </Container>

    
    </div>
  );
}

export default App;

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField 
      variant= "filled"
      

      {...props}
      InputProps={{
        disableUnderline: true,

        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
     
    />
  );
}