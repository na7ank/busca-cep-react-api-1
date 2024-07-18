//import logo from './logo.svg';
//import './App.css';
import { FiSearch } from 'react-icons/fi'
import {useState} from 'react'
import api from './services/api'
import './styles.css'

function App() {

  const [input, setInput] = useState('')

  function formatCEP(txt){
    let cep = txt.replace(/\D/g, '');
    if (cep.length > 8) {
        cep = cep.slice(0, 8);
    }
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})/, '$1-');
    }
    return cep;
  }

  function handleInputChange(event) {
    const formattedValue = formatCEP(event.target.value);
    setInput(formattedValue);
  }

  async function handleSearch(){
    if (input === ''){
      alert("Preecnha algum CEP !")
      return
    }
    try{
      const response = await api.get(`${input.replace('-','')}/json`)
      console.log(response.data)
    }catch{
      alert("Ops ... Erro ao buscar !")
      setInput("")
    }
  }

  return (
    <div className="container">

      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text" 
          placeholder="Digite o CEP ..." 
          value={input}
          onChange={handleInputChange}
        />
        <button className="buttonSearch" onClick={handleSearch}>
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
