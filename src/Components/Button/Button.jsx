import React from 'react'
import S from "../Button/Button.module.css";

function Button(props) {
  return (
    <div>
        <button>{props.nome}</button>
    </div>
  )
}

export default Button

