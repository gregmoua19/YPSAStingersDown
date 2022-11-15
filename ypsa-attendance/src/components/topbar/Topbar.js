import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom"
import topbarlogo from "./topbarlogo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Topbar = () => {
  return (
    <div className="wrapper">
      <nav className='topbar'>
      
        <img className="logo" src = {topbarlogo} alt = "Top Bar Logo" />
        <h3 className='title' > Attendance Tracker</h3>
        <ul className="nav-links">
          <Link to='/Dashboard'><li>Dashboard</li></Link>
          <Link to='/table'><li>Table</li></Link>
          <Link to='/form'><li>Forms</li></Link>
          <Link to='/'><li>Logout</li></Link>
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

// export default function Topbar() {
//   return (
//     <div className="topbar">
//       <div className="topbarWrapper">
//         <div className="topLeft">
//           <img className="logo" src = {topbarlogo} alt = "Top Bar Logo" />
//           <span className="title"> YPSA Attendance Tracker</span> 
//         </div>
//         <div className="topMiddle">
//           <div className="dashboardContainer">

//           </div>
//         </div>
//         <div className="topRight">
//           <div className="topbarIconContainer">
//             <AccountCircleIcon />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

export default Topbar