import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({imagem, info, titulo, data, valor, periodo,descricao,}) {
  return (
    <div className='container'>
      <div className='card' style={{width: "18rem"}}>
        <img className="card-img-top" src={{imagem}} alt={info}></img>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{data}</p>
          <p className="card-text"> Valor por pessoa: {valor}</p>
          <p className="card-text">{periodo}</p>
          <p className="card-text">{descricao}</p>
          <Link to='./Login' className="btn btn-primary">Comprar</Link>
        </div>
      </div>
    </div>
  )
}
