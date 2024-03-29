import React from 'react'
import{Toaster} from 'react-hot-toast';
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PageNotFount from './Pages/NotFount';
import Home from './Pages/Home';
import Success from './Pages/Success';

const App=()=> {
  return (
    <>
  <Router>
   <Routes>

     <Route path="/" element={<Home/>} />
     <Route path="*" element={<PageNotFount/>} />
     <Route path="/success" element={<Success/>} />

   </Routes> 
   <Toaster/>   
  </Router>  
    </>
  )
}

export default App;
