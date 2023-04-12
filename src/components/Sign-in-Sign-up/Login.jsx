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
import { useState,useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";
import { Link } from "react-router-dom";
import ActionAlerts from "../Alert/Alert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export const Login = () => {
  const { handleLogin, loginData, handleforget,handleUserLogin,handleUserSignUp } = useContext(LoginContext);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const scrollHandler = ()=>{
    window.scrollTo(0,0);
  }

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail =(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }

  const handData = ()=>{
    if(!email || !password){
      toast.error("please enter email and password");
      setLoading(false);
      return;
    }
    axios.post('https://book-expert-backend-ravi.onrender.com/user/login', {
      email: email,
      password: password
       })
      .then(function (response) {
        console.log(response);
        toast.success("Login Successfull !!");
        handleUserLogin(true);
        handleLogin(false);
        scrollHandler();
        ActionAlerts();
        setEmail("");
        setPassword("");
        setLoading(false);
        localStorage.setItem("login",true)
        localStorage.setItem("userDetail", JSON.stringify({
					name:response.data.user.name,
					email:response.data.user.email,
					contactNumber:!response.data.user.mobNumber?(""):(response.data.user.mobNumber),
					country:!response.data.user.country?(""):(response.data.user.country),
					image:!response.data.user.image?(""):(response.data.user.image),
          role:response.data.user.role
				  }));
      })
       .catch(function (error) {
       // console.log(error);
        toast.error(error.response.data.message)
        setLoading(false);

     });
    
   
  }





  const [open, setOpen] = useState(false);
  useEffect(()=>{},[handleLogin])
  return (
    <>
      <Dialog
        open={loginData}
        // onClose={() => {
        //   handleLogin(false);
        // }}
		
        sx={{
          // height: '100%',
          borderRadius: "20px !important",
		
        }}
      >
        <DialogTitle
          id="dialog-title"
          sx={{
            backgroundColor: "#cde6fe",
            // width: {red
            // 	sx: "100vw",
            // 	sm: "100vw",
            // 	md: 300,
            // 	lg: 400,
            // 	xl: 200,
            //   },
			// border:'1px solid red',
			// borderRadius: "20px !important",
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
                Login as
              </Typography>
            </div>
            <div style={{ float: "right" }}>
              <IconButton onClick={() =>{
                 handleLogin(false)
                 }}
                 disabled={loading}
                 >
                <CloseIcon
                  sx={{
                    color: "#05a0e8",
                  }}
                />
              </IconButton>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </DialogTitle>

        <Box
          sx={{
            height: "1px",
            width: {
              sm: "100vw",
              lg: "30vw",
            },
            backgroundColor: "grey",
          }}
        ></Box>

        <DialogContent
          sx={{
            backgroundColor: "#cde6fe",
            paddingBottom: 0,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: {
                sm: 18,
                lg: 24,
              },
              paddingBottom: "1rem",
            }}
          >
            Welcome Back ,
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Email Address"
              placeholder="eg. celestine@example.com"
              onChange={handleEmail}
              value={email}
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

            <FormControl sx={{}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={handlePassword}
                value={password}
                placeholder="&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9733;"
                startAdornment={
                  <InputAdornment position="start">
                    <LockOpenIcon
                      sx={{
                        color: "#05a0e8",
                        fontWeight: 400,
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
                      {showPassword ? (
                        <VisibilityOff
                          sx={{
                            color: "#05a0e8",
                            fontWeight: 400,
                          }}
                        />
                      ) : (
                        <Visibility
                          sx={{
                            color: "#05a0e8",
                            fontWeight: 400,
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>

          <DialogActions>
            <Button
              variant="text"
              sx={{
                padding: 0,
                margin: 0,
                fontSize: {
                  sm: 10,
                  lg: 14,
                },
                fontWeight: 500,
                color: "#6C6C6C",
                fontFamily: "Poppins",
              }}
              onClick={() => {
                handleforget(true);
                handleLogin(false);
              }}
            >
              Forgot Password ?
            </Button>
          </DialogActions>
        </DialogContent>
        <div
          style={{
            backgroundColor: "#cde6fe",
            padding: "1.4rem",
            paddingTop: "0",
          }}
        >
          <Button
          onClick={()=>{
            // handleUserLogin(true);
            // handleLogin(false);
            // scrollHandler();
            // ActionAlerts();
            // toast.error("Wow so easy!");
            setLoading(true);
            handData()
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
            }}

            disabled={loading}

          >
          {loading?("Loading...."):("Sign in")}
          </Button>
        </div>

        <Stack>
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
        </Stack>

        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            backgroundColor: "#cde6fe",
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
         
            <Button
              onClick={() =>{ 
                setOpen(false)
                handleLogin(false)
                handleUserSignUp(true)
                 
              }}
              sx={{
                color: "#05a0e8",
                fontWeight: 600,
              }}
            >
              Sign Up
            </Button>
          
        </div>
      </Dialog>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  );
};
