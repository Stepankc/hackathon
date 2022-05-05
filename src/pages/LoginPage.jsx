import React from "react";

const Loginpage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginBlock">
        <h1 className="LoginTitle">Вход</h1>
        <div className="component">
          <h2 className="LoginText">Логин:</h2>
          <input type="text" className="LoginInput" placeholder="Login" />
        </div>
        <div className="component">
          <h2 className="LoginText">Пароль:</h2>
          <input type="password" className="LoginInput" placeholder="Password" />
        </div>
        <button className="LoginButton">Log in</button>
      </div>
    </div>
  );
};

export default Loginpage;
