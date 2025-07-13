import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
 
  Route,
  Link,
  Routes,
  Outlet
} from "react-router-dom";



function App() {

const [mode, setMode] = useState("light")
const [alert, setAlert] = useState(null)

const showAlert = (message,type) => {
  
setAlert({

msg : message,
type: type

})

setTimeout(() => {
  
setAlert(null)

}, 2000);

}




const toggleMode = () => {
  if(mode == "light"){
    setMode("dark")
    document.body.style.backgroundColor = "#0c0712"
    showAlert("Dark mode has been enabled","success")
  }
  else{
    setMode("light")
    document.body.style.backgroundColor = "white"
     showAlert("Light mode has been enabled","success")
  }
}


  return (
    <>
     <Router>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}  />
    <div className="container my-3">
       <Routes>
          <Route exact path="/about" element={<About mode={mode}   />}/>
            
         
          <Route exact  path="/" element={<TextForm  showAlert={showAlert}   heading="TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>
            
          
        </Routes>
    
    
    </div>
    </Router>
    </>  
  );
}

export default App;