import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
     
     <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/data" component={Data} />
      </div>
      </Router>
    );
  }
}


function Home() {
  return (
    <div>
       
        <div className="col-lg-6 col-md-6 col-xs-12">

         

          <div className="card">

            <div className="view">
            <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" className="card-img-top img-responsive"
            alt="imagen mapa"/>

            </div>

            <div className="card-body">
            <h4 className="card-title">Mapa</h4>
            <p className="card-text">Selecciona un orige y destino. Te mostraremos los kilometros y tiempo de recorrido. Recuerda que uso una API free de Google console la cual esta limitada por dia. Si no te funciona es porque ya se supero la quota de uso free.</p>
            
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
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
            <Link className="btn btn-primary" to="/data">Ver datos</Link>
            </div>

          </div>

        </div>
      </div>
    
  );
}




function Map() {
  return (

    
      <div className="map-page">

      <Link className="btn btn-primary" to="/" >Volver al home</Link>

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


                </div>
  );
}

function Data() {
  return (
    <div>
      <Link className="btn btn-primary" to="/" >Volver al home</Link>
     data
    </div>
  );
}

export default App;
