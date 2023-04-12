import style from "./Services.module.css";
import HttpsIcon from '@mui/icons-material/Https';
import TableViewIcon from '@mui/icons-material/TableView';
import DescriptionIcon from '@mui/icons-material/Description';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckIcon from '@mui/icons-material/Check';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Footer} from "../Footer/Footer";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";

const Services = ()=>{
 
	const user = JSON.parse(localStorage.getItem("userDetail"));
    const login = JSON.parse(localStorage.getItem("login"));
    const {handleUserLogin} = useContext(LoginContext);
    useEffect(()=>{
    if(login){
      handleUserLogin(true);
    }
  },[])
	return (<>
	<div className={style.main} >
		<p className={style.mainHeading} >
		 Our Services
		</p>
		<br/>
		<p>
		To make you stress free and comfortable to do your business and help you to maximize your returns
		</p>
	</div>
	<div className={style.container} >
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<HttpsIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				No Security Risk
				</p>
				<p className={style.serviceContent} >
				Book Experts ensures that there will not be any risk to your financial data as the data is automatically saved and protected
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<TableViewIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Account Management
				</p>
				<p className={style.serviceContent} >
				Your Account Manager takes care of your Books updating & validation on daily basis and provides you the required info to you and your people within minutes
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<DescriptionIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Statuory Compliance
				</p>
				<p className={style.serviceContent} >
				Your chosen Experts will be provided the required data in full and in required format for statutory and other compliances in advance for filings/submissions.
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<LibraryBooksIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Audit & Filling Of Returns
				</p>
				<p className={style.serviceContent} >
				Your CA will be provided with all the required data like books, Statements, schedules, reconciliations, info required for reporting etc., well in advance and in reusable shape
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<SdStorageIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Data Management
				</p>
				<p className={style.serviceContent} >
				In MSMEs capturing and organizing of data is a big task, we will handle the same with our advanced technologies and techniques by a least or no disturbance to the Business owners
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<SupportAgentIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Awesome Support
				</p>
				<p className={style.serviceContent} >
				You are always connected to a single person for all your queries and required data
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<CheckIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Always Available
				</p>
				<p className={style.serviceContent} >
				Your necessities can be fulfilled on any day and any time through our online platform or through our special mobile app in your hand
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<AssignmentIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Tax Planning
				</p>
				<p className={style.serviceContent} >
				Since the recording and verifications is done on day to day basis you are able to plan your taxes and commitments
				</p>
			</div>
		</div>
		<div className={style.service} >
			<div className={style.serviceLeft} >
				<AccountBalanceIcon sx={{
					fontSize:'50px',
					color:'#6ab5fb'
				}} />
			</div>
			<div className={style.serviceRight} >
				<p className={style.serviceHeading} >
				Bank Compliances
				</p>
				<p className={style.serviceContent} >
				Cost and availability of funds will be directly proportional to quality and timeliness of our statements. With proper data and timeliness you can demand more funds at less cost now.
				</p>
			</div>
		</div>

	</div>
	<Footer/>
	</>)
}

export default Services;