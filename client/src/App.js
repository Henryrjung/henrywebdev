import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          Portfolio
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

export default App;
