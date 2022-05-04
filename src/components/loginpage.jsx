import React from 'react';

const Loginpage = () => {
    return (
        <div className="LoginPage">
            <div className="LoginBlock">
                <h1 className="LoginTitle"></h1>
                <h2 className="LoginText"></h2>
                <input type="text" className="LoginInput" />
                <h2 className="LoginText"></h2>
                <input type="password" className="LoginInput" />
                <button className="LoginButton"></button>
            </div>
        </div>
    );
};

export default Loginpage;