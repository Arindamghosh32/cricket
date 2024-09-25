import React, { useEffect } from 'react';
import Home from './Screens/Home';
import Register from './Screens/Register'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
