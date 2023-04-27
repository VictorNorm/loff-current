import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page-components/Home";
import Serier from "./page-components/Serier";
import Bassene from "./page-components/Bassene";
import OmLoff from "./page-components/OmLoff";
import Details from "./page-components/Details";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <Router basename="/build/index.html">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/serier" element={<Serier />}></Route>
        <Route path="/bassene" element={<Bassene />}></Route>
        <Route path="/omloff" element={<OmLoff />}></Route>
        <Route path="/details:id" element={<Details />}></Route>
      </Routes>
      <CookieConsent
        debug={true}
        style={{
          background: "#F8FCEF",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "2px solid #1E103B",
          flex: 0,
        }}
        contentStyle={{ flex: "none" }}
        buttonStyle={{ background: "#FFF24D", fontSize: "20px" }}
        buttonText={"I understand"}
        expires={365}
        flipButtons={true}
      >
        This site uses cookies to enhance the user experience.
      </CookieConsent>
    </Router>
  );
}

export default App;
