import './Login.css';
import React from 'react';
import ypsacademylogo from "../../images/ypsa-logo.png";
import { Link, Redirect } from 'react-router-dom'


import { Container } from '../../components/styles/Container.styled'
import { LeftPane } from '../../components/styles/LeftPane.styled'
import { RightPane, Logo, Slogan } from '../../components/styles/RightPane.styled'
import { Title } from '../../components/styles/Wrapper.styled'


import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { FirebaseAuth } from '../../config/FirebaseDB';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {Dashboard} from '../dashboard/Dashboard'

class Login extends React.Component {

  login() {
    document.onclick=function(){
      const loginForm = document.querySelector('#login-form');  
      console.log("testing");
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
        console.log(email, password);

        // sign up the user
        signInWithEmailAndPassword(FirebaseAuth, email, password)
        .then(cred => {
         console.log(cred);
         console.log('Successfully Logged In');
         window.location.href = '/Dashboard'

        })
        .catch((err) => {
          console.log('Error: ' + err.toString());
          //TODO: FIX SO THAT AN ERROR MESSAGE SHOWS WRONG EMAIL OR PASSWORD ONCE

          //const message = <Alert severity="warning">Wrong Password or Email</Alert> 
          const alert = document.createElement("Alert")
          alert.innerHTML = "Wrong Email or Password"
          document.getElementById('error-display').appendChild(alert);
        })
      }); 
    }
  }
  
render(){
  return (
    <div className="Login">
      <Container>
        <LeftPane>
          <h1> &nbsp; Welcome &nbsp; </h1>
          <h3> YPSA Attendance Tracker</h3>
          <Title>Staff Login</Title>

          <div class="Login">
          <form id="login-form">
            <IconTextField sx={{ width: 500, marginLeft: 7, marginTop: 2 }}
              type = "email"
              id = "login-email"
              label="Email"
              iconStart={<EmailIcon sx={{ color: "#000", fontSize: 25 }} />}
              required
            />
            <IconTextField sx={{ width: 500, marginLeft: 7, marginTop: 2 }}
              type = "password"
              id = "login-password"
              label="Password"
              inputType="password"
              name="password"
              iconStart={<KeyIcon sx={{ color: "#000", fontSize: 25 }} />}
              iconEnd={<VisibilityIcon sx={{ color: "#000", fontSize: 25 }} />}
              required
            />
            <br />
            <Checkbox sx={{ marginLeft: 6, color: "#b8b8b8", '&.Mui-checked': { color: "#d1d1d1" } }}
              label={'Remember Me'}
              disableRipple
              size="small"
            />
            <p
              style={{ fontSize: 13, marginLeft: 85, marginTop: -27 }}>Remember Me</p>
            <p
              style={{ fontSize: 13, marginLeft: 435, marginTop: -27 }}>Forgot Password?</p>

            {/* <Button
              component={Link} to="/Dashboard"
              variant='contained'
              sx={{
                backgroundColor: '#F99335',
                width: 500,
                marginTop: 2,
                marginLeft: 7,
                height: 45,
                fontWeight: 400,
                "&MuiButton-text": { color: "#fff", hover: "#000" }
              }}
            >
              LOGIN
            </Button> */}

            {/*----- MAKE SO THAT BUTTON CHANGES COLOR ON HOVER OR ON CLICKED -----*/}
            <button id = "btn" style={{ margin:60 , backgroundColor: '#F99335', width: 500, height: 45, fontWeight: 'bold'}} 
            onClick={this.login}>Login</button>
            </form>
            <div id = 'error-display'></div>
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
}

export default Login;

// window.onclick=function(){
//   const btn = document.getElementById('btn')
//   btn.addEventListener('click', function onClick(){
//     btn.style.backgroundColor = 'Blue'
//   })    
// }


const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      variant="filled"


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