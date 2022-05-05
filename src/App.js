import React from "react";
import Header from "./components/Header";
import Loginpage from "./components/loginpage";
import "./style/LoginPage.sass";
import "./style/header.sass";
import "./style/workSpace.sass";
import "./style/ticket.sass"

function App() {
  return (
    <div className="App">
      {window.location.pathname !== "/" ? <Header /> : null}
      {window.location.pathname === "/" ? <Loginpage /> : null}
    </div>
  );
}
export default App;
