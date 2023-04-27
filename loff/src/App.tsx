import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page-components/Home";
import Serier from "./page-components/Serier";
import Bassene from "./page-components/Bassene";
import OmLoff from "./page-components/OmLoff";
import Details from "./page-components/Details";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/serier" element={<Serier />}></Route>
        <Route path="/bassene" element={<Bassene />}></Route>
        <Route path="/omloff" element={<OmLoff />}></Route>
        <Route path="/details:id" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
