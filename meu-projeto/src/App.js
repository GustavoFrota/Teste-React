
import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {
const name = 'Gustavo'



  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name} </p>
      <HelloWorld />
    </div>
  );
}

export default App;
