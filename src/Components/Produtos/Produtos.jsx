import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';

const Produtos = ({dados}) => {
  const {id, name, image, oldPrice, price, description,} =dados;

  const [produto, setProduto] = useState();

  async function handleRequisicao() {
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${id}`
    const response = await fetch(url)
    const json = await response.json()

    const resposta = {
      id: json.id,
      foto: json.image,
      nome: json.name,
      precoAntigo: json.oldPrice,
      precoAtual: json.price
    }

    setProduto(resposta);

    
  }
  
  useEffect(()=>{
    handleRequisicao()
  },[])
  
  return (
    <div>
        <img src={!!produto ? produto.foto : ''} alt="" />
        <h3>{!!produto && produto.nome}</h3>
        <p>{!!produto && produto.descricao}</p>
        <small>De: <span>R${!!produto && produto.precoAntigo}</span></small>
        <p>Por <span>R${!!produto && produto.precoAtual}</span></p>
        <Button props='Enviar'></Button>
    </div>
  )
}

export default Produtos