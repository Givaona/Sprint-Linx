import React from 'react'
import Produtos from '../Produtos/Produtos';
import S from "../SecaoProduto/SecaoProduto.module.css";
import Titulo from '../Titulo/Titulo';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Button/Button';


const SecaoProduto = () => {

  const [produto, setProduto] = useState([]);

  async function handleRequisicao() {
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`
    const response = await fetch(url)
    const json = await response.json()

    // const resposta = {
    //   id: json.products.id,
    //   foto: json.image,
    //   nome: json.name,
    //   precoAntigo: json.oldPrice,
    //   precoAtual: json.price
    // }

    // []
    // array de objetos
    //[[array]]
    // [[atual], [novo]]
    // [[], [oito itens]] = [oito itens]
    // [[oito itens], [nova requisicao]] = [16 itens]

    setProduto([...produto ,...json.products]);
    console.log(!!produto && produto);
    
  }
  
  useEffect(()=>{
    handleRequisicao()
  },[])

  return (
    <div>
        <Titulo props='Sua seleção especial'/>
          {/* <Produtos></Produtos> */}
      <div className={S.sec}>
        <div className={S.conteiner}>
          {!!produto && produto.map((index)=>{
            return <Produtos dados={index}/>
          })}
          </div>
          {/* <Button props='Ainda ver mais produtos'></Button> */}
          <button onClick={()=>{handleRequisicao()}}>Ainda mais produtos aqui!</button>
      </div>
    </div>
  )
}

export default SecaoProduto