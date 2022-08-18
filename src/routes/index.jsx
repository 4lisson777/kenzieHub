import { Route, Routes, Navigate } from 'react-router-dom';
import Cadastro from '../components/Cadastro';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default RoutesMain;
