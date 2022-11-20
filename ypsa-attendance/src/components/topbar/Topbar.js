import React, {useState} from "react";
import "./topbar.css";
import { Link } from "react-router-dom"
import topbarlogo from "./topbarlogo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from "@mui/material";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openForms = Boolean(anchorEl)

  const handleClick = (e) =>{
    setAnchorEl(e.currentTarget)
  };

  const handleClose = () =>{
    setAnchorEl(null);
  }

  return (
    <div className="wrapper">
      <nav className='topbar'>
        <img className="logo" src = {topbarlogo} alt = "Top Bar Logo" />
        <h3 className='title' > Attendance Tracker</h3>
        <ul className="nav-links">
          <Link className = "links" to='/Dashboard'><li>Dashboard</li></Link>
          <Link className = "links" to='/table'><li>Table</li></Link>
          <Typography
            aria-controls="forms-menu"
            aria-haspopup="true"
            aria-expanded={openForms ? 'true':undefined}
            onClick={handleClick}
          ><li>Forms</li></Typography>
          <Menu id='forms-menu' anchorEl={anchorEl} open={openForms}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/Form/EarlyDismissal"onClick={handleClose} id="earlyDismisal">Early Dismissal</MenuItem>
            <MenuItem component={Link} to="/Form/AbsenceForm" onClick={handleClose} id="excusedAbsence">Excused Absence</MenuItem>
            <MenuItem onClick={handleClose} id="late">Tardy</MenuItem>
          </Menu>
          
          <Link className = "links" to='/'><li>Logout</li></Link>

        </ul>

        <div className="topRight">
          <div className="topbarIconContainer">
             <AccountCircleIcon />
          </div>
        </div>
      </nav>

    </div>
  )
}


export default Topbar