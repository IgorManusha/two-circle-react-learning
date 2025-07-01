import "./App.css";
import ControlledForms from "./ControlledForms/ControlledForms";
import RestComponent from "./RestApi/RestComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RestComponent />
        {/* react hook form */}
      </header>
    </div>
  );
}

export default App;
