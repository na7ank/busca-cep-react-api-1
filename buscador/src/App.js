//import logo from './logo.svg';
//import './App.css';
import { FiSearch } from 'react-icons/fi'
import {useState} from 'react'
import {formatCEP} from './utils/funcoes.js'
import api from './services/api'
import './styles.css'

function App() {
  // useState
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

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
      setCep(response.data)
      setInput("")

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
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
