import React, { useState } from "react";
import {
  CabeceraCV as cabeceraData,
  Perfil as perfilData,
  Educacion as educacionData,
  Experiencia as experienciaData,
  stackTecnologias as tecnologiasIniciales,
  Proyectos as proyectosData,
  Habilidades as habilidadesData,
} from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nueva) => {
    setTecnologias((prev) => [...prev, nueva]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <CabeceraCV nombre={cabeceraData.nombre} profesion={cabeceraData.profesion} />
      <Perfil texto={perfilData.texto} />
      <Educacion estudios={educacionData} />
      <Experiencia trabajos={experienciaData} />
      <StackTecnologias tecnologias={tecnologias} />
      <FormularioTecnologia onAgregar={agregarTecnologia} />
      <ToggleHabilidades habilidades={habilidadesData} />
      <Proyectos proyectos={proyectosData} />
    </div>
  );
}
export default App;