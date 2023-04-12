import styles from "./Footer.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logobox}>
          <div>
			<img src="http://www.bookxpert.co.in/assets/img/logo.png" alt="" width="100%" height="100%" />
            {/* <p>Logo</p> */}
          </div>
          <p>5th floor upstairs of Matrix lab,
              Dwarakamai building plot no 132,
               6th phase KPHB colony HYDERABAD,</p>
        </div>
        <div className={styles.middlediv1}>
          <p>Company</p>
          <p>About Us</p>
          <p>Career</p>
          <p>Team</p>
          <p>Contact</p>
        </div>
        <div className={styles.middlediv2}>
          <p>Product</p>
          <p>Service</p>
          <p>Freelancer</p>
          <p>Features</p>
          <p>Development</p>
        </div>
        <div className={styles.middlediv3}>
          <p>Links</p>
          <p>Privacy policy</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
        </div>
        <div className={styles.lastdiv}>
          <p>Follow Us</p>
          <div>
            <div>
              <TwitterIcon
                sx={{
                  fontSize: "3.325vw",
                }}
              ></TwitterIcon>
            </div>
            <div>
              <FacebookIcon
                sx={{
                  fontSize: "3.325vw",
                }}
              ></FacebookIcon>
            </div>
            <div>
              <InstagramIcon
                sx={{
                  fontSize: "3.325vw",
                }}
              ></InstagramIcon>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.mainMobile}>
          <div className={styles.logobox}>
            <div>
				<img src="http://www.bookxpert.co.in/assets/img/logo.png" alt="" width="100%" height="100%"/>
              {/* <p>Logo</p> */}
            </div>
            <p>5th floor upstairs of Matrix lab,
              Dwarakamai building plot no 132,
               6th phase KPHB colony HYDERABAD,</p>
          </div>
          <div className={styles.mobileMiddle}>
            <div className={styles.middlediv1}>
              <p>Company</p>
              <p>About Us</p>
              <p>Career</p>
              <p>Team</p>
              <p>Contact</p>
            </div>
            <div className={styles.middlediv1}>
              <p>Product</p>
              <p>Service</p>
              <p>Freelancer</p>
              <p>Features</p>
              <p>Development</p>
            </div>
          </div>
          <div className={styles.mobilelast}>
            <div className={styles.middlediv1}>
              <p>Links</p>
              <p>Privacy policy</p>
              <p>Terms & Conditions</p>
              <p>FAQ</p>
            </div>
            <div className={styles.lastdiv}>
              <p>Follow Us</p>
              <div>
                <div>
                  <TwitterIcon
                    sx={{
                      fontSize: "7.152vw",
                    }}
                  ></TwitterIcon>
                </div>
                <div>
                  <FacebookIcon
                    sx={{
                      fontSize: "7.152vw",
                    }}
                  ></FacebookIcon>
                </div>
                <div>
                  <InstagramIcon
                    sx={{
                      fontSize: "7.152vw",
                    }}
                  ></InstagramIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// display : none
