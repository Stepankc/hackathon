import React from "react";
import Header from "./components/Header";
import Loginpage from "./components/loginpage";
import "./style/napp.sass"


function App() {
  return (
    <div className="App">
      <Header/>
      <Loginpage />
    </div>
  )
}

export default App;
