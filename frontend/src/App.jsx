import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './paginas/Login';
import Header from './components/Header';
import Habitaciones from './paginas/Habitaciones';



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para login sin Header */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta para habitaciones con Header */}
        <Route path="/habitaciones" element={
          <>
            <Header />
            <Habitaciones />
          </>
        } />
        
        {/* Redirecciona a login por defecto */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}


export default App

