

import style from "./NavBar.module.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Login } from "../Sign-in-Sign-up/Login";
import { SignUpMob } from "../Sign-in-Sign-up/SignUpMob";
import {ForgetPassword} from "../Sign-in-Sign-up/ForgetPassword";
import { useContext } from "react";
import {LoginContext} from "../ContextApi/LoginContext";
import "./LogNavBar.css";


import {LoginDrawer} from "./LoginDrawer";



import "./MobileNav.css";

import { Drawer,
	Box,
	Typography,
	IconButton,
	Menu,
	MenuItem 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PaymentIcon from "@mui/icons-material/Payment";
import TemporaryDrawer from "./Drawer";



export const MobileNav = ()=>{

	const [open, setOpen] = useState(false)
	const [anchor, setAnchor] = useState(true)
	const  handleClose =()=>{
		setAnchor(false)
	}
	return (<>
	<div className="Mob-container" >
		<div className="container-child1" >
		 <img src="http://www.bookxpert.co.in/assets/img/logo.png" alt="BookXpert" width="100%" height="" />
		</div>
		<div className="container-child2" >
			<TemporaryDrawer/>
		</div>
	</div>
	<div className="Mob-container-chearch" >
		<TextField
		    sx={{width:'100vw',
		    backgroundColor:'#c0dffc'
	     }}
		variant="outlined"
        id="input-with-icon-textfield"
        // label="TextField"
		placeholder="enter blog name here..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{
				cursor:'pointer',
				fontSize:'30px',
				color:'#05a0e8'
			  }} />
            </InputAdornment>
          ),
        }}
    
      />
		
			</div>
	</>)
}