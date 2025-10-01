import React from "react";
import "../composant/presentation.css";
import "../assets/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Presentation() {
  return (
    <div>
      <header style={{ marginLeft: "10px" }}>
        <Link to="/">
          {" "}
          <h1 className="">SerenFutur</h1>
        </Link>
        <nav className="mb-3" style={{ marginTop: "-5px" }}>
          <Link
            to="/AdaBoostClassifier"
            className="nav"
            style={{ margin: "0 0px" }}
          >
            AdaBoostClassifier
          </Link>
          <Link
            to="/DecisionTreeClassifier"
            className="nav"
            style={{ margin: "0 0px" }}
          >
            DecisionTreeClassifier
          </Link>
          <Link
            to="/LogisticRegression"
            className="nav"
            style={{ margin: "0 0px" }}
          >
            LogisticRegression
          </Link>
          <Link
            to="/KNeighborsClassifier"
            className="nav"
            style={{ margin: "0 0px" }}
          >
            KNeighborsClassifier
          </Link>
        </nav>
      </header>
      <main className="container">
        <div
          className="p-4 p-md-5 mb-4 text-black rounded bg-image"
          style={{
            backgroundImage: "url(../image/entry.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="col-md-6 px-0">
            <h1 className="display-3 fst-italic h1color">
              Bienvenue dans le monde des prédictions
            </h1>
            <p className="lead my-3 ph1">
              Explorez de nouveaux horizons et découvrez les différents modèles
              de prédiction du moment. Plongez dans cette univers avec
              un modèle de recrutement !
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <Link to="/AdaBoostClassifier" className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">AdaBoostClassifier</h3>
                <div className="mb-1 text-muted">1996</div>
                <p className="mb-auto">
                  Un algorithme d'ensemble qui combine plusieurs modèles faibles
                  pour former un modèle fort. Il accorde des poids aux erreurs,
                  améliorant progressivement les performances globales du
                  modèle.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src="Image/classifier.png"
                  width="250"
                  height="250"
                  alt="AdaBoostClassifier"
                />
              </div>
            </div>
          </Link>

          <Link to="/DecisionTreeClassifier" className="col-md-6">
            <div className="row g-1 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">DecisionTreeClassifier</h3>
                <div className="mb-1 text-muted">1960-1970</div>
                <p className="card-text mb-auto">
                  Un modèle qui prend des décisions en créant une structure
                  arborescente basée sur les caractéristiques d'un ensemble de
                  données, facilitant ainsi la prise de décision.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src="../image/three.png"
                  width="250"
                  height="250"
                  alt="DecisionTreeClassifier"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="row mb-2">
          <Link to="/LogisticRegression" className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">LogisticRegression</h3>
                <div className="mb-1 text-muted"> 1950-1960</div>
                <p className="mb-auto">
                  Un modèle de classification qui modélise la probabilité
                  d'appartenance à une classe en utilisant une fonction
                  logistique, particulièrement adapté à la classification
                  binaire.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src="Image/logic.png"
                  width="250"
                  height="250"
                  alt="LogisticRegression"
                />
              </div>
            </div>
          </Link>

          <Link to="/KNeighborsClassifier" className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">KNeighborsClassifier</h3>
                <div className="mb-1 text-muted">1950</div>
                <p className="mb-auto">
                  Un modèle qui classe les données en se basant sur la proximité
                  dans l'espace des caractéristiques, attribuant une classe en
                  fonction des voisins les plus proches.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src="Image/neightboor.png"
                  width="250"
                  height="250"
                  alt="KNeighborsClassifier"
                />
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Presentation;
