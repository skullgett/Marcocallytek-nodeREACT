import React, { useEffect } from 'react';
import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

    const [Name, setName] = useState('');
    
    const [Lastname, setLastname] = useState('');
        
    const [Phone, setPhone] = useState('');

    const [PhoneLastNameList, setPhoneList] = useState([]);

       useEffect (()=>{
        Axios.get("http://localhost:3001/api/get").then((response)=>{
          setPhoneList(response.data);
        })
       },[])       
      
    const submitPhone =()=>{
      Axios.post("http://localhost:3001/api/insert",{
        Name: Name, 
        Lastname: Lastname, 
        Phone: Phone
      }).then (() => {
        alert("Successful insert");
      });
    };   
  
  return (         
    <div className="App">
    <div class="container mt-5"></div>
    <div class="content"></div>
      <div class="row"></div>
        <div class="col-lg-8"></div>
          <h1 class="heading-1 main-head-1">
            Este es el mejor momento para empezar a invertir 
            </h1>
                  <h6 class="heading-6 mt-5">
                    Amazon es la acción más caliente del mercado: ¡El gigante del comercio electrónico sigue creciendo exponencialmente y tiene grandes planes para los próximos años!
                  </h6>
                  <div class="mt-5 d-sm-block d-md-block d-lg-none"></div>
		                	<div class="d-flex justify-content-center"></div>
		                		<div class="card" ></div>
								  <div class="card-header text-center">
								    Averigua cómo empezar a invertir en Amazon hoy
								  </div>
                                   
      <div className="form" class="card-body">
      
      <form id="mainForm-2" class="needs-validation" >
      
        <label>Name </label>
        <input type="text" class="form-control" placeholder="p. ej. Jose" required  name="Name" onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <div class="invalid-feedback">El nombre es requerido</div>      

        <label>Last Name </label>
        <input type="text" class="form-control" placeholder="p. ej. García" required  name="Lastname" onChange={(e)=>{
          setLastname(e.target.value)
        }}/>   
        <div class="invalid-feedback">El apellido es requerido </div>
        
       <label>Phone Number </label>       
       <input type="text" class="form-control telephone_number" maxlength="15" placeholder="Número de teléfono" required  name="Phone" onChange={(e)=>{
          setPhone(e.target.value)
        }}/>
        <div class="invalid-feedback"> El número de teléfono se ingresó incorrectamente </div>
        <button class="btn btn-lg btn-block form-button my-4"  type="submit" onClick={submitPhone}> Submit </button>
       
        {PhoneLastNameList.map((val)=>{
          return<h5>Last Name: {val.Lastname} | Phone: {val.Phone}</h5>
        })}
        </form> 
        <div class="card-footer">
        <button onclick={""} class="btn btn-block btn-lg text-white font-weight-bold btn-1"> Empieza a invertir en acciones de Amazon</button>
    
      </div>

      </div>
      
      </div>
      
      );
      }

export default App;

