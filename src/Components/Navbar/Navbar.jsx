import React, { useEffect , useState} from 'react'
import './Navbar.css'
import image from "../../assets/react.svg";
import { BrowserRouter as Router,Routes,Route,Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation()
    // console.log(location.pathname)

    const[isGlowing,setIsGlowing]=useState(false);
    useEffect(()=>{
        const interval = setInterval(() => {
            setIsGlowing(true);
            setTimeout(() => {
             setIsGlowing(false)   
            }, 5000);
        }, 10000);
        return()=>{
            clearInterval(interval)}
    },[])


   const [scroll, setScroll] = useState(false);
      
      useEffect(() => {
        
      
        const handleScroll=()=>{
         
          if(window.scrollY>150 && location.pathname==="/AboutUs" ){
                setScroll(true)    
          }
          else if(window.scrollY>10 && location.pathname ==="/Contact"){
              setScroll(true)
          }
          else{
            setScroll(false)
          }
        };
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll);
      
      }, [location.pathname]);
 

    
  return (
    
    <nav className={ scroll ?"navglow":"" }   >
        <div  className="logo"><Link to={"/"}><img src={image} alt="" /></Link></div>
        <div className='content'>
      <ul >
        <li className={(location.pathname==="/" &&isGlowing) ?"active":""}><Link  to="/">Home</Link></li>
        <li className={(location.pathname==="/Explore"&& isGlowing)?"active":""}><Link to="/Explore" >Explore</Link></li>
        <li className={(location.pathname==="/AboutUs"&& isGlowing)?"active":""}><Link to="/AboutUs" >About Us</Link></li>
        <li className={(location.pathname==="/Contact"&& isGlowing)?"active":""}><Link to="/Contact" >Contact</Link></li>
      </ul>
      </div>
    </nav>
   
  )
}

export default Navbar
