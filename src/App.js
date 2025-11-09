import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Navbar } from 'react-bootstrap';
//import React from 'react';
// import 'compo/';

 import Navbar from  './componant/Navbar';
 import TextForm from './componant/TextForm';
import { useState } from 'react';
import Alert from './componant/Alert';
import About from './componant/About';
// import { Link } from 'react-router-dom';

import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

  // <BrowserRouter basename="/my-app"></BrowserRouter>


function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert = (massege, type)=>{
    setAlert ({
      masg: massege,
      type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
 }

 const toggleMode= ()=>{
  if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0a1129ff';
    showAlert("Dark mode has enabled", "success");
    // document.title='textUtils - Dark mode'
  //  setInterval(()=>{
  //   document.title='textUtils - is amazing'
  //  }, 2000);
  //  setInterval(()=>{
  //   document.title='Install textUtils'
  //  }, 1500);
  }
  else{
    setMode('light');
       document.body.style.backgroundColor = 'white';
     showAlert("Light mode has enabled", "success");
    //  document.title='textUtils - Light mode'
  }
 }
 
 return (
     
    <>
     
     <Router>     
          
<Alert alert={alert}/>
    <Navbar title= 'TextUtiles' about="About Us"  mode={mode}  toggleMode={toggleMode} />

    <div className="container  my-5" >
        <div className='container'> 
          
            {/* <About /> */}

        </div>
    </div>

  
      
      <Routes>

          <Route path="/" element={< TextForm showAlert={showAlert} heading="Enter the text to Analyze" 
          mode={mode} toggleMode={toggleMode}/>}/> 
          <Route path="/about" element={<About/>}/>          

                      
      </Routes>
</Router>

  </>
    
  );
}

export default App;
