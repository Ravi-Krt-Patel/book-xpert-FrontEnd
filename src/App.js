
import NavBar from "./components/NavBar/NavBar";
import {Footer} from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import {MobileNav} from "./components/NavBar/MobileNav";
import { Route,Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import UpdateUserProfile from "./components/Update-User-Profile/UpdateUserProfile"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<>
          <MobileNav/>
          <NavBar/>
      </>} >
        <Route index element={<Home/>} ></Route>
          <Route path="/blogs" element={<Blogs/>} ></Route>
          <Route path="/services" element={<Services/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/profile" element={<UpdateUserProfile/>} ></Route>
      </Route>
      
      <Route path="/*" element={<div style={{alignItems:'center',textAlign:'center',padding:'20vw'}}>
        404 page

      </div>} ></Route>
    </Routes>
    
    </>
  );
}

export default App;
