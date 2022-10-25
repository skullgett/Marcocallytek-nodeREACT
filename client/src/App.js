/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PhoneInput, { isPossiblePhoneNumber,isValidPhoneNumber } from 'react-phone-number-input';
import FormPhoneComponent from './form-phone-validation';
import React, { useEffect, useState } from 'react';
import en from 'react-phone-number-input/locale/en.json';
import Axios from "axios";
import 'react-phone-number-input/style.css'
import './App.css';
import "./style.css";

 function App() {

    const [Name, setName] = useState('');
    
    const [Lastname, setLastname] = useState(''); 
    
    const [Email, setEmail] = useState('');
       
    const [Phone, setPhone] = useState('');

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
   fetch("https://api.ipregistry.co/?key=ccu1zlzhgetyu5", requestOptions)
   .then((response) => response.json())
   .then((result) => {
    localStorage.setItem(
      "calling_code",
      "+" + result.location.country.calling_code
    );
    localStorage.setItem("country", result.location.country.code);
    localStorage.setItem("country_name", result.location.country.name);
    var countryCode = document.getElementById("countryCode-1");
    var countryCode2 = document.getElementById("countryCode-2");
    countryCode.value = "+" + result.location.country.calling_code;
    countryCode2.value = "+" + result.location.country.calling_code;
    localStorage.setItem("lang", result.location.language.code);
  })
   .catch((error) => console.log("error", error));

    const submitPhone =()=>{
      Axios.post("http://localhost:3001/api/insert",{
        Name: Name, 
        Lastname: Lastname, 
        Email: Email,
        Phone: Phone
      }).then (() => {
        alert("Sucessful values inserted");
      });
    };   
   
////////////////////////////////////////////////////////////////////
    const [phonestatus, setPhonestatus] = useState({});

    function onSubmit(res) {
    setPhonestatus(res);
  }

  
  useEffect(() => {
    console.log('From App.js ', phonestatus);
  }, [phonestatus]);
///////////////////////////////////////////////////////////////////
      
  return (            
    <div className="App" class="right">
    <div class="container mt-5"></div>
    <div class="content"></div>
      <div class="row"></div>
        <div class="col-lg-8"></div>         
                  
        <div class="mt-5 d-sm-block d-md-block d-lg-none">
		                	  <div class="d-flex justify-content-center">
		                		<div class="card" >
								        <div class="card-header text-center">
								        Averigua cómo empezar a invertir en Amazon hoy!
								        </div></div></div></div>

                        <div className="form" class="card-body">      
      
                        <form id="mainForm-2" class="needs-validation" >        
      
                        <label>Name </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Ej. José" 
                        id="Name" 
                        name="Name" 
                        onChange={(e)=>{
                        setName(e.target.value)
                        }} required />            

                        <label>Last Name </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Ej. García"  
                        id="Lastname" 
                        name="Lastname" 
                        onChange={(e)=>{
                        setLastname(e.target.value)
                        }} required />   

                        <label>Email </label>
                        <input type="text" 
                        class="form-control"
                        placeholder="Ej. josegarcia@gmail.com" 
                        id="Email"  
                        name="Email" 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        required/> 
                        
                        <div>
                        <form>
                        <div> 
                        Phone Number 
                        <PhoneInput 
                        id= "Phone"
                        name="Phone"
                        type="tel" 
                        maxLength="12" 
                        placeholder="Ej. 55 3120 1869" 
                        labels={en}
                        defaultCountry={localStorage.getItem("country")}
                        class="form-control telephone_number"
                        className="phoneInput"
                        value={Phone}
                        onChange={Phone=>setPhone(Phone)}
                        required
                        />
                        
                        {""}
                        {Phone&& isPossiblePhoneNumber(Phone) ? 
                        "Valid number" : "Please enter a valid number"}
                        <br></br>
                        
                        {""}
                        {Phone&& isValidPhoneNumber(Phone) ? 
                        "Valid number for this country" : "Please enter a valid number for this country"}
                        
                        <FormPhoneComponent 
                        onPhoneSubmit={onSubmit}
                        />     
                        
                        </div>
                        <div>
                        </div>
                        </form>
                        </div> 

                        <button 
                        class="btn btn-lg btn-blockform-button my-4"  
                        id="SubmitButton" 
                        type="submit" 
                        onClick={submitPhone} 
                        required> 
                        
                       <strong> Solicitar informacion</strong> 
                        </button>  
                        </form>                        
                        </div> 
                        <img src="side-banner.jpg" alt="imagen" class="img-fluid mt-5"></img> 
                        </div> 
                                    
);
}

export default App;

