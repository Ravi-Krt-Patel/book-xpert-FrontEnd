import {Footer} from "../Footer/Footer";
import { useEffect,useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../ContextApi/LoginContext";
import {Item} from "./Item/Item";
import style from "./Blogs.module.css";
import axios from "axios";

const Blogs = ()=>{

  const user = JSON.parse(localStorage.getItem("userDetail"));
  const login = JSON.parse(localStorage.getItem("login"));
  const {handleUserLogin,search} = useContext(LoginContext);
  const [AllBlog, setAllBlog] = useState([])
  console.log(AllBlog)
  const getData = ()=>{
	axios.get(`https://book-expert-backend-ravi.onrender.com/blog/search?name=${search}`)
      .then(function (response) {
        
		setAllBlog(response.data.blog)
		
      })
       .catch(function (error) {
        console.log(error);
        
     });
  }


  useEffect(()=>{
    if(login){
      handleUserLogin(true);
    }
	getData();
  },[search])

	return (<>
	<div className={style.main} >
		{AllBlog.map((el,ind)=>(<div key={ind} >
			<Item detail={{
		title:el.BlogTilte,
		description:el.Description
	}} />
		</div>))}
	</div>
	
	<Footer/>
	</>)
}

export default Blogs;