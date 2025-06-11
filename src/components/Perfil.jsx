// src/components/Perfil.jsx
import React from "react";

export default function Perfil({ texto }) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>{texto}</p>
      <p>{}</p>
      <hr />
    </section>
  );
}
