
import './App.css';
import { BrowserRouter as Router , Switch , Route ,Routes  } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Project from './Routes/Project';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{






 
    
  var cursor = document.querySelector('.cursor');
  var cursor2  = document.querySelector('.cursor2');
  document.addEventListener("mousemove" ,function(e){
 cursor.style.cssText= cursor2.style.cssText= "left:"+e.clientX +"px;top:"
 + e.clientY+"px;";
  });
    },[])



  return (
   <div>
       <Router>
       
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
     
      </Routes>
    </Router>
  


    <div class="cursor"></div>
    <div class="cursor2"></div>
  
  
   </div>
  );
}

export default App;
