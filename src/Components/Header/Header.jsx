import React from 'react'
import Button from '../Button/Button.jsx';
import S from './Header.module.css';

function Header() {
  return (

    <div className={S.conteiner}>
      <p>uma seleção de produtos</p>
      <h1>especial para você</h1>
      <p id={S.h}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      <div className={S.botoes}>
        <Button props='Conheça a Linx'></Button>
        <Button props='Ajude o algorítimo'></Button>
        <Button props='Seus Produtos'></Button>
        <Button props='Compartilhe'></Button>
      </div>

    </div>
  )
}

export default Header