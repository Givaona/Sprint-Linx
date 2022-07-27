import React from 'react';
import Titulo from '../Titulo/Titulo';
import S from '../NewsLetter/NewsLetter.module.css';
import Button from '../Button/Button';

const NewsLetter = () => {
  return (
    <div className={S.nl}>
        <Titulo props='Compartilhe a novidade'></Titulo>
        <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
       
        <form action="" className={S.form}>
          <div className={S.div}>
            <label htmlFor="">Nome do seu amigo:</label>
            <input type="text" className={S.input}/>
          </div>

          <div className={S.div}>
            <label htmlFor="">E-mail:</label>
            <input type="email" name="" id="" className={S.input} />
          </div>
        </form>
        <Button props="Enviar agora"></Button>
    </div>
  )
}

export default NewsLetter