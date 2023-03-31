import Cabecalho from "../components/Cabecalho";
import Apresentacao from "components/Apresentacao";
import SobreMim from "components/SobreMim";
import Skills from "components/Skills";
import FormacaoAcademica from "components/Formacao";
import './reset.module.scss'

function App()
{
  return (
    <div className="App">
      <Cabecalho />
      <Apresentacao />
      <SobreMim />
      <Skills/>
      <FormacaoAcademica/>
    </div>
  );
}
export default App;
