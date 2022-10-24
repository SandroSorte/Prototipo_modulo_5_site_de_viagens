import React from 'react'

export default function
  () {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h3> Para ter acesso aos nossos serviços, realize o seu login!</h3>
            <form>
              <div className="form-group">
                <label for="seuEmail">Endereço de email</label>
                <input
                  type="email"
                  className="form-control"
                  id="seuEmail"
                />
              </div>
              <div className="form-group">
                <label for="suaSenha">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-success p-2">Entrar</button>
              <a href="#">Não tenho cadastro</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
