import React from 'react'
import S from "../SecaoProduto/SecaoProduto.module.css";
import Titulo from '../Titulo/Titulo';


const SecaoProduto = () => {
  return (
    <div className={S.conteiner}>
        <Titulo props='Sua seleção especial'/>
    </div>
  )
}

export default SecaoProduto