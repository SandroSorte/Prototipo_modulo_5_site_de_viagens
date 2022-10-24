import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewClientes() {
  const { id_cli } = useParams();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    carregaClientes();
  }, []);

  const carregaClientes = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/cliente/${id_cli}`
    );
    console.log(result.data);
    setNome(result.data.nome);
    setCpf(result.data.cpf);
    setEmail(result.data.email);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Atualizar Usuário</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID: {id_cli}</div>
                <div className="card-body">
                  <p className="card-title">
                    <b>Nome: </b> {nome}
                  </p>
                  <p className="card-title">
                    <b>Cpf: </b> {cpf}
                  </p>
                  <p className="card-title">
                    <b>Email: </b> {email}
                  </p>
                  <Link
                    to="/home"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
