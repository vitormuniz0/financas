import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import CriarConta from './routes/criarConta';
import  Error  from './routes/Error.jsx';
import { createRoot } from "react-dom/client";
import App from './App.jsx';

const Principal = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
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

