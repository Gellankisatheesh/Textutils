import './App.css';
import About from './COMPONENTS/About';
import Alert from './COMPONENTS/Alert';
import Navbar from './COMPONENTS/Navbar';
import Textform from './COMPONENTS/Textform';
import React, {useState} from 'react';
import {
   BrowserRouter as Router,
  Route,
  Routes,
}from "react-router-dom"


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message,type)=>{
    setalert({
      msg : message,
      type :type 
    })
    setTimeout(() => {
      setalert(null);
      
    }, 1500);
  }

const togglemode =()=>{
  if (mode=== "light"){
    setmode("dark");
    document.body.style.backgroundColor = " #042743";
    showalert("Dark Mode has been Enabled !", "success");
    //document.title = "TextUtils - Dark Mode";
    setInterval(() => {
      document.title = "TextUtils is Amazing ";
    }, 2000);
  }
  else{
    setmode("light");
    document.body.style.backgroundColor = "white";
    showalert("Light Mode has been Enabled !", "success");
   // document.title = "TextUtils - Light Mode";
  }
}
  return (  
    <>  
    <Router>
    <Navbar title="Textutils" aboutText="About " mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    
     <Routes>
          <Route exact path="/about" element={ <About mode={mode}/> } />
          <Route exact path="/"  element={ <Textform showalert={showalert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} /> }   />
      </Routes>
    </div>
    </Router>
   
  
 
    </>
  );
}

export default App;
