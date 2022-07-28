import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import S from '../Produtos/Produtos.module.css'

const Produtos = ({dados}) => {
  const {id, name, image, oldPrice, price, description,} =dados;

  
  return (
    <div className={S.cardProduct}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <small>De: <span>R${oldPrice}</span></small>
        <h4>Por <span>R${price}</span></h4>
        <Button props='Comprar'></Button>
    </div>
  )
}

export default Produtos