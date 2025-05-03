import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import { AppStore } from "./context/AppContext";
import Toast from "./components/Toast/Toast";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AppStore>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
        <Toast />
      </AppStore>
    </Provider>
  );
}

export default App;
