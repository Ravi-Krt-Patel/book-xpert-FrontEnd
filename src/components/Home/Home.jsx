import homepage1 from "../Assets/homepage1.svg";
import { Contact } from "./ContactPage/Contact";
import './HomePage.css';
import {Detail} from './Detail/Detail';
import {Footer} from "../Footer/Footer";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";
const Home = ()=>{
  const user = JSON.parse(localStorage.getItem("userDetail"));
  const login = JSON.parse(localStorage.getItem("login"));
  console.log(login,user)
  console.log(typeof(login))
  const { handleLogin, loginData, handleforget,handleUserLogin,handleUserSignUp } = useContext(LoginContext);

  useEffect(()=>{
    if(login){
      handleUserLogin(true);
    }
    
  },[])

	return (<>
	<div className="main-container">
        <div className="des">
          <div>
            <div className="info-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="info-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              tincidunt volutpat vestibulum, massa, imperdiet
            </div>
          </div>
          <div className="image-1">
            <img src={homepage1} alt="image" width="100%" height="100%" />
          </div>
        </div>
      </div>
	  <Detail/>
	  <Contact/>
	  <Footer/>
    <img scr="https://book-expert-backend-ravi.onrender.com/opt/render/project/src/src/upload/1681208802093-391886350-aha.png" alt="dasd" />
	</>)
}

export default Home;