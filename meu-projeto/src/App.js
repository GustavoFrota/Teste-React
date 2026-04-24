
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';

function App() {

  const identidade = "Maria"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Roberto" />
      <SayMyName nome={identidade} />
    </div>
  )
}

export default App;
