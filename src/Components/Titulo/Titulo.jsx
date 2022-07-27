import React from 'react'
import S from '../Titulo/Titulo.module.css'

const Titulo = ({props}) => {
  return (
    <div className={S.conteiner}>
        <div className={S.box}></div>
        <h3>{props}</h3>
        <div className={S.box}></div>
    </div>
  )
}

export default Titulo