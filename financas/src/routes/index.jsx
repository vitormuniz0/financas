import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login/index.jsx';
import { Register } from '../Pages/Resgister/index.jsx';
import { PrivateRoute } from './privatesRoutes.jsx';
import { Home } from '../Pages/Home/index.jsx';

export const AppRouter = () => {
  return (
    <Router basename="/financas">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};