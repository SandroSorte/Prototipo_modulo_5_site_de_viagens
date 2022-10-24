import React from 'react'

export default function Contato() {
  return (
    <div class='container'>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
