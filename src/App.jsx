import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from './Components/Cadastro/Cadastro.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Produtos from './Components/Produtos/Produtos.jsx';
import "../styles/reset.css"
import SecaoProduto from './Components/SecaoProduto/SecaoProduto.jsx';
import NewsLetter from './Components/NewsLetter/NewsLetter.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Cadastro></Cadastro>
      <SecaoProduto></SecaoProduto>
      <NewsLetter></NewsLetter>
      <Footer/>
    </div>
  )
}

export default App
