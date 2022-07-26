import React from 'react'
import Button from '../Button/Button';

const Produtos = ({dados}) => {
    const { id, nome, foto, precoAntigo, precoAtual, descricao } = dados;
  return (
    <div>
        <img src={foto} alt="" />
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <small>De: <span>R${precoAntigo}</span></small>
        <p>Por <span>R${precoAtual}</span></p>
        <Button/>
    </div>
  )
}

export default Produtos