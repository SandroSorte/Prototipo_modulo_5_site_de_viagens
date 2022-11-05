import React from 'react'
import Cards from '../componentes/Cards'
import unicornio from '../componentes/imagens/unicornio.png'


export default function Home() {
  return (
    <div>
      <div className='Container'>
        <div className='row'>
          <h2>Próximas Viagens >>></h2>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
          <div className='col-md-3'>
            <Cards
              foto={unicornio}
              info='unicornio'
              titulo='Atlântida'
              data='15/12/2022'
              valor='1.7500'
              descricao='Avião + Hotel'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
