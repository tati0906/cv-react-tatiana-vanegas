import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import {
  CabeceraCV as cabeceraData,
  Perfil as perfilData,
  Educacion as educacionData,
  Experiencia as experienciaData,
  stackTecnologias
} from "./data/cvData";

function App() {
  return (
    <div>
      <CabeceraCV nombre={cabeceraData.nombre} profesion={cabeceraData.profesion} />
      <Perfil texto={perfilData.texto} />
      <Educacion estudios={educacionData} />
      <Experiencia trabajos={experienciaData} />
      <StackTecnologias tecnologias={stackTecnologias} />
    </div>
  );
}
export default App;