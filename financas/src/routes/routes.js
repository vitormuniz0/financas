import React from "react";
import { Route, Routes} from 'react-router-dom';
import App from "../App";
import CriarConta from "../criarConta";

const Rota = () => {
    return(
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path="/CriarConta"  element={<CriarConta/>}/>
        </Routes>
    )
}

export default Rota;