import React from 'react'
import Button from '../Button/Button.jsx';
import S from './Header.module.css';

function Header() {
  return (

    <div>
      <p>uma seleção de produtos</p>
      <h1>Especial para você</h1>
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      <div className='botoes'>
        <Button>Conheça a Linx</Button>
        <Button>Ajude o algorítimo</Button>
        <Button>Seus Produtos</Button>
        <Button>Compartilhe</Button>
      </div>

    </div>
  )
}

export default Header