import Cabecalho from "../components/Cabecalho";
import Apresentacao from "components/Apresentacao";
import SobreMim from "components/SobreMim";
import Skills from "components/Skills";
import FormacaoAcademica from "components/Formacao";
import './reset.module.scss'
import Projetos from "components/Projetos";

function App()
{
  return (
    <div className="App">
      <Cabecalho />
      <Apresentacao />
      <SobreMim />
      <Skills/>
      <FormacaoAcademica/>
      <Projetos/>
    </div>
  );
}
export default App;
