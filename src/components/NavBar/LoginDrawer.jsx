
import "./LogNavBar.css";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ReplyIcon from "@mui/icons-material/Reply";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import InfoIcon from "@mui/icons-material/Info";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";
import CloseIcon from "@mui/icons-material/Close";
import {Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginDrawer = ()=>{

  const user = JSON.parse(localStorage.getItem("userDetail"));
  const login = JSON.parse(localStorage.getItem("login"));
  const logOut = ()=>{
    axios.get('https://book-expert-backend-ravi.onrender.com/user/logout')
    .then(function (response) {
      console.log(response);
      toast.success("user is logged out successfully !!")
      handleClose();
      handleUserLogin(false);
      localStorage.removeItem('userDetail');
      localStorage.removeItem('login')
    })
    .catch(function (error) {
      console.log(error);
      toast.error("somethings went wrong!");
    });
  }


	const {
		// handleLogin,
		// loginData,
		// handleforget,
		// userLoggedIn,
		handleUserLogin,
	  } = useContext(LoginContext);
	
	  const [anchor, setAnchor] = useState(null);
	
	  const handleAnchor = (event) => {
		setAnchor(event.currentTarget);
	  };
	  const open = Boolean(anchor);
	  const handleClose = () => {
		setAnchor(null);
	  };


	return (<>
	<div onMouseDown={handleClose} >
			<div className="nav-profile" onMouseLeave={handleClose} >
            <Menu
              id="resourse-menu"
              anchorEl={anchor}
              open={open}
              MenuListProps={{
                "aria-labelledby": "resourse-button",
              }}
              onMouseLeave={handleClose}
            >
			<MenuItem
			  onClick={handleClose}
			//   sx={{ fontSize: "15px", color: "#6F6F6F" }}
			>
			  <CloseIcon sx={{ marginRight: ".5vw" }} />
			</MenuItem>
			<Link to="/profile" style={{textDecoration:'none'}} >
			  <MenuItem
              
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
               >
                <PermIdentityIcon sx={{ marginRight: ".5vw" }} /> Profile
               </MenuItem>
			</Link>
              
              <MenuItem
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                <PaymentIcon sx={{ marginRight: ".5vw" }} /> Payment
              </MenuItem>
              <MenuItem
          
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                <LocalMallIcon sx={{ marginRight: ".5vw" }} /> My Order
              </MenuItem>
              <MenuItem
           
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                {false ? (
                  <>
                    <ManageHistoryIcon sx={{ marginRight: ".5vw" }} /> Manage
                    Gig
                  </>
                ) : (
                  <>
                    <BrandingWatermarkIcon sx={{ marginRight: ".5vw" }} />{" "}
                    Manage Post{" "}
                  </>
                )}
              </MenuItem>
              <MenuItem
              
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                {true ? (
                  <>
                    <ContactMailIcon sx={{ marginRight: ".5vw" }} /> Membership
                  </>
                ) : (
                  <>
                    <PersonAddAltIcon sx={{ marginRight: ".5vw" }} /> Be a
                    freelancer
                  </>
                )}
              </MenuItem>
              <MenuItem
              
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                <InfoIcon sx={{ marginRight: ".5vw" }} /> Help & Support
              </MenuItem>
              <MenuItem
              
                onClick={handleClose}
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                <ReplyIcon sx={{ marginRight: ".5vw" }} /> Refer
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logOut();
                }}
                sx={{ fontSize: "15px", color: "#E45151" }}
              >
                <LogoutIcon sx={{ marginRight: ".5vw" }} /> Logout
              </MenuItem>
            </Menu>
            <Avatar
              variant="square"
              src={login && user.image?(user.image):("https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600")}
              
            />
            <IconButton color="primary" aria-label="add to shopping cart">
              <KeyboardArrowDownIcon
                id="resources-button"
                onClick={handleAnchor}
                aria-controls={open ? "resourse-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            </IconButton>
          </div>
			</div>
	</>)
}