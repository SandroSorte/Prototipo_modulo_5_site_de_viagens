import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

  const [clientes, setClientes] = useState([]);

  const listarClientes = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/cliente/clientes")
        .then((response) => {
          setClientes(response.data)
        })

    } catch (erro) {
      alert(erro.message);
    }
  };

  useEffect(() => {
    listarClientes();
  }, []);

  const { id_cli } = useParams();

  const deleteCliente = async (id_cli) => {
    try {
      await axios.delete(`http://localhost:8080/api/cliente/${id_cli}`)
        .then((response) => {
          alert('Usuário excluido.')
          listarClientes();
        })
    } catch (erro) {
      alert(erro.message)
    }
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Email</th>
              <th scope="col">-</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, key) => (
              <tr>
                <th scope="row" key={key}>{key + 1}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>
                  <Link to={`/ver/${cliente.id_cli}`} className="btn btn-outline-success mx-2">
                    Ver
                  </Link>
                  <Link to={`/editar/${cliente.id_cli}`} className="btn btn-primary mx-2">
                    Editar
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteCliente(cliente.id_cli)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
