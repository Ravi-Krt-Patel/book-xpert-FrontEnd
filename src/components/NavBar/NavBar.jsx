
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
import { Outlet,Link } from "react-router-dom";

import {LoginDrawer} from "./LoginDrawer";


const NavBar = ()=>{
	const {
		//  handleUserSignUp, 
		userLoggedIn,
		 handleLogin } = useContext(LoginContext);

		 const scrollHandler = ()=>{
			window.scrollTo(0,0);
		  }
	
	  

	return (<>
	<div className={style.container} >
		<Link to="/" style={{textDecoration:'nome'}}  >
		  <div className={style.logo} onClick={scrollHandler} >
			<img src="http://www.bookxpert.co.in/assets/img/logo.png" alt="BookXpert" width="100%" height="" />
		  </div>
		</Link>
		
		<div>
		<TextField
		    sx={{width:'30vw',
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
		{/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
			  {/* <Button variant="contained" endIcon={<SendIcon />}>
                Send
               </Button> */}
			</div>
		<div className={style.Navbutton} >

			
			<Link to="/about" style={{textDecoration: 'none'}} >
			<div className={style.item} onClick={scrollHandler} >
				{/* About us */}
				
				<Button variant="text" sx={{
					color:'#05529aeb',
					width:'5vw'
				}}
				>About</Button>
				<div className={style.bar} ></div>
			</div>
			</Link>
			
			<Link to="/blogs" style={{textDecoration: 'none'}} >
			  <div className={style.item} onClick={scrollHandler} >
			   <Button variant="text" sx={{
					color:'#05529aeb'
				}} >Blogs</Button>
				<div className={style.bar} ></div>
			  </div>
			</Link>
			
			<Link to="/services" style={{textDecoration: 'none'}} >
			 <div className={style.item} onClick={scrollHandler} >
			   <Button variant="text" sx={{
					color:'#05529aeb'
				}} >Services</Button>
				<div className={style.bar} ></div>
			 </div>
			</Link>
			
			{userLoggedIn?(<div className={style.item} >
				<LoginDrawer/>
			</div>):(<div className={style.item} >
			   <Button variant="text" sx={{
					color:'#05529aeb'
				}}
				onClick={()=>{
					handleLogin(true)
				}}
				 >Login</Button>
				<div className={style.bar} ></div>
			</div>)}
			
		</div>
	</div>
	<Login/>
	<SignUpMob/>
	<ForgetPassword/>
	<Outlet/>
	</>)
}

export default NavBar;