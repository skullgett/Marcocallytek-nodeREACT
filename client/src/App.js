/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './App.css';
import { useState } from "react";
import Axios from "axios";

/*
function phonenumber(Phone) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(Phone.value.match(phoneno)) {
    return true;
  }
  else {
    alert("message");
    return false;
  }
}
*/

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
								    Averigua cómo empezar a invertir en Amazon hoy!
								  </div>
                                   
      <div className="form" class="card-body">
      
      <form id="mainForm-2" class="needs-validation" >
        
      
        <label>Name </label>
        <input type="text" class="form-control" placeholder="p. ej. José" required  name="Name" onChange={(e)=>{
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

        <footer>
		<div class="container mt-5 py-5 disclaimer">
			<p><small>Disclaimer:</small></p>
			<p><small>All Amazon logos are trademarks of Amazon.com, Inc. or its affiliates.</small></p>
			
			<nav class="navbar navbar-expand-lg d-flex justify-content-center mt-3">
			    <div class="navbar-nav">
			      <a class="nav-item nav-link" href="#" data-toggle="modal" data-target="#terms">Términos y Condiciones</a>
			      <a class="nav-item nav-link" href="#" data-toggle="modal" data-target="#about">Acerca de nosotros</a>
			    </div>
			</nav>
			<p class="text-center mt-3"><small>© insiderfinanciero.com</small></p>
		</div>
	</footer>   
	<div class="modal" id="terms" tabindex="-1" role="dialog">
	  <div class="modal-dialog modal-lg" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title">Terms &amp; Conditions</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
			
			<p><small>InsiderFinanciero.com (la "Compañía", "nosotros", "nuestro" o "nosotros") proporciona indirectamente a través de su software y sitio web designados (el "Sitio web") ciertos servicios de marketing, publicidad, promoción y relacionados (el "Servicio" ; los usuarios del Servicio se denominarán "Usuarios", "usted" o "su"). Estos Términos de uso (los "Términos") rigen el acceso y el uso del Sitio web y los Servicios por parte de los Usuarios. Los usuarios deben aceptar estos Términos antes de utilizar el sitio web.</small></p>
			
			<p><small>Lea estos Términos detenidamente. Estos Términos rigen su acceso y uso del sitio web y los servicios. Al acceder, registrarse para usar, descargar, compartir o usar de otra manera el sitio web o usar cualquier script de software proporcionado por nosotros para que el sitio web esté disponible o utilizable, usted expresa su consentimiento tanto a estos términos como a nuestra política de privacidad, y que puede ser modificados o cambiados de vez en cuando a nuestro exclusivo criterio. Su uso continuado del sitio web se considerará que acepta dichos términos modificados o actualizados.</small></p>

			<p><small>Esta página web no es ni una agencia de noticias, ni una página web de información ni un blog. Es una página web con material promocional que utiliza storytelling para ilustrar el objetivo de los servicios y productos ofertados. Las historias contadas en esta página web son anuncios o material publicitario relativa a información y funciones que permiten una mejor comprensión de la idea propuesta. Descargo general de Responsabilidad: las actividades de inversión conllevan mucho riesgo y pueden conducir a la pérdida total de las cantidades invertidas. Por ello, estos activos pueden no ser adecuados para todas las tipologías de inversores. No invierta nunca dinero que no se pueda permitir perder. Antes de que se decida a realizar este tipo de inversión, debe ser consciente de todos los riesgos y buscar asesoramiento por parte de un consultor financiero autorizado.</small></p>
			<p><small>*AVISO DE RIESGO SOBRE LOS CFD: Los riesgos de pérdida al invertir en CFD pueden ser sustanciales y el valor de sus inversiones podría fluctuar. Los CFD son instrumentos complejos y conllevan un alto riesgo de pérdida de dinero como consecuencia del apalancamiento. Es recomendable que considere si entiende cómo funciona este producto, y si puede asumir el alto riesgo de perder su dinero.</small></p>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="modal" id="about" tabindex="-1" role="dialog">
	  <div class="modal-dialog modal-lg" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title">Acerca de nosotros</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	       
	        <p><small>Este sitio es un artículo patrocinado y pretende ser un anuncio, no un contenido editorial.</small></p>
			
			<p><small>Nuestro sitio permite a las personas solicitar cotizaciones o información para el producto o servicio mostrado o seleccionado en este sitio (la "Compañía").</small></p>
			
			<p><small>El servicio que brinda nuestro sitio es conectar a las personas que buscan obtener más información sobre el servicio con Proveedores externos ("Terceros"). Al utilizar nuestro sitio web, usted comprende y acepta que es el único responsable de realizar sus propias evaluaciones, decisiones y valoraciones sobre si debe comprometerse con cualquier Proveedor de servicios o interactuar de cualquier otra manera con cualquier proveedor de servicios de alguna manera.</small></p>
			
			<p><small>Usted comprende y acepta que la Compañía: (a) no emplea, recomienda ni respalda a ningún Tercero o Producto, según corresponda, ni a ninguna parte relacionada de los mismos, y no tiene control sobre los actos u omisiones de ningún Tercero, su negocio, sus productos o servicios; (b) no hace declaraciones ni garantías sobre los Terceros y Productos, incluida su calidad, precio, compatibilidad, disponibilidad o cualquier otra característica, o sobre sus interacciones o tratos con Terceros; (c) no hace declaraciones ni garantías sobre los derechos de propiedad u otros derechos o características o aspectos regulatorios relacionados con los Productos, incluida cualquier autorización, permiso o licencia requerida para cargar, compartir o poner a disposición de otro modo, y para el uso, venta y compra de dichos Productos; y (d) no es responsable del desempeño o conducta de ningún Usuario u otros terceros de ninguna manera usando o habiendo usado los Servicios, y / o dentro o fuera del Sitio Web.</small></p>
			
			<p><small>La Compañía no está obligada a filtrar o verificar cualquier información sobre Terceros y / o Usuarios, los Productos o cualquier otra característica relacionada con el Sitio Web o los Servicios y, por lo tanto, debe tener cuidado y realizar sus propios exámenes y verificaciones antes de contratar con cualquier persona a través de los Servicios o el Sitio web o que interactúe de otra manera con alguien.</small></p>
			
			<p><small>La Compañía renuncia expresamente, y usted exime expresamente a la Compañía de cualquier y toda responsabilidad por cualquier controversia, reclamo, demanda, lesión, pérdida, daño y / o daño que surja de y / o de alguna manera relacionada con los Terceros, Productos. , Servicios y Sitio web o sus interacciones o tratos con Terceros, incluidos, entre otros, los actos y / u omisiones de Terceros de cualquier manera que utilicen o estén relacionados con los Servicios o la empresa por cualquier medio. Al utilizar este sitio web, usted reconoce que es el único responsable de dicho uso y las conexiones, interacciones, compras o cualquier otra acción que realice y que todo uso de los servicios o del sitio web es bajo su propio riesgo.</small></p>
			
			<p><small>Para evitar cualquier duda, la Compañía no está vendiendo, otorgando licencias ni poniendo a su disposición ningún Producto ...</small></p>
	      
        </div>
	    </div>
	  </div>
	</div>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
      </div>

      </div>
      
      </div>
      
      
      );
      }

export default App;

