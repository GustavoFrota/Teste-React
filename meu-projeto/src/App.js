
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import List from './Components/List';

function App() {

  const identidade = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Roberto" />
      <SayMyName nome={identidade} />
      <Pessoa nome="Gustavo" idade="18" profissao="Programador" foto="htpps://via.placeholder.com/150" />
      <List />
    </div>
  )
}

export default App;
