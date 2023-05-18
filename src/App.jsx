import "./App.css";

// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { FiSend } from "react-icons/fi";

// Hooks
import { useForm } from "./hooks/useForm";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>Ficamos felizes coma sua compra!</h2>
        <p>Deixe sua opinião para avaliar nossos serviços</p>
      </div>

      {/* Steps */}
      <div className="form-container">
        <p>Etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          {/* Buttons */}
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {/* button - back */}
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>Voltar</span>
              <GrFormPrevious></GrFormPrevious>
            </button>
            {/* button foward */}
            {isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext></GrFormNext>
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend></FiSend>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
