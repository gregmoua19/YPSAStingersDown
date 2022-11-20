import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import CssBaseline from '@mui/material/CssBaseline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = createTheme({
    palette: {
      background: {
        default: '#F6C798',
      },
      primary: {
        light: '#000000',
        main: '#ffffff',
        dark: '#a6a6a6',
        contrastText: '#000000',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
 

var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var prnDt = new Date().toLocaleTimeString('en-us', options);

const Dashboard = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box m="10px">
              <Typography variant="h4" component="h4" sx={{textAlign: 'center', fontWeight: 'bold'}}>Dashboard - Today, {prnDt} </Typography>
            </Box>
            <Grid container display="flex-basis">
              <Grid item>
                <PopupState variant="popover" popupId="popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button variant="contained" size="medium" sx={{ml: 85, mb: 2}}endIcon={<KeyboardArrowDownIcon />} {...bindTrigger(popupState)}>
                      Today
                      </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>Yesterday</MenuItem>
                          <MenuItem onClick={popupState.close}>Last Week</MenuItem>
                          <MenuItem onClick={popupState.close}>Last Month</MenuItem>
                        </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Grid>
            </Grid>    
    <Grid container display="flex-basis" justifyContent="center" columnSpacing={15}>
      <Grid item>
        <Paper elevation={20} style={{height:220, width:370}}>
          <Box p={2}>
            <Typography variant='h4' sx={{fontWeight:'bold'}}>Tardies</Typography>
            <Typography variant='h6' sx={{fontWeight: 'bold', mb:5, mt:3}}>NUM</Typography>
            <Typography variant='h7'>Students</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item>
      <Paper elevation={20} style={{height:220, width:370}}>
        <Box p={2}>
          <Typography variant='h4' sx={{fontWeight:'bold'}}>Excused Absences</Typography>
          <Typography variant='h6' sx={{fontWeight: 'bold', mb:5, mt:3}}>NUM</Typography>
          <Typography variant='h7'>Students</Typography>
        </Box>
        </Paper>
      </Grid>
      <Grid item>
      <Paper elevation={20} style={{height:220, width:370}}>
        <Box p={2}>
          <Typography variant='h4' sx={{fontWeight:'bold'}}>Early Dismissal</Typography>
          <Typography variant='h6' sx={{fontWeight: 'bold', mb:5, mt:3}}>NUM</Typography>
          <Typography variant='h7'>Students</Typography>
        </Box>
        </Paper>
      </Grid>
    </Grid>
    <Grid container display="flex-basis" justifyContent="center" marginTop={5} columnSpacing={10}>
    <Grid item>
      <Paper elevation={20} style={{height:400, width:800}}>
        <Box p={2}>
          <Typography variant='h5' sx={{fontWeight:'bold'}}> Tardies -  {prnDt}</Typography>
          <Typography variant='h2'>GRAPH HERE</Typography>
        </Box>
      </Paper>
    </Grid>
    <Grid item>
        <Paper elevation={20} style={{height:600, width:480}}>
          <Box p={2}>
            <Typography variant='h3' sx={{fontWeight:'bold'}}>Upcoming Events</Typography>
            <Typography variant='h5'>Today</Typography>
            <Typography variant='subtitle1' >Early Dismissal: Bell Jerome</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
        </ThemeProvider>
    )
}   

export default Dashboard