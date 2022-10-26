/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PhoneInput, { isPossiblePhoneNumber,isValidPhoneNumber } from 'react-phone-number-input';
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
           <header>    
      		         <div class="container">
			             <div class="row">
				            <div class="col-lg-8 col-md-12 my-headings">
					          <h1 class="text-white heading-1">¡Las acciones de<span class=" ml-2 text-uppercase orange">Amazon</span></h1>
					          <h1 class="text-white heading-1">se disparan por los cielos!</h1>
				            </div>      
		                  <div class="col-lg-4" id="header-form">
					           <div class="d-none d-lg-block card" >
					           <div class="card-header text-center">
                        
								       Averigua cómo empezar a invertir en Amazon hoy!
								       </div>
                       

                        <div class="card-body">       
                        <form id="mainForm-1" class="needs-validation" >  
                        <div class="form-group">    
      
                        <label class="form-label" for="nombre">Name </label>
                        <input type="text"                         
                        class="form-control" 
                        placeholder="Ej. José" 
                        id="nombre"                          
                        onChange={(e)=>{
                        setName(e.target.value)
                        }}
                        />  
                        <div class="invalid-feedback">
                          </div>  
                        </div>

                        <div class="form-group">						  
                        <label class="form-label" for="apellido">Last Name </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Ej. García"  
                        id="apellido"                          
                        onChange={(e)=>{
                        setLastname(e.target.value)
                        }}
                        />
                        <div class="invalid-feedback">
						           
						            </div>
						            </div>  

                        <div class="form-group">
                        <label class="form-label" for="CorreoElectrónico">Email </label>
                        <input type="email" 
                        class="form-control"
                        placeholder="Ej. josegarcia@gmail.com" 
                        id="CorreoElectrónico"                          
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        /> 
                        <div class="invalid-feedback">						            
						            </div>
						            </div>        
                        
                        <div class="form-group">
                        <label class="form-label" for="NúmerodeTeléfono">Phone Number</label>
                        <div class="input-group">
							          <div class="input-group-prepend col-3 px-0"> 
                        <input type="text" class="form-control" id="countryCode-1" disabled></input>                       
                        </div>								
								
                        <PhoneInput 
                        id="NúmerodeTeléfono"
                        name="Phone"
                        type="text" 
                        maxLength="16" 
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
                         <div class="invalid-feedback">							         
							         </div>
							         </div>
						           </div>             
                                

                        <button 
                        
                        class="btn btn-lg btn-block btn-blockform-button my-4 font-weight-bold btn-1"  
                        id="submit-button-1" 
                        type="submit" 
                        onClick={submitPhone} 
                        required>  
                       <strong> Solicitar informacion</strong> 
                        </button>  
                        </form>                        
                        </div>  
                        <div class="card-footer">  
                        <img src="pay-logos.png" alt="IMAGEN" class="img-fluid"></img>                     
                        </div>                        
                      </div>
                      <div class="col-lg-4 d-none d-lg-block" >
                      <img src="side-banner.jpg" alt="IMAGEN"></img>
                      </div>
                  </div> 
                </div>  
              </div>                         
        </header>
   
                                  
);
}

export default App;

