import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	Grid,
	DialogActions,
	Stack,
	Box,
	IconButton,
	Typography,
	TextField,
	InputAdornment,
	FormControl,
	InputLabel,
	OutlinedInput
  } from "@mui/material";
  import CloseIcon from '@mui/icons-material/Close';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import LockOpenIcon from '@mui/icons-material/LockOpen';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import Visibility from '@mui/icons-material/Visibility';
  import { useState } from "react";
  
 
  
  
  export const ResetPassword = () => {
  
	  const [showPassword, setShowPassword] = useState(false);
  
	  const handleClickShowPassword = () => setShowPassword((show) => !show);
	
	  const handleMouseDownPassword = (event) => {
		event.preventDefault();
	  };
  
  
	const [open, setOpen] = useState(false);
	return (
	  <>
		<Button onClick={() => setOpen(true)}>Reset Password</Button>
		<Dialog open={open} onClose={() => setOpen(false)}
		sx={{
		  // height: '100%',
		  borderRadius:'20px !important',
		}}
		>
  
  
		  <DialogTitle
			id="dialog-title"
			sx={{
			  
			  backgroundColor: "#E7FFFB",
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
				   >Reset Password</Typography>
			  </div>
			  <div style={{float: 'right'}} >
			  <IconButton onClick={() => setOpen(false)} >
				  <CloseIcon sx={{
					  color:'#0AB79B'
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
			  backgroundColor: "#E7FFFB",
			  paddingBottom:0
			  
			}}
		  >
	
  
		  <Stack spacing={2}>
			  
		  
  
		   <FormControl sx={{ }} variant="outlined">
			<InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
			<OutlinedInput
			  id="outlined-adornment-password"
			  type={showPassword ? 'text' : 'password'}
			  
			  placeholder="&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733;"
  
			  startAdornment={
				  <InputAdornment position="start">
					<LockOpenIcon
					  sx={{
						  color:'#0AB79B',
						  fontWeight:400,
						}}
					/>
				  </InputAdornment>
				}
  
			  endAdornment={
				<InputAdornment position="end">
				  <IconButton
					aria-label="toggle password visibility"
					onClick={handleClickShowPassword}
					onMouseDown={handleMouseDownPassword}
					edge="end"
				  >
					{showPassword ? <VisibilityOff 
					sx={{
					  color:'#0AB79B',
					  fontWeight:400,
					}} /> : <Visibility 
					sx={{
					  color:'#0AB79B',
					  fontWeight:400,
					}} />}
				  </IconButton>
				</InputAdornment>
			  }
			  label="Password"
			/>
		  </FormControl>



		  <FormControl sx={{width: '100%'}} variant="outlined">
			<InputLabel  htmlFor="outlined-adornment-password" >Confirm New Password</InputLabel>
			<OutlinedInput
			  id="outlined-adornment-password"
			  type={showPassword ? 'text' : 'password'}
			  
			  placeholder="&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733;"
			  
			  startAdornment={
				  <InputAdornment position="start">
					<LockOpenIcon
					  sx={{
						  color:'#0AB79B',
						  fontWeight:400,
						}}
					/>
				  </InputAdornment>
				}
  
			  endAdornment={
				<InputAdornment position="end">
				  <IconButton
					aria-label="toggle password visibility"
					onClick={handleClickShowPassword}
					onMouseDown={handleMouseDownPassword}
					edge="end"
				  >
					{showPassword ? <VisibilityOff 
					sx={{
					  color:'#0AB79B',
					  fontWeight:400,
					}} /> : <Visibility 
					sx={{
					  color:'#0AB79B',
					  fontWeight:400,
					}} />}
				  </IconButton>
				</InputAdornment>
			  }
			  label="Password"
			/>
		  </FormControl>
  
  
  
  
  
  
		  </Stack>
		 
  
  <Typography variant="body1"
  sx={{
	color: '#7B7B7B',
	fontSize:'12px',
	width:{
		sm:'30vw',
		lg:'25vw'
	}
  }}
   >Uppercase letter (A-Z) , lowercase letter (a-z) , number (0-9), special character (!@#$%&*)</Typography>
		  </DialogContent>
		  
		  <div style={{backgroundColor:"#E7FFFB",padding:'1.4rem'}} >
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
		  >Confirm</Button>
  
		  </div>
		
		</Dialog>
	  </>
	);
  };
  