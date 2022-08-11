import { Route, Routes, Navigate } from 'react-router-dom';
import Cadastro from '../components/Cadastro';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import { useState } from 'react';
const RoutesMain = () => {
  const [user, setUser] = useState('');

  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default RoutesMain;
