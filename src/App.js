import React from "react";
import Header from "./components/Header";
import "./components/LoginPage.sass";
import Loginpage from "./components/loginpage";
import "./style/app.sass";

function App() {
  return (
    <div className="App">
      {window.location.pathname !== "/" ? <Header /> : null}
      {window.location.pathname === "/" ? <Loginpage /> : null}
    </div>
  );
}
export default App;
