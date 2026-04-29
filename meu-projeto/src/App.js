
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import List from './Components/List';
import Evento from './Components/Evento';
import Form from './Components/Form';
import Condicional from './Components/Condicional';
import OutraLista from './Components/OutraLista';

function App() {

  const identidade = "Maria"
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Roberto" />
      <SayMyName nome={identidade} />
      <Pessoa nome="Gustavo" idade="18" profissao="Programador" foto="htpps://via.placeholder.com/150" />
      <List />
      <Evento />
      <Form />
      <Condicional />
      <OutraLista itens={meusItens} />
    </div>
  )
}

export default App;
