import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {NavBar} from "./components/NavBar";

function App() {

    const routes = useRoutes();

    return (

        <BrowserRouter>
            <div className={'container'}>
                <div className={'header'}>
                    <NavBar/>
                </div>

                <div className="main">
                    {routes}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
