import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Produtos from './Components/Produtos/Produtos.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Produtos></Produtos>
      <Footer/>
    </div>
  )
}

export default App
