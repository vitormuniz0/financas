import React from 'react';
import ReactDOM from 'react-dom';
 import { BrowserRouter,Route,RouterProvider, Routes } from 'react-router-dom';
import Login from './routes/Login';
import CriarConta from './routes/criarConta';
import  Error  from './routes/Error.jsx';

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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

