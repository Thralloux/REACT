import { Link } from "react-router-dom";
import "./supervision.css";
import pelouseImage from "../image/pelouse.jpg";
import peloImage from "../image/pelo.jpg";
import React, { useEffect } from "react";


function Supervision() {
    
  return (
    <div>
      <header className="mb-2">
        <h1>famille jerry</h1>
        <nav>
          <Link to="/">Présentation</Link>
          <Link to="/graphique">Graphique</Link>
          <Link to="/e-commerce">E-Commerce</Link>
          <Link to="/prediction">Prédiction</Link>
          <Link to="/supervision">Supervision</Link>
        </nav>
      </header>
     

      <div className="row">
        {/* Enclos 1 */}
        <div className="col">
          <div className="enclos1 border border-dark p-3 h-100">
            <div>
              <h2>Poules</h2>
              <li>Terrain: 100 m2</li>
              <li>Nombres: 50</li>
            </div>
            <img src={peloImage} alt="Poules" className="img-fluid" />
          </div>
        </div>

        {/* Enclos 2 */}
        <div className="col">
          <div className="enclos2 border border-dark p-3 h-100">
            <div>
              <h2>Chèvre</h2>
              <li>Terrain: 200 m2</li>
              <li>Nombres: 30</li>
            </div>
            <img src={peloImage} alt="Chèvre" className="img-fluid" />
          </div>
        </div>

         {/* Enclos 3 */}
         <div className="col">
          <div className="enclos3 border border-dark p-3 h-100">
           <div>
              <h2>Vaches</h2>
              <li>Terrain: 200 m2</li>
              <li>Nombres: 50</li>
            </div>
            <img src={peloImage} alt="Poules" className="img-fluid" />
          </div>
        </div>
      </div>
      </div>
   
  );
}

export default Supervision;


