import "../composant/KNeighborsClassifier.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function KNeighborsClassifier() {
  const [gender, setGender] = useState("");
  const [bsc, setBsc] = useState("");
  const [workex, setWorkex] = useState("");
  const [etest_p, setEtest_p] = useState("");
  const [msc, setMsc] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { gender, bsc, workex, etest_p, msc };

    axios
      .post("http://localhost:8083/KNeighborsClassifier", params)
      .then((res) => {
        const data = res.data.data;
        const msg = `Prediction: ${data.prediction}`;
        setMessage(msg);
        reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  const reset = () => {
    setGender("");
    setBsc("");
    setWorkex("");
    setEtest_p("");
    setMsc("");
  };

  return (
    <div className="container">
      <header>
        <Link to="/">
          {" "}
          <h1>SerenFutur</h1>
        </Link>
        <nav className="mb-3">
          <Link to="/AdaBoostClassifier">AdaBoostClassifier</Link>
          <Link to="/LogisticRegression">LogisticRegression</Link>
          <Link to="/DecisionTreeClassifier">DecisionTreeClassifier</Link>
        </nav>
      </header>

      <section className="glass text">
        <div class="container  ">
          <div class="row">
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: "url('../image/neightboor.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: "-1", // Assure que l'image soit en arrière-plan du texte
              }}
            />
            <div class="col-md-4 d-flex align-items-center ph1">
              <h3>KNeighborsClassifier</h3>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center ph1">
              <h3>Précision: 46%</h3>
            </div>
          </div>
        </div>
      </section>

      <br />

      <div className="row">
        <div className="col-md-6 ">
          <section className="glass text">
            <h4 className="text-center mb-4">
              Comprendre le Classificateur k-NN
            </h4>
            <p>
              Le classificateur k-NN est un algorithme d'apprentissage supervisé
              utilisé pour la classification et la régression. L'idée
              fondamentale derrière k-NN est de classifier un point de données
              en se basant sur les étiquettes des points voisins les plus
              proches dans l'espace des caractéristiques.
            </p>
            <p>
              Le fonctionnement de ce classificateur est intuitif : pour chaque
              point de données à classifier, l'algorithme trouve les k points
              les plus proches dans l'espace des caractéristiques, puis affecte
              à ce point la classe majoritaire parmi ces k voisins.
            </p>
            <p>
              L'entraînement d'un classificateur k-NN consiste simplement à
              mémoriser les données d'entraînement. Lorsqu'un nouveau point doit
              être classifié, l'algorithme recherche simplement les k voisins
              les plus proches dans l'espace des caractéristiques et prend leur
              classe majoritaire comme prédiction.
            </p>

            <p>
              Cependant, le classificateur k-NN peut être sensible aux valeurs
              aberrantes et peut nécessiter une normalisation des
              caractéristiques pour des résultats optimaux.
            </p>
          </section>
        </div>
        <br />

        <div className="col-md-6">
          <section className="glass form">
            <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
              <h4>Test de Recrutement</h4>
              <div className="glass__form__group">
                <input
                  id="gender"
                  className="glass__form__input"
                  placeholder="Genre (2 = Homme ou 1 = Femme)"
                  required
                  autoFocus
                  min="1"
                  max="2"
                  pattern="[0-9]{0,1}"
                  title="Gender must either be (1 = Male ou 0 = Female)"
                  type="number"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>

              <div className="glass__form__group">
                <input
                  id="bsc"
                  className="glass__form__input"
                  placeholder="Note BSc (1.00 - 5.00)"
                  required
                  min="1"
                  max="5"
                  type="number"
                  title="BSc CGPA must be in the range (1.00 - 5.00)"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="0.5"
                  value={bsc}
                  onChange={(e) => setBsc(e.target.value)}
                />
              </div>

              <div className="glass__form__group">
                <input
                  id="workex"
                  className="glass__form__input"
                  placeholder="Expérience professionnelle (1 = Oui ou 0 = Non)"
                  required
                  min="0"
                  max="1"
                  type="number"
                  title="Work Experience must either be (1 = True or 0 = False)"
                  value={workex}
                  onChange={(e) => setWorkex(e.target.value)}
                />
              </div>

              <div className="glass__form__group">
                <input
                  id="etest_p"
                  className="glass__form__input"
                  placeholder="Score de test (1.00 - 100.00)"
                  required
                  min="1"
                  max="100"
                  type="number"
                  title="E-Test score must be in the range (1.00 - 100)"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="1"
                  value={etest_p}
                  onChange={(e) => setEtest_p(e.target.value)}
                />
              </div>

              <div className="glass__form__group">
                <input
                  id="msc"
                  className="glass__form__input"
                  placeholder="Note MSc (1.00 - 5.00)"
                  required
                  min="0"
                  max="5"
                  type="number"
                  title="MSc CGPA must be in the range (1.00 - 5.00)"
                  pattern="[0-9]+([\.,][0-9]+)?"
                  step="0.5"
                  value={msc}
                  onChange={(e) => setMsc(e.target.value)}
                />
              </div>

              <div className="glass__form__group">
                <button type="submit" className="glass__form__btn">
                  Prédire
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {message && (
        <div className="row">
          <div className="col text-center mt-2">
            <div className="alert alert-info">
              <p>{message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KNeighborsClassifier;
