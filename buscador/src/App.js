//import logo from './logo.svg';
//import './App.css';
import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">

      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP ..."/>
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 05590-140</h2>
        <span>Rua Teste Algum</span>
        <span>Complementos do CEP</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
