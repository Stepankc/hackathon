import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import WorkSpace from './pages/WorkSpace';
import GetStart from './pages/GetStart';
import DocumentPage from './pages/DocumentPage';
import Loginpage from './pages/LoginPage';
import "./style/LoginPage.sass";
import "./style/header.sass";
import "./style/workSpace.sass";
import "./style/ticket.sass";
import "./style/getStart.sass";


function App() {
  return (
    <div className="App">
      <Router>
        {window.location.pathname !== "/" ? <Header /> : <Loginpage />}
        <Switch>
          <Route path="/" component={Loginpage} exact />
          <Route path="/getstart" component={GetStart} exact />
          <Route path="/workspace" component={WorkSpace} exact />
          <Route path="/document" component={DocumentPage} exact />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
