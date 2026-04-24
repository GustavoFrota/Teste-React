
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';

function App() {

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gustavo" />
    </div>
  )
}

export default App;
