import './App.scss';
import Aside from "./components/Aside/Aside";
import React from "react";
import Main from "./components/Main/Main";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Aside />
                <Main />
            </div>
        </div>
    );
}

export default App;
