import "./LogNavBar.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Box,
  Avatar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ReplyIcon from "@mui/icons-material/Reply";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import InfoIcon from "@mui/icons-material/Info";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const LogNavBar = () => {
  const {
    handleLogin,
    loginData,
    handleforget,
    userLoggedIn,
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
  return (
    <>
      <div id="nav-container">
        <div className="nav-logo">
          <Typography
            variant="body1"
            sx={{ color: "#FFFFFF", fontSize: "2rem" }}
          >
  {/*-------------------- Logo is here --------------------------------*/}
            Logo
          </Typography>
        </div>
        <div className="nav-searchAndbutton">
          <div className="nav-search">
            <TextField
              size="small"
              // label="Email Address"
              placeholder="What are you looking here eg. freelancer, projects"
              sx={{ width: "100%" }}
            />
          </div>
          <div className="nav-search-button">
            <Button
              variant="contained"
              sx={{
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                backgroundColor: "#1E1E1E",
                "&:hover": {
                  backgroundColor: "#1E1E1E !important",
                },
              }}
            >
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="nav-project-message-profile">
          <div className="nav-project">
{/* -------------------------search product is here -----------------------------------*/}
            <Button sx={{ color: "black" }}>Search Project</Button>
          </div>
          <div className="nav-mail">
            <Button>
              <Badge badgeContent={4} color="error">
{/*--------------------------- chat button outline icon -------------------------------*/}
                <ChatBubbleOutlineIcon
                  fontSize="large"
                  sx={{
                    color: "#0AB79B",
                  }}
                />
              </Badge>
            </Button>
          </div>
          <div className="nav-wishlist">
            <Button>
              <Badge badgeContent={4} color="error">
{/*--------------------------- wishlist button outline icon -------------------------------*/}
                <FavoriteBorderIcon
                  fontSize="large"
                  sx={{
                    color: "#0AB79B",
                  }}
                />
              </Badge>
            </Button>
          </div>
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
                sx={{ fontSize: "15px", color: "#6F6F6F" }}
              >
                <PermIdentityIcon sx={{ marginRight: ".5vw" }} /> Profile
              </MenuItem>
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
                  handleClose();
                  handleUserLogin(false);
                }}
                sx={{ fontSize: "15px", color: "#E45151" }}
              >
                <LogoutIcon sx={{ marginRight: ".5vw" }} /> Logout
              </MenuItem>
            </Menu>
            <Avatar
              variant="square"
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <IconButton color="primary" aria-label="add to shopping cart">
              <KeyboardArrowDownIcon
                id="resources-button"
                onMouseEnter={handleAnchor}
                aria-controls={open ? "resourse-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};
