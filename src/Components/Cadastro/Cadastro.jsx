import React from 'react'
import Button from '../Button/Button'
import S from "../Cadastro/Cadastro.module.css";

const Cadastro = () => {
  return (
    <div className={S.conteiner}>
      <div className={S.text}>
        <big>Ajude o algorítimo a ser mais certeiro</big>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis pariatur harum
          voluptatum dolorum magnam. Deleniti ratione cupiditate quia beatae totam! Expedita
          facere aliquid provident, eaque laborum modi soluta dicta corrupti!
          <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil,
          nobis quam illum adipisci magnam facere doloribus veniam beatae animi nemo, sed minus
          ea optio, corrupti excepturi amet vel nesciunt!</p>
      </div>
      <form action="" className={S.formCad}>
        <label htmlFor="">Seu nome:</label>
        <input type="text" className={S.input} />

        <label htmlFor="">E-mail:</label>
        <input type="email" name="" id="" className={S.input} />

        <label htmlFor="">CPF:</label>
        <input type="number" name="" id="" className={S.input}/>

        <section className={S.gen}>
          <input type="radio" name="genero" id="" />
          <label htmlFor="">Masculino</label>

          <input type="radio" name="genero" id="" />
          <label htmlFor="">Feminino</label>
        </section>

        <Button props="Enviar" id={S.btn}></Button>

      </form>
    </div>
  )
}

export default Cadastro