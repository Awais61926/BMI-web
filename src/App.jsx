import './mystyle.css'
import MyButton from './MyButton';
import { useState } from 'react';

function App() {
  let message;
  const [weight,setWeight]= useState()
  const [height,setheight]= useState()
  const [bmi,setBmi]= useState()
  const bmicalculation=()=>{
    let bmi=0;
    bmi = weight/(height)**2;
    setBmi(bmi)


  } 
  const reload=()=>{
    window.location.reload();
  }
  if(bmi>0 && bmi<18.5 ){
    message= 'you are underwight'
  }
  else if(bmi>= 18.5 && bmi<=24.9){
    message='you are healthy'
  }
  else if(bmi>24.9){
    message='you are overweight'
  }
  

  return (
  
    <div className="body">
    <h1>BMI Calculator</h1>
    <form>
      
        <label>Enter Weight in KG</label>
        <input
          placeholder="Enter your Weight"
          type="number"
          value={weight}
          onChange={(txt) => setWeight(txt.target.value)}
          className="inputs"

        />
     
      
        <label>Enter your Height in meters</label>
        <input
          placeholder="Enter your Height"
          value={height}
          onChange={(txt) => setheight(txt.target.value)}
          className="inputs"
        />
      
    </form>
    <div style={{ display: 'flex', gap: '10px' }}>
      <MyButton title={'Reload'} onClick={reload} />
      <MyButton title={'Calculate'} onClick={bmicalculation} />
    </div>
    <div>
      <h3>{bmi && `Your BMI: ${bmi.toFixed(2)}`}</h3>
      <h2>{message}</h2>
    </div>
  </div>
  
  );
}

export default App;
