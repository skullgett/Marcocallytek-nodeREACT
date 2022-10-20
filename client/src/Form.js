import React, { useState } from 'react';
import './Form.css';
import PhoneForm from './PhoneForm';
import FormSuccess from './FormSuccess';
import 'react-phone-number-input/style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
      <div class="card-header text-center">
								    Averigua cómo empezar a invertir en Amazon hoy!
								  </div>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>   
     
        </div>
          {!isSubmitted ? (
            <PhoneForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
  };
  
  export default Form;