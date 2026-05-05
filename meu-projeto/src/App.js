
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import List from './Components/List';
import Evento from './Components/Evento';
import Form from './Components/Form';
import Condicional from './Components/Condicional';
import OutraLista from './Components/OutraLista';
import { useState } from 'react';
import SeuNome from './Components/SeuNome';
import Saudacao from './Components/Saudacao';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Empresa from './Pages/Empresa';
import styles from './Pages/Navbar.module.css'

function App() {

  const identidade = "Maria"
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Roberto" />
      <SayMyName nome={identidade} />
      <Pessoa nome="Gustavo" idade="18" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
      <Evento />
      <Form />
      <Condicional />
      <OutraLista itens={meusItens} />
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
      <Router>
        <ul className={styles.list}>
          <li className={styles.item}> <Link to="/">Home</Link></li>
          <li className={styles.item}> <Link to="/empresa">Empresa</Link></li>
          <li className={styles.item}> <Link to="/contato">Contato</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/empresa' element={<Empresa />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
