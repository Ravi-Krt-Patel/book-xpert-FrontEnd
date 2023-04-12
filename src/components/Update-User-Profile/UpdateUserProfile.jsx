import { memo,useEffect, useState } from "react";
import "./UpdateUserProfile.css";
import { Typography, Button, Avatar, Badge } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Stack, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {

  IconButton,

  TextField,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {Footer} from "../Footer/Footer";

import { Link } from "react-router-dom";


const UpdateUserProfile = () => {
	const user = JSON.parse(localStorage.getItem("userDetail"));
  const login = JSON.parse(localStorage.getItem("login"));

  return (
    <>
      {/* <div style={{width:'30vw',height:'40vh', backgroundColor:'red'}} ></div> */}
      <div  style={{ position: "relative" }}>
        <div className="Update-container">
          <div className="Update-child1">
            <div>
              <Button sx={{ color: "white" }}>
                <ArrowBackIcon /> Back to Home
              </Button>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: {
                    sm: "25px",
                    md: "35px",
                    xl: "40px",
                  },
                  fontWeight: 600,
                }}
              >
                User Profile
              </Typography>
            </div>
            <div style={{ visibility: "hidden" }}>Back to Home</div>
          </div>
          <div className="Update-child2">
            <div className="Update-child2-img">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<AddAPhotoIcon type="file" className="Update-child2-img-add" sx={{
                  color:'#6ab5fb'
                }} />}
              >
                <Avatar
                  sx={{
                    width:{
						xs:'15vw',//0-600
						sm:'18vw',//600-900
						// md:'18vw',//900-1200
						lg:'15vw',//1200-1536
						// xl:'10vw'//1536-all
					},
                    height:{
						xs:'15vw',
						sm:'18vw',
						// md:'1vw',
						lg:'15vw',
						// xl:'10vw'
					},
                    
                  }}
                  alt="Travis Howard"
                  src={login && user.image?(user.image):("https://mui.com/static/images/avatar/2.jpg")}
                  
                />
              </Badge>
            </div>
            <div className="Update-child2-form">
			<Stack  spacing={1}>
			<Stack direction={
				window.innerWidth>900?'row':'column'
			} spacing={
				window.innerWidth<900?'0vw':'2vw'
			}>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "#6C6C6C",
                    fontFamily: "poppins",
                    fontWeight: 500,
                  }}
                >
                  First Name
                </Typography>
                <TextField
                  size="small"
                  // label="Email Address"
                  value={login?(user.name.split(" ")[0] || user.name):("")}
                  placeholder="eg. celestin"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon
                          sx={{
                            color: "#6ab5fb",
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
                    width:{
						sx:'38vw',
						sm:'38vw',
						md:'18vw'
					},
                  }}
                />
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "#6C6C6C",
                    fontFamily: "poppins",
                    fontWeight: 500,
                  }}
                >
                  Last Name
                </Typography>
                <TextField
                  size="small"
                  // label="Email Address"
                  value={login?(user.name.split(" ")[1]):("")}
                  placeholder="eg. celestin"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon
                          sx={{
                            color: "#6ab5fb",
                            fontWeight: 400,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "&:hover": {
                      color: "red !important",
                    },
                    width: {
						sx:'38vw',
						sm:'38vw',
						md:'18vw'
					},
                  }}
				  disabled
				  
                />
              </Stack>
            </Stack>
			<Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  color: "#6C6C6C",
                  fontFamily: "poppins",
                  fontWeight: 500,
                }}
              >
                Contact Number
              </Typography>
              <TextField
                size="small"
                placeholder="eg. celestin"
                value={login?(user.contactNumber):("")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "#6ab5fb",
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
                  width:{
					
					lg:'38vw'
				  },
                }}
              />
            </Stack>
			<Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  color: "#6C6C6C",
                  fontFamily: "poppins",
                  fontWeight: 500,
                }}
              >
                Email
              </Typography>
              <TextField
                size="small"
                placeholder="eg. celestin"
                value={login?(user.email):("")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "#6ab5fb",
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
                  width:{
					
					lg:'38vw'
				  },
                }}
              />
            </Stack>
			<Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  color: "#6C6C6C",
                  fontFamily: "poppins",
                  fontWeight: 500,
                }}
              >
                Country
              </Typography>
              <TextField
                size="small"
                placeholder="eg. celestin"
                value={login?(user.country):("")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "#6ab5fb",
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
                  width:{
					
					lg:'38vw'
				  },
                }}
              />
            </Stack>
			<Stack>
              <Link style={{textDecoration:'none'}} to="/" >
                <Button
                  variant="contained"
                  sx={{
                    width:'38vw',
                    height: "54px",
                    backgroundColor: "#1E1E1E",
                    "&:hover": {
                      backgroundColor: "#1E1E1E !important",
                    },
                    borderRadius: "10px",
					          marginTop:'2vw'
                  }}
                >
                  Confirm
                </Button>
              </Link>
            </Stack>
			</Stack>
			</div>
          </div>
          <div className="Update-child3"></div>
        </div>
      </div>
      <Footer/>
   
    </>
  );
};

export default memo(UpdateUserProfile);
