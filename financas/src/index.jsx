import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import CriarConta from './routes/criarConta';
import  Error  from './routes/Error.jsx';
import { createRoot } from "react-dom/client";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/CriarConta' element={<CriarConta/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}




const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

