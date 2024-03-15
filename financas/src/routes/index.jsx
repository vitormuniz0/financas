import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from '../Pages/Login/index.jsx';
import { Register } from '../Pages/Resgister/index.jsx';

export const AppRouter = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  )
}