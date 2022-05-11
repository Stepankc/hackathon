import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
 
const Loginpage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginBlock">
        <h1 className="LoginTitle">Вход</h1>
        <div className="component">
          <h2 className="LoginText">Логин:</h2>
          <div className="LogInp">
            <input type="text" className="LoginInput" placeholder="Login" />
          </div>
        </div>
        <div className="component">
          <h2 className="LoginText">Пароль:</h2>
          <div className="LogInp">
            <input type="password" className="LoginInput" placeholder="Password" />
          </div>
        </div>
        <div className="BtnDiv">
          <Link className="LogBtn" to="/getstart">
            <button className="LoginButton">
              Log in
            </button>
          </Link>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Loginpage;
