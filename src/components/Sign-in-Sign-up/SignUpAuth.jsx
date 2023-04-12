import "./signin.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
export const SignUpAuth = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleOtp = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  useEffect(() => {
    setOtp(new Array(6).fill(""));
  }, []);

  return (
    <>
      <div className="AuthContainer">
        <div className="AuthLeft">
          <div style={{marginTop:'3vw',marginBottom:'3vw'}} >
			<Link to="/" >
			<IconButton>
              <CloseIcon
                sx={{
                  color: "#0AB79B",
                }}
              />
            </IconButton>
			</Link>
            
          </div>
          <DialogContent
            sx={{
              backgroundColor: "#E7FFFB",
              paddingBottom: 0,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                marginBottom: "2vw",
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              Email Confirmation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 100,
                width: {
                  sm: "40vw",
                  lg: "30vw",
                },
                fontSize: {
                  sm: 12,
                  lg: 22,
                },
                color: "#6C6C6C",
                marginBottom: "1vw",
              }}
            >
              Please verify the given abc@example.com email id
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18 }}>
              6 Digit OTP
            </Typography>

            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "#E7FFFB",
                marginBottom: "2vw",
                padding: "1vw",
                justifyContent: "space-between",
              }}
            >
              {otp.map((data, index) => {
                return (
                  <input
                    style={{
                      width: "3vw",
                      margin: ".3rem",
                      textAlign: "center",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      borderRadius: "10px",
                    }}
                    type="text"
                    name="otp"
                    value={data}
                    onChange={(e) => handleOtp(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
          </DialogContent>
          <div style={{ backgroundColor: "#E7FFFB", padding: "1.5rem" }}>
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
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
        <div className="AuthRight">
          <img
            className="Sign-up-img"
            src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="loading"
          />
        </div>
      </div>
    </>
  );
};
