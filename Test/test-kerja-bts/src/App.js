import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checklist from "./pages/Checklist/Checklist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checklist:token" element={<Checklist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
