import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { PropTypes } from "prop-types";
import Data from "./Data";
import './App.css';

class App extends Component {


  render() {

    

    return (
      <Router>
     
     <div className="container">
         <div className="row">
            <div className="logo-empresa col-xs-6 col-md-4 col-lg-4">
              <img src="https://servinformacion.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-06-at-7.56.40-AM-1.png" alt="Servinformación" />
            </div>
            
         </div> 

        
        <Route exact path="/" component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/data" component={DataService} />
      </div>
      </Router>
    );
  }
}


function Home() {
  return (
    <div>

        <p className="lead col-xs-12 col-md-12 col-lg-12">Esta prueba es realizada para el cargo front end web developer para Servinformación. Su fin es unicamente demostrativo en conocimientos de ReactJS, Javascript, HTML, Responsive web design. Si desea conocer mi perfil completo puede visitarlo haciendo clic en el siguiente enlace <a href="https://www.linkedin.com/in/jorgsuau/" target="_blank" rel="noopener noreferrer" >https://www.linkedin.com/in/jorgsuau/</a></p>

       
        <div className="col-lg-6 col-md-6 col-xs-12">

         

          <div className="card">

            <div className="view">
            <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" className="card-img-top img-responsive"
            alt="imagen mapa"/>

            </div>

            <div className="card-body">
            <h4 className="card-title">Mapa</h4>
            <p className="card-text">Selecciona un origen y destino. Te mostraremos los kilometros y tiempo de recorrido de tu ruta. Recuerda que uso una API free de Google console la cual esta limitada por dia. Si no te funciona es porque ya se supero la quota de uso free. Puedes modificar el archivo index.html en la carpeta public cambiando solo el valor de la APIKey.</p>
            
            <a className="btn btn-primary" href="/map" >Ir al mapa</a>
            </div>

          </div>

        </div>



        <div className="col-lg-6 col-md-6 col-xs-12">

          <div className="card">

            <div className="view">
            <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" className="card-img-top img-responsive"
            alt="imagen data"/>

            </div>

            <div className="card-body">
            <h4 className="card-title">Datos del servicio</h4>
            <p className="card-text">Al dar clic se cargaran datos de la API proporcionada y esta se paginara usando una libreria externa de jQuery con el fin de mantener un orden en la carga de multiples datos.</p>
            <a className="btn btn-primary" href="/data">Ver datos</a>
            </div>

          </div>

        </div>
      </div>
    
  );
}




function Map() {
  return (

    
      <div className="map-page">

      

                    <div className="container controlsupmap">
                       

                        <input id="origin-input" className="controls col col-4 col-md-4" type="text"
                        placeholder="Ingresa el origen"/>

                        <input id="destination-input" className="controls col col-4 col-md-4" type="text"
                        placeholder="Ingresa el destino"/>

                        <div id="mode-selector" className="controls d-none container">
                            <input type="radio" name="type" id="changemode-walking" />
                            <label htmlFor="changemode-walking">Caminando</label>

                            <input type="radio" name="type" id="changemode-transit"/>
                            <label htmlFor="changemode-transit">transporte publico</label>

                            <input type="radio" name="type" id="changemode-driving" defaultChecked="checked"/>
                            <label htmlFor="changemode-driving">Conduciendo</label>
                        </div>
                    </div>

                    <div id="map"></div>



<Link className="btn btn-primary backto" to="/" >Volver al home</Link>

                </div>
  );
}

function DataService() {

  return (
    
    <div>
      <Data></Data>
      <Link className="btn btn-primary backto" to="/" >Volver al home</Link>
    </div>
  );
}

export default App;
