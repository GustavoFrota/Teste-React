
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';

function App() {

  const identidade = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Roberto" />
      <SayMyName nome={identidade} />
      <Pessoa nome="Gustavo" idade="18" profissao="Programador" foto="htpps://via.placeholder.com/150" />
    </div>
  )
}

export default App;
