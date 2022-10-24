import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react"

export default function EditarCadastro() {

  const navigate = useNavigate();

  const { id_cli } = useParams();

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const editar = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/cliente/${id_cli}`, {
        nome: nome,
        cpf: cpf,
        email: email
      })
      .then((result) => {
        console.log("Usuário atualizado." + result.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);

      });
  };

  useEffect(() => {
    carregaUsuario();
  }, []);

  const carregaUsuario = async () => {
    const result = await axios.get(`http://localhost:8080/api/cliente/${id_cli}`)
    console.log(result.data)
    setNome(result.data.nome)
    setCpf(result.data.cpf)
    setEmail(result.data.email)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Atualizar Usuário</h2>
          <form>
            <div class="mb-3">
              <label htmlfor="exampleInputNome1" class="form-label">
                Nome
              </label>
              <input
                type="text"
                class="form-control"
                id="nome"
                aria-describedby="nomeHelp"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlfor="cpf" class="form-label">CPF</label>
              <input
                type="text"
                class="form-control"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlfor="email" class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit"
              className="btn btn-outline-success"
              onClick={editar}
            >
              Salvar
            </button>
            <Link to="/home" class="btn btn-outline-warning mx-2">
              Cancelar
            </Link>
          </form>
        </div>
      </div >
    </div >
  );
}
