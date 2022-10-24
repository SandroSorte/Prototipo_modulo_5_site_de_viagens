import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Cadastro from './views/Cadastro';
import EditarCadastro from './views/EditarCadastro';
import ViewsClientes from './views/ViewsClientes';
import Navbar from './componentes/Navbar';
import Promocao from './views/Promocao';
import Contato from './views/Contato';
import Reservas from './views/Reservas';
import Destinos from './views/Destinos';
import RedeSenha from './views/RedeSenha';

export default function Rotas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destino" element={<Destinos />}/>
        <Route path="/promocao" element={<Promocao />}/>
        <Route path="/reservas" element={<Reservas />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/editar/:id" element={<EditarCadastro />} />
        <Route path="/ver/:id" element={<ViewsClientes />} />
        <Route path="/redesenha" element={<RedeSenha />}/>
        <Route path="*" element={<h2> Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}
