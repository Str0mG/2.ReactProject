import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios';
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/home/home';
import NotFound from './components/notFound/notFound';
import DetalhesUsuario from './components/DetalhesUser/DetalhesUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/usuarios'>Usuarios</NavLink>
              </li>
              <li>
                <NavLink to='/Adicionar'>Adicionar usuarios</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/usuarios/:id' element={<DetalhesUsuario/>}/>
            
            <Route path='/usuarios' element={<Usuarios/>}/>
            <Route path='/adicionar' element={<AdicionarUsuario/>} />
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </main>
      </div>
    </Router>
    
  );
}

export default App;
