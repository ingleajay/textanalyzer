import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const [mode , setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#001a33"
      showAlert("Dark Mode has been enabled" , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#ebebfa"
      showAlert("Light Mode has been enabled" , "success")
    }
  }

 

  return (
    <>

    <BrowserRouter>
    
    <Navbar title="Text Analyzer" mode ={mode} togglemode={toggleMode} />
    <HeroSection/>
    <Alert alert = {alert}/>
    <Routes>
      <Route exact path="/" element={<TextForm heading="Text Analyzer Tool" showAlert={showAlert}/>} />
      <Route exact path="about" element={<About/>} />
    </Routes>
    <Footer mode ={mode}/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
