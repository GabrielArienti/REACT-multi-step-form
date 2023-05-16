import "./App.css";

// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Ficamos felizes coma sua compra!</h2>
        <p>Deixe sua opinião para avaliar nossos serviços</p>
      </div>

      {/* Steps */}
      <div className="form-container">
        <p>Etapas</p>
        <form></form>

        {/* Buttons */}
        <div className="actions">
          <button type="button">
            <span>Voltar</span>
            <GrFormPrevious></GrFormPrevious>
          </button>
          <button type="submit">
            <span>Avançar</span>
            <GrFormNext></GrFormNext>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
