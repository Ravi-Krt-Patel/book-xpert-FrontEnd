import { createContext,useState } from "react";

export const LoginContext = createContext();
export const LoginContextProvider = ({children})=>{
	const [loginData, setLoginData] = useState(false);
	const [forgetData, setForgetData] = useState(false);
	const [resetData, setResetData] = useState(false);
	const [otpData, setOtpData] = useState(false);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [signUpData, setSignUpData] = useState(false);





	const [search, setSearch] = useState("");
	const handleSearch =(value)=>{
		setSearch(value)
	}



	const handleLogin = (value)=>{
		setLoginData(value);
	}
	const handleforget =(value)=>{
		setForgetData(value);
	}
	const handlereset = (value)=>{
		setResetData(value);
	}
	const handleOTP = (value)=>{
		setOtpData(value);
	}
	const handleUserLogin = (value)=>{
		setUserLoggedIn(value);
	}
	const handleUserSignUp = (value)=>{
		setSignUpData(value)
	}
	return (
		<LoginContext.Provider value={{handleLogin,loginData,forgetData,
		resetData,handleforget,signUpData,handlereset,handleOTP,otpData,handleUserLogin,userLoggedIn,handleUserSignUp,handleSearch,search}} >
			{children}
		</LoginContext.Provider>
	)
}