import Routing from "./Routing";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routing />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
