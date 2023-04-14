import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {LoginContext} from "../ContextApi/LoginContext";
export const Protected = (props)=>{
	const {Component} = props;
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("userDetail"));
	const login = JSON.parse(localStorage.getItem("login"));
	const {
		//  handleUserSignUp, 
		 userLoggedIn,
		 handleLogin,handleSearch } = useContext(LoginContext);
		 console.log("this is comming here",login)
	useEffect(()=>{
		if(!login){
			navigate("/");
			handleLogin(true);
		}
	},[userLoggedIn])

	return (<>
	{login?(<Component/>):(<></>)}
	</>)
}