import Apresentacao from "components/Apresentacao";
import Skills from "components/Skills";
import SobreMim from "components/SobreMim";
import Cabecalho from "../components/Cabecalho";
import './reset.module.scss'

function App()
{
  return (
    <div className="App">
      <Cabecalho />
      <Apresentacao />
      <SobreMim />
      <Skills/>
    </div>
  );
}
export default App;
