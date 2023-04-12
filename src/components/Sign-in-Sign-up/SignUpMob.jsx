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
	InputAdornment,
	FormControl,
	InputLabel,
	OutlinedInput,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import MailOutlineIcon from "@mui/icons-material/MailOutline";
  import LockOpenIcon from "@mui/icons-material/LockOpen";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import Visibility from "@mui/icons-material/Visibility";
  import { useState } from "react";
  import { useContext } from "react";
  import { LoginContext } from "../ContextApi/LoginContext";
  import { Link } from "react-router-dom";
  import PermIdentityIcon from '@mui/icons-material/PermIdentity';
  import LanguageIcon from '@mui/icons-material/Language';
  import Radio from "@mui/material/Radio";
  import RadioGroup from "@mui/material/RadioGroup";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from "axios";


  export const SignUpMob = () => {
	const {signUpData, handleUserSignUp, handleLogin, loginData, handleforget,handleUserLogin } = useContext(LoginContext);
  
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
  
	const handleMouseDownPassword = (event) => {
	  event.preventDefault();
	};
	const [open, setOpen] = useState(false);

	// const [formData, setFormData] = useState({
	// 	dfirstName:"",
	// 	lastName:"",
	// 	contactNumber:"",
	// 	email:"",
	// 	country:"",
	// 	password:"",
	// 	confirmPassword:""
	// })

	const [loading, setLoading] = useState(false);

	const [firstName,setFirstName] = useState("");
	const [lastName,setLastName] = useState("");
	const [contactNumber,setContactNumber] = useState("");
	const [email,setEmail] = useState("");
	const [country,setCountry] = useState("");
	const [password,setPassword] = useState("");
	const [confirmPassword,setConfirmPassword] = useState("");

	const handleFirstName = (e)=>{
		setFirstName(e.target.value);
	}
	const handleLastName = (e)=>{
		setLastName(e.target.value);
	}
	const handlecContactNumber = (e)=>{
		setContactNumber(e.target.value);
	}
	const handleEmail = (e)=>{
		setEmail(e.target.value);
	}
	const handleCountry = (e)=>{
		setCountry(e.target.value);
	}
	const handlePassword = (e)=>{
		setPassword(e.target.value);
	}
	const handleConfirmPassword = (e)=>{
		setConfirmPassword(e.target.value);
	}



	const handleFormData = ()=>{
		// alert(`${firstName} ${lastName} ${contactNumber}
		// ${email} ${country} ${password} ${confirmPassword} `)

		if(password !== confirmPassword ){
		   toast.warn("password and comfirm password are not same!");
		   setLoading(false);
		}else{
			axios.post('https://book-expert-backend-ravi.onrender.com/user/register', {
				name: firstName + " " + lastName,
				email: email,
				password:password,
				mobNumber:contactNumber,
				country:country
			  })
			  .then(function (response) {
				console.log(response);
				toast.success("Sign up Successfull !!")
				handleUserSignUp(false);
			    handleUserLogin(true);
			    handleLogin(false);
				setLoading(false);
				setFirstName("");
				setLastName("");
				setContactNumber("");
				setEmail("");
				setCountry("");
				setPassword("");
				setConfirmPassword("");
				localStorage.setItem("login",true)
				localStorage.setItem("userDetail",JSON.stringify({
					name:response.data.user.name,
					email:response.data.user.email,
					contactNumber:!response.data.user.mobNumber?(""):(response.data.user.mobNumber),
					country:!response.data.user.country?(""):(response.data.user.country),
					image:!response.data.user.image?(""):(response.data.user.image),
					role:response.data.user.role
				  }));
			  })
			  .catch(function (error) {
				console.log(error);
				if(error.response.data.hasOwnProperty("message")){
					toast.error(error.response.data.message);
					setLoading(false)
				}else{
					toast.error(error.response.data.errors[0].msg);
					setLoading(false);
				}
				
			  });


			
		}

	}




	return (
	  <>

	  {/* <button onClick={()=>{
		handleLogin(true);
	  }} >click</button>
	   */}
		<Dialog
		  open={signUpData}
		//   onClose={() => {
		// 	handleUserSignUp(false);
		//   }}
		  
		  sx={{
			// height: '100%',
			borderRadius: "20px !important",
		  
		  }}
		>
		  <DialogTitle
			id="dialog-title"
			sx={{
			  backgroundColor: "#cde6fe",
			}}
		  >
			<div>
			  <div style={{ float: "left" }}>
				<Typography
				  variant="title1"
				  sx={{
					fontSize: {
					  sm: 24,
					  lg: 30,
					},
					fontWeight: 600,
				  }}
				>
				  Let’s Sign up
				</Typography>
			  </div>
			  <div style={{ float: "right" }}>
				{loading ? (
					<IconButton disabled >
					<CloseIcon
					  sx={{
						color: "#05a0e8",
					  }}
					/>
				  </IconButton>
				):(
					<IconButton onClick={() => handleUserSignUp(false)}>
				  <CloseIcon
					sx={{
					  color: "#05a0e8",
					}}
				  />
				</IconButton>
				)}
				
				
			  </div>
			  <div style={{ clear: "both" }}></div>
			</div>
		  </DialogTitle>
  
	
		  <DialogContent
			sx={{
			  backgroundColor: "#cde6fe",
			  paddingBottom: 0,
			}}
		  >
{/*-------------------------------- form Input text start from here	------------------------------------------------------		 */}
			<Stack  spacing={2}>
{/* ----------------------------small two input box from here-----------------------------------------*/}
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  sm: 18,
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------first Nmae is here-------------------------------------- */}
			  First Name
			</Typography>
				<TextField
				// label="Email Address"
				onChange={handleFirstName}
				value={firstName}
				placeholder="eg. celestin"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <PermIdentityIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				  
				}}
			  />
				</Stack>
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  xs: '18px',
				
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------Last Nmae is here-------------------------------------- */}
			  Last Name
			</Typography>
				<TextField
				// label="Email Address"
				onChange={handleLastName}
				value={lastName}
				placeholder="eg. dsouza"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <PermIdentityIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				}}
			  />
				</Stack>
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  xs: '18px',
				//   sm:'24px',
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------Contact Number is here-------------------------------------- */}
			  Contact Number
			</Typography>
				<TextField
				// label="Email Address"
				type="number"
				onChange={handlecContactNumber}
				value={contactNumber}
				placeholder="eg. 8845673422"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <LockOpenIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				}}
			  />
				</Stack>
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  xs: '18px',
				//   sm:'24px',
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------Email Address is here-------------------------------------- */}
			  Email Address
			</Typography>
				<TextField
				// label="Email Address"
				type="email"
				onChange={handleEmail}
				value={email}
				placeholder="eg. celestin@xyz.com"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <MailOutlineIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				}}
			  />
				</Stack>
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  xs: '18px',
				//   sm:'24px',
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------Country is here-------------------------------------- */}
             Country
			</Typography>
				<TextField
				// label="Email Address"
				onChange={handleCountry}
				value={country}
				placeholder="Select Country"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <LanguageIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				}}
			  />
				</Stack>
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  xs: '18px',
				//   sm:'24px',
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------Password is here-------------------------------------- */}
			  Password
			</Typography>
				<TextField
				// label="Email Address"
				type="password"
				onChange={handlePassword}
				value={password}
				placeholder="eg. celestine@example.com"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <LockOpenIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				}}
			  />
				</Stack>
				<Stack>
				<Typography
			  variant="body1"
			  sx={{
				fontWeight: 400,
				fontSize: {
				  xs: '18px',
				//   sm:'24px',
				},
				// paddingBottom: "1rem",
				fontFamily:'Poppins',
				color: '#6C6C6C'
			  }}
			>
{/* -----------------Confirm Password is here-------------------------------------- */}
              Confirm Password
			</Typography>
				<TextField
				// label="Email Address"
				type="password"
				onChange={handleConfirmPassword}
				value={confirmPassword}
				placeholder="eg. celestine@example.com"
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
					  <LockOpenIcon
						sx={{
						  color: "#05a0e8",
						  fontWeight: 400,
						}}
					  />
					</InputAdornment>
				  ),
				}}
				sx={{
				  "&:hover": {
					color: "#0AB79B !important",
				  },
				}}
			  />
				</Stack>
				<Stack>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
                >
                  {/* <FormControlLabel
                    value="Freelancer"
                    control={<Radio />}
                    label="Freelancer"
                  /> */}
                  {/* <FormControlLabel
                    value="Client"
                    control={<Radio />}
                    label="Client"
                  /> */}
                </RadioGroup>
              </FormControl>
            </Stack>
				<Stack>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "pippens",
                  color: "#7B7B7B",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                By signing up you agree to ABC Terms of Service & Privacy policy
              </Typography>
            </Stack>
{/*----------------------------- form submit button--------------------------------------------------------- */}
				<div
			style={{
			  backgroundColor: "#cde6fe",
			  padding: "0",
			  paddingTop: "0",
			}}
		  >
			{loading ? (
				<Button
				  variant="contained"
				  sx={{
					width: "100%",
					height: "54px",
					backgroundColor: "#1E1E1E",
					"&:hover": {
					  backgroundColor: "#1E1E1E !important",
					},
					borderRadius: "10px",
					marginBottom:'2vw'
				  }}
				  disabled
				>
				  Loading....
				</Button>
			):(
				<Button
			onClick={()=>{
			  setLoading(true)
			  handleFormData()
			}}
			  variant="contained"
			  sx={{
				width: "100%",
				height: "54px",
				backgroundColor: "#1E1E1E",
				"&:hover": {
				  backgroundColor: "#1E1E1E !important",
				},
				borderRadius: "10px",
				marginBottom:'2vw'
			  }}
			>
			  Sign up
			</Button>
			)}
		  </div>
            
			</Stack>
  
		  </DialogContent>
		  
  
		  {/* <Stack>
			<Box
			  sx={{
				height: "1px",
				width: {
				  sm: "100vw",
				  lg: "30vw",
				},
				backgroundColor: "#B3B3B3",
			  }}
			></Box>
		  </Stack> */}
  
		  {/* <div
			style={{
			  textAlign: "center",
			  alignItems: "center",
			  backgroundColor: "#E7FFFB",
			  margin: "0px",
			  padding: "1vw",
			}}
		  >
			<Button
			  disabled
			  sx={{
				margin: "0px",
				padding: "0px",
			  }}
			>
			  New User Account ?
			</Button>
			<Link to="/Sign-up" style={{ textDecoration: "none" }}>
			  <Button
				onClick={() => setOpen(false)}
				sx={{
				  color: "#0AB79B",
				  fontWeight: 600,
				}}
			  >
				Sign Up
			  </Button>
			</Link>
		  </div> */}
		</Dialog>
	  </>
	);
  };
  














//   <FormControl sx={{}} variant="outlined">
// 				<InputLabel htmlFor="outlined-adornment-password">
// 				  Password
// 				</InputLabel>
// 				<OutlinedInput
// 				  id="outlined-adornment-password"
// 				  type={showPassword ? "text" : "password"}
// 				  placeholder="&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733;"
// 				  startAdornment={
// 					<InputAdornment position="start">
// 					  <LockOpenIcon
// 						sx={{
// 						  color: "#0AB79B",
// 						  fontWeight: 400,
// 						}}
// 					  />
// 					</InputAdornment>
// 				  }
// 				  endAdornment={
// 					<InputAdornment position="end">
// 					  <IconButton
// 						aria-label="toggle password visibility"
// 						onClick={handleClickShowPassword}
// 						onMouseDown={handleMouseDownPassword}
// 						edge="end"
// 					  >
// 						{showPassword ? (
// 						  <VisibilityOff
// 							sx={{
// 							  color: "#0AB79B",
// 							  fontWeight: 400,
// 							}}
// 						  />
// 						) : (
// 						  <Visibility
// 							sx={{
// 							  color: "#0AB79B",
// 							  fontWeight: 400,
// 							}}
// 						  />
// 						)}
// 					  </IconButton>
// 					</InputAdornment>
// 				  }
// 				  label="Password"
// 				/>
// 			  </FormControl>