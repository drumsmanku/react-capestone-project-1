import React from 'react';
import '../Assets/back1.png';
import './RegistrationPage.css';
import { useState } from 'react';

function RegistrationPage() {
  const style={
    backgroundColor: '##72DB73/',

  }
  const [ischecked, setChecked]=useState(false);
  const setCheckedValue=(event)=>{
    setChecked(event.target.checked);
  }
  const buttonStyle = {
    backgroundColor: ischecked ? '#72DB73' : '#999999', // Conditional color based on checkbox status
  };

  return (
    <div className="reg-page">
      <div className="first-div">
        <div className="first-first-div">
          <h1>Discover new things on Superapp</h1>
        </div>
      </div>
      <div className="second-div">
        <h1>Super App</h1>
        <h4>Create your New Account</h4>
        <form action="">
          <input type="text" placeholder='Name' required />
          <input type="text" placeholder='UserName' required />
          <input type="email" name="mail" id="mail" placeholder='Email' required/>
          <input type="number" name="number" id="number" placeholder='Mobile' required/>
          <div className="checkbox1">
            <input type="checkbox" name="check" id="check" onChange={setCheckedValue} /><label htmlFor="check">Share my registration data with Superapp</label>
          </div>
          <button type="submit" disabled={!ischecked} style={buttonStyle}>Sign Up</button>
          <div style={{width:'23rem', color:'#7C7C7C', fontFamily:'DM Sans', fontSize:'0.8rem', paddingLeft:'0.5rem'}}>
            <p>By clicking on Sign up. you agree to Superapp <a href="/" style={{textDecoration:'none', color:'#72DB73'}}>Terms and Conditions of Use</a></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="/" style={{textDecoration:'none', color:'#72DB73'}}>Privacy Policy</a></p>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage