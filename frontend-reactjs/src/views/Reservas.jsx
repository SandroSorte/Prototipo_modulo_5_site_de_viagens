import React from 'react'
import { Link } from 'react-router-dom'

export default function Reservas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 border rounded-4 bg-light p-4 m-auto mt-5 shadow">
          <h3 className="text-center m-4"> Efetue o login para ter acesso aos nosso serviços</h3>
          <form>
            <div className="mb-3">
              <label htmlfor="exampleInputEmail1" class="form-label">Login</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Username, email..." />
            </div>
            <div class="mb-3">
              <label htmlfor="exampleInputPassword1" class="form-label">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
              <div class="row">
                <div className='col mt-2'>
                  <Link to='/RedeSenha' class="links">Esqueci minha senha</Link>
                </div>
                <div className="col mt-2">
                  <Link to='/cadastro' class="links"> Não tenho cadastro</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
