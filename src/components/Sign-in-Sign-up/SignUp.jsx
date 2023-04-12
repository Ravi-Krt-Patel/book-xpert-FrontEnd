import { Stack, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Button,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/Language";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./signin.css";
import { Link } from "react-router-dom";


export const SignUp = () => {

  return (


    <>
      <div className="Main-Container">
       
        <div
          style={{
            backgroundColor: "#cde6fe",
            // float: "left",
            width: "40vw",
            marginLeft: "9vw",
            marginRight: "9vw",
            marginTop: "1vw",
          }}
        >
          <Link to="/">
              <IconButton>
                <CloseIcon
                  sx={{
                    color: "#0AB79B",
                  }}
                />
              </IconButton>
            </Link>
          

          <Stack spacing={1}>
            <Typography
              variant="title1"
              sx={{
                fontSize: {
                  sm: 24,
                  lg: 30,
                },
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              Let’s Sign Up
            </Typography>
            {/* from here two stack are */}
            <Stack direction="row" spacing='2vw'>
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
                  placeholder="eg. celestin"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon
                          sx={{
                            color: "#0AB79B",
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
                    width: "18vw",
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
                  placeholder="eg. celestin"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon
                          sx={{
                            color: "#0AB79B",
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
                    width: "18vw",
                  }}
                />
              </Stack>
            </Stack>
            {/* from here one stack are */}
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
                // label="Email Address"
                placeholder="eg. celestin"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "#0AB79B",
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
                  width: "38vw",
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
                Email Address
              </Typography>
              <TextField
                size="small"
                // label="Email Address"
                placeholder="eg. celestin"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "#0AB79B",
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
                  width: "38vw",
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
                // label="Email Address"
                placeholder="eg. celestin"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon
                        sx={{
                          color: "#0AB79B",
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
                  width: "38vw",
                }}
              />
            </Stack>
            {/* from here two stack */}
            <Stack direction="row" spacing='2vw'>
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
                  Password
                </Typography>
                <TextField
                  size="small"
                  // label="Email Address"
                  placeholder="eg. celestin"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon
                          sx={{
                            color: "#0AB79B",
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
                    width: "18vw",
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
                  Confirm Password
                </Typography>
                <TextField
                  size="small"
                  // label="Email Address"
                  placeholder="eg. celestin"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon
                          sx={{
                            color: "#0AB79B",
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
                    width: "18vw",
                  }}
                />
              </Stack>
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
                Uppercase letter (A-Z) , lowercase letter (a-z) , number (0-9),
                special character (!@#$%&*)
              </Typography>
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
                  <FormControlLabel
                    value="Freelancer"
                    control={<Radio />}
                    label="Freelancer"
                  />
                  <FormControlLabel
                    value="Client"
                    control={<Radio />}
                    label="Client"
                  />
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

            <Stack>
              <Link style={{textDecoration:'none'}} to="/Auth-verification" >
                <Button
                  variant="contained"
                  sx={{
                    width: "38vw",
                    height: "54px",
                    backgroundColor: "#1E1E1E",
                    "&:hover": {
                      backgroundColor: "#1E1E1E !important",
                    },
                    borderRadius: "10px",
                  }}
                >
                  Confirm
                </Button>
              </Link>
            </Stack>
          </Stack>
        </div>
        <div
          style={{
            backgroundColor: "#cde6fe",
            // float: "right",
            width: "40vw",
          }}
        >
          <img
            className="Sign-up-img"
            src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="loading"
          />
        </div>
        {/* <div style={{ clear: "both" }}></div> */}
      </div>
    </>
  );
};
