import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function Cadastro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const salvar = async (e) => {
    e.preventDefault();
    console.log(nome, cpf, email);
    await axios.post("http://localhost:8080/api/cliente", {
      nome: nome,
      cpf: cpf,
      email: email
    }).then((result) => {
      alert("Usuário cadastrado.")
      navigate("/home")
    }).catch((erro) => {
      console.log(erro);

    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 m-auto border bg-light rounded-4 p-4 mt-5 shadow">
          <h2 className="text-center m-4"> Cadastro de Usuário</h2>
          <form>
            <div class="mb-3">
              <label htmlfor="exampleInputNome1" class="form-label">
                Nome
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputNome1"
                aria-describedby="emailHelp"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlfor="exampleInputCpf" class="form-label">CPF</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputCpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlfor="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Link to="/home" type="submit" class="btn btn-outline-success" onClick={salvar}>
              Salvar</Link>
            <Link to="/home" type="submit" class="btn btn-outline-warning mx-2">
              Cancelar</Link>
          </form>
        </div>
      </div >
    </div >
  );
}
