import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Habilidades from "./components/Habilidades.jsx";
import {
  CabeceraCV as cabeceraData,
  Perfil as perfilData,
  Educacion as educacionData,
  Experiencia as experienciaData,
  stackTecnologias,
  Proyectos as proyectosData,
  Habilidades as habilidadesData
} from "./data/cvData";

function App() {
  return (
    <div>
      <CabeceraCV nombre={cabeceraData.nombre} profesion={cabeceraData.profesion} />
      <Perfil texto={perfilData.texto} />
      <Educacion estudios={educacionData} />
      <Experiencia trabajos={experienciaData} />
      <StackTecnologias tecnologias={stackTecnologias} />
      <Proyectos proyectos={proyectosData} />
      <Habilidades habilidades={habilidadesData} />
    </div>
  );
}
export default App;