// src/components/CabeceraCV.jsx
import "./cabecera.css";

import React from "react";
// Ejemplo para CabeceraCV.jsx
function CabeceraCV({ nombre, profesion }) {
  return (
    <header class = "cabeza">
      <h1>{nombre}</h1>
      <h2>{profesion}</h2>
      <h2>{}</h2>
      <h2>{}</h2>
    </header>
  );
}
export default CabeceraCV;