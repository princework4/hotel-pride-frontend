import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import { AppStore } from "./context/AppContext";
import "./App.css";

function App() {
  return (
    <AppStore>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppStore>
  );
}

export default App;
