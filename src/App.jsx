import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import { AppStore } from "./context/AppContext";
import Toast from "./components/Toast/Toast";
import "./App.css";

function App() {
  return (
    <AppStore>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <Toast />
    </AppStore>
  );
}

export default App;
