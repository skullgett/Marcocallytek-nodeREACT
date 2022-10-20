import React, { useState, useEffect } from 'react';
import Axios from "axios";
import useForm from './useForm';
import PhoneInput, { isPossiblePhoneNumber,isValidPhoneNumber } from 'react-phone-number-input';
import './Form.css';
import en from 'react-phone-number-input/locale/en.json';

const PhoneForm = ({ submitForm }) => {

  const [Name, setName] = useState('');
    
  const [Lastname, setLastname] = useState(''); 
  
  const [Email, setEmail] = useState('');
     
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
        Email: Email,
        Phone: Phone

      }).then (() => {
        alert("Sucessful values inserted");
      });
    };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate 
  );


  function validate(values) {
    let errors = {};
    if(!values.number){
        errors.number="Phone Number required";
    }else if(!/^[\\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(values.number)){
errors.number="Phone number is invalid";
}
    return errors;
  }

  return (
    <div className='form-content-right' >
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         To call us back <strong>Provide</strong> Your phone number
        </h1>
        <div className='form-inputs' >
        <label>Name </label>
        <input type="text" class="form-control" placeholder="Ej. José" id="Name" name="Name" onChange={(e)=>{
          setName(e.target.value)
        }} required />

        <label>Last Name </label>
        <input type="text" class="form-control" placeholder="Ej. García"  id="Lastname" name="Lastname" onChange={(e)=>{
          setLastname(e.target.value)
        }} required />

        <label>Email </label>
        <input type="text" class="form-control" placeholder="Ej. josegarcia@gmail.com" id="Email"  name="Email" onChange={(e)=>{
          setEmail(e.target.value)
        }} required/> 

        {PhoneLastNameList.map((val)=>{
          return<h5> Name: {val.Name} | Last Name: {val.Lastname} | Email: {val.Email} | Phone: {val.Phone}</h5>
        })}
      
      <button class="btn btn-lg btn-block form-button my-4"  
      id="SubmitButton" type="submit" 
      onClick={submitPhone} 
      required> Suscribete </button>
      
      <PhoneInput
      name="phone"
      type="tel"
      maxlength="12" 
      placeholder="Ej. 55 3120 1869"  
      labels={en}
      defaultCountry="MX"
      class="form-control telephone_number"
      className="phoneInput"
      value={Phone}
      onChange={Phone=>setPhone(Phone)}
      required
      />
      
      Is it valid? {""}
      {Phone&& isPossiblePhoneNumber(Phone) ? "Yes" : "No"}
      <br></br>
      Is it valid in this country? {""}
      {Phone&& isValidPhoneNumber(Phone) ? "Yes" : "No"}
 
          <label className ='form-label'>Phone Number</label>
          <input 
          maxlength="12"              
          placeholder="Ej. 55 3120 1869"  
          className='form-input'
          type='tel'
          name='number'
          value={values.number}
          onChange={handleChange}
          required
        />
        {errors.number && <p>{errors.number}</p>}
        </div>
      
        <button 
        onClick={submitPhone}
       className='form-input-btn' 
        type='submit'
        disabled={values.number < 1}>
       Empieza a invertir en Amazon YA!
        </button>
        <span className='form-input-login'>
         
        </span>
      </form>
    </div>
  );
};

export default PhoneForm;