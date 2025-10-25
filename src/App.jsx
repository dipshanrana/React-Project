import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Explore from './Components/Explore/Explore'
import AboutUs from './Components/AboutUs/AboutUs'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router basename="/React-Project"> 
    <Navbar/>
      <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/React-Project/" element={<Home/>} />
    <Route path="/Explore" element={<Explore/>} />
    <Route path="/AboutUs" element={<AboutUs/>} />
    <Route path="/Contact" element={<Contact/>} />
   
    
    </Routes>
    <Footer/>
    </Router>
   
   
    
      {/* <Footer/>  */}
    </>
  )
}

export default App
