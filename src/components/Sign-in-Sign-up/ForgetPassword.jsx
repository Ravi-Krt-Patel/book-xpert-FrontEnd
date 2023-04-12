import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Stack,
	Box,
	IconButton,
	Typography,
	TextField,
	InputAdornment
	
  } from "@mui/material";
  import CloseIcon from '@mui/icons-material/Close';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import { useState } from "react";
  import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";
  
  
  export const ForgetPassword = () => {
  
	const {handleLogin,loginData,forgetData,handleforget,otpData,handleOTP} = useContext(LoginContext);
	  
	return (
	  <>
		<Dialog open={forgetData}
		//  onClose={() => handleforget(false)}
		sx={{
		  // height: '100%',
		  borderRadius:'20px !important',
		}}
		>
  
  
		  <DialogTitle
			id="dialog-title"
			sx={{
			  
			  backgroundColor: "#cde6fe",
			  // width: {
			  // 	sx: "100vw",
			  // 	sm: "100vw",
			  // 	md: 300,
			  // 	lg: 400,
			  // 	xl: 200,
			  //   },
			}}
		  >
			<div>
			  <div style={{float: 'left'}}>
				  <Typography variant="title1"
				  sx={{
					  fontSize:{
						  sm:24,
						  lg:30
					  },
					  fontWeight:600
				  }}
				   >Forgot Password ?</Typography>
			  </div>
			  <div style={{float: 'right'}} >
			  <IconButton onClick={() => handleforget(false)} >
				  <CloseIcon sx={{
					  color:'#05a0e8'
				  }} />
			  </IconButton>
			  </div>
			  <div style={{clear: 'both'}}></div>
			</div>
		  </DialogTitle>
		  
  
		  <Box
			sx={{
			  height: "1px",
			  width:{
				  sm:"100vw",
				  lg:"30vw"
				},
			  backgroundColor: "#B3B3B3",
			}}
		  ></Box>
		
		  <DialogContent
			sx={{
			  backgroundColor: "#cde6fe",
			  paddingBottom:0
			  
			}}
		  >
		   <Typography variant="body1" 
		   sx={{
			  fontWeight: 200,
			  width:{
				sm:'40vw',
				lg:'20vw'
			  },
			  fontSize:{
				  sm:18,
				  lg:18
			  },
			  color:'#6C6C6C',
			  margin:'1rem'
		   }}
			>Please type registered Email to get 6 
			digit code .</Typography>
  
  
		  <Stack spacing={2}>
			  <TextField
			  placeholder="eg. celestine@example.com"
			  label="Email Address" 
			  InputProps={{
				  startAdornment:<InputAdornment position="start" >
					  <MailOutlineIcon sx={{
			  color:'#05a0e8',
			  fontWeight:400
			}} />
				  </InputAdornment>
				  
			  }}
			  sx={{
				  '&:hover': {
					  color: '#0AB79B !important',
					},
				  
				  
			  }}
			   />
		  
  
		  </Stack>
		  
  
  
		  </DialogContent>
		  <div style={{backgroundColor:"#cde6fe",padding:'1.5rem'}} >
		  <Button variant="contained"
		  sx={{
			  width: '100%',
			  height: '54px',
			  backgroundColor:'#1E1E1E',
			  '&:hover': {
				  backgroundColor: '#1E1E1E !important',
				},
			  borderRadius:'10px'
			  
		  }}
		  onClick={()=>{
			handleOTP(true);
			handleforget(false);

		  }}
		  >Send OTP</Button>
  
		  </div>
		
		</Dialog>
	  </>
	);
  };
  