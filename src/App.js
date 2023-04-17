import React, { useState } from "react";
import './App.css';
import lg1 from "./images/img.jpg"
function App() {
  const [state, setState] = useState('0');
  

  const convert = (event) => {
    event.preventDefault();
    var TempratureInCelcius = event.target.elements.Tempinput.value;
    var TempratureInFarenheit = (TempratureInCelcius * 1.8) + 32;

    setState(TempratureInFarenheit.toFixed(2))

  }
  const reset = () => {
    setState(0);
  }
  return (
    <div className="App">
        <aside  style={{
              backgroundImage: `url(${lg1})`,
              backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width: '50vw'
            }}>
        </aside>
        
        <div className="body">
            <div className="body2">
              <h2>{state} °F </h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#088395" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,176C672,213,768,235,864,213.3C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>            
            </div>  
              <div className="body3">
            <form className="form" onSubmit={convert}>
                <input className="input" type="text" name="Tempinput" placeholder="Enter temprature in celcius...."></input> 
                <button type="submit">CONVERT</button>
            </form>
            </div>
            <button className="reset" onClick={reset}>RESET</button>     
        </div>
    
    </div>
  );
}

export default App;
