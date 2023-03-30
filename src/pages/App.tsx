import Apresentacao from "components/Apresentacao";
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
    </div>
  );
}
export default App;
