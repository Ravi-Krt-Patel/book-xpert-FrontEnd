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
import { useState ,useContext,useEffect} from "react";
import { LoginContext } from "../ContextsAPI/LoginContext";




export const OTPAuth = () => {
  const {handleLogin,loginData,forgetData,handleforget,otpData,handleOTP} = useContext(LoginContext);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleOtp = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };



  useEffect(()=>{
    setOtp(new Array(6).fill(""))
  },[otpData])

  return (
    <>
      
      <Dialog
        open={otpData}
        onClose={() => handleOTP(false)}
        sx={{
          // height: '100%',
          borderRadius: "20px !important",
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
                OTP Authentication{" "}
              </Typography>
            </div>
            <div style={{ float: "right" }}>
              <IconButton onClick={() => handleOTP(false)}>
                <CloseIcon
                  sx={{
                    color: "#0AB79B",
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
            backgroundColor: "#B3B3B3",
            marginBottom: "0px",
          }}
        ></Box>

        <DialogContent
          sx={{
            backgroundColor: "#E7FFFB",
            paddingBottom: 0,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 100,
              width: {
                sm: "40vw",
                lg: "20vw",
              },
              fontSize: {
                sm: 12,
                lg: 12,
              },
              color: "#6C6C6C",
              margin: "0",
            }}
          >
            Please type 6 digit otp is shared on xyz@example.com
          </Typography>

          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "#E7FFFB",
              margin: "0px",
              padding: "1vw",
            }}
          >
            {otp.map((data, index) => {
              return (
                <input
                  style={{
                    width: "35px",
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
      </Dialog>
    </>
  );
};
