import styled from "@emotion/styled";
import { Button, OutlinedInput, TextField, Typography } from "@mui/material";
import styles from "./contact.module.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleFormData = () => {
    axios
      .post("https://book-expert-backend-ravi.onrender.com/message", {
        email: email,
        message: message,
      })
      .then(function (response) {
        toast.success("Your Requiest is submitted !!");
        setEmail("");
        setMessage("");
        setLoading(false);
        //console.log(response);
      })
      .catch(function (error) {
        //console.log(error);
        toast.error(error.response.data.errors[0].msg);
        setLoading(false);
      });
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    width: "100%",
    color: "white",
    backgroundColor: "black",
    border: "20px",
    "&:hover": {
      backgroundColor: "black",
      borderColor: "none",
      boxShadow: "none",
    },
  }));

  return (
    <div className={styles.contactmain}>
      <div className={styles.contactleft}>
        <div className={styles.contactinfo}>
          <Typography
            sx={{
              fontSize: {
                lg: "40px",
                md: "30px",
                sm: "20px",
                // xs:'16px'
              },
              fontWeight: "600",
            }}
          >
            Contact Us
          </Typography>
        </div>
        <div className={styles.contactinfobig}>
          <Typography
            sx={{
              fontSize: {
                lg: "57px",
                md: "50px",
                sm: "40px",
                xs: "30px",
              },
              fontStyle: "normal",
              fontWeight: "700",
              color: "white",
            }}
          >
            Let’s have a <br></br>conversation for <br></br> your Query !
          </Typography>
        </div>
      </div>
      <div className={styles.contactright}>
        <div className={styles.contactrightinner}>
          <div className={styles.contachemail}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "600", color: "#05529aeb" }}
            >
              Email
            </Typography>
            <OutlinedInput
              placeholder="eg. saumen.thakur@gmail.com"
              sx={{
                background: "#b5dafd",
                border: "2px solid #52a9fa",
                "border-radius": "10px",
                height: "61px",
                width: "100%",
              }}
              onChange={handleMessage}
              value={message}
            />
          </div>
          <div className={styles.contactmessage}>
            <div className={styles.contachemailmessage}>
              <Typography
                sx={{ fontSize: "20px", fontWeight: "600", color: "#05529aeb" }}
              >
                Message
              </Typography>
              <textarea
                className={styles.contacttextarea}
                placeholder="Type something..."
                onChange={handleEmail}
                value={email}
              ></textarea>
            </div>
            <div></div>
          </div>
          <div className={styles.contactbutton}>
            <ColorButton onClick={()=>{
                handleFormData();
                setLoading(true);
            }}
            disabled={loading}
            >{loading?("Loading"):("Send Request")}</ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
};
