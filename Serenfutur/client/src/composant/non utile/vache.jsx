import React, { Component } from "react";

class VacheComponent extends Component {
  componentDidMount() {
    const vache = 50;

    for (let i = 0; i < vache; i++) {
      let star = document.createElement("div");
      star.className = "vache";
      this.setRandomPosition(star); // Utilisez une fonction pour définir la position
      document.querySelector(".enclos3").appendChild(star);
    }
  }

  setRandomPosition(element) {
    const enclosWidth = document.querySelector(".enclos3").clientWidth;
    const enclosHeight = document.querySelector(".enclos3").clientHeight;
    
    const randomX = Math.random() * (enclosWidth - 20); // 20 est la largeur de la vache
    const randomY = Math.random() * (enclosHeight - 20); // 20 est la hauteur de la vache
    
    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
  }

  render() {
    return null; // Le composant ne rend rien, car les vaches sont ajoutées en JS
  }
}

export default VacheComponent;