import React from 'react'
import '../Nav.css'
import unicornio from './imagens/unicornio.png'
import entrar from './imagens/entrar.png'
import tel from './imagens/tel.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <Link className="navbar-brand"><img id="logo" src={unicornio}/></Link>
        <h5 id="fonte">Viagens Fantásticas</h5>
        <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav justify-content-center" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/home' className="nav-link">Home|</Link>
            </li>
            <li className="nav-item">
              <Link to='destino' className="nav-link">Destinos|</Link>
            </li>
            <li className="nav-item">
              <Link to='promocao' className="nav-link">Promoções|</Link>
            </li>
            <li className="nav-item">
              <Link to='reservas' className="nav-link">Reservas|</Link>
            </li>
            <li className="nav-item">
              <Link to='contato' className="nav-link">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse nav justify-content-center" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link"><img id="icone" src={tel} />Ligue</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"><img id="icone" src={entrar} />Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
