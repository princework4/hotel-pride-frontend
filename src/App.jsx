import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import Toast from "./components/Toast/Toast";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <Toast />
    </Provider>
  );
}

export default App;
