import React from "react";
import "../src/assets/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "../src/composant/presentation";
import AdaBoostClassifier from "../src/composant/AdaBoostClassifier";
import LogisticRegression from "../src/composant/LogisticRegression";
import DecisionTreeClassifier from "../src/composant/DecisionTreeClassifier";
import KNeighborsClassifier from "../src/composant/KNeighborsClassifier";


function App() {
  return (
    <div className="container">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Presentation />}>
              {" "}
            </Route>
            <Route path="/AdaBoostClassifier" element={<AdaBoostClassifier/>}>
              {" "}
            </Route>
            <Route path="/LogisticRegression" element={<LogisticRegression/>}>
              {" "}
            </Route>
            <Route path="/DecisionTreeClassifier" element={<DecisionTreeClassifier/>}>
              {" "}
            </Route>
            <Route path="/KNeighborsClassifier" element={<KNeighborsClassifier/>}>
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
