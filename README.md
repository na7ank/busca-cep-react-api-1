# busca-cep

Uso de api com front em react para buscar informações de um cep.
Tutorial: https://www.youtube.com/watch?v=oy4cbqE1_qc

## Início
- ``npx create-react-app buscador``
- ``buscador/npm start``

## Deletando arquivos que não irei usar e modificando scripts:
- src/App.css
- src/App.test.js
- src/logo.svg
- src/setupTests.js
- src/reportWebVitals.js
- buscador/.gitignore
- buscador/README.md

Modificando ``index.js``:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
```

Modificando ``App.js``:

```javascript
// App.js

//import logo from './logo.svg';
//import './App.css';
function App() {
  return (
    <div className="App">
      <h1>TESTE PROJETO</h1>
    </div>
  );
}

export default App;
```

Modificando ``index.css``. Deixamos apenas o estilo geral:

```css
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

## Estruturando novo ``App.js`` e estilos ``styles.css``

Para trabalhar com ícones https://react-icons.github.io/react-icons/ :

- ``npm install react-icons``

Criar ``styles.css``:

```css
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#121212, #212B46);
}

.title {
    font-size: 85px;
    color: #FFF;
    animation: flipTitle 2s;
}

@keyframes flipTitle {
    from{
        transform: rotateX(90deg);
    }
    to{
        transform: rotateX(0deg)
    }
}

.containerInput {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
}

.containerInput input {
    background-color: transparent;
    border: 0;
    font-size: 20px;
    color: #FFF;
    outline: none;
    margin-right: 8px;
}

.containerInput input::placeholder {
    color: #F1F1F1;
}

.buttonSearch {
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;
}

.buttonSearch:hover {
    transform: scale(1.2);
}

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFF;
    width: 500px;
    border-radius: 8px;
    color: #1d1f25;
}

.main h2 {
    margin: 16px 0;
    font-size: 39px;
}

.main span {
    margin-bottom: 16px;
    font-weight: bold;
}

/* Para Responsividade. Melhoria de visualização*/
@media (max-width: 620px){
    .title {
        font-size:  60px;
    }

    .main {
        width: 80%;
    }

    .main h2 {
        font-size:  28px;
        min-height: 250px;
    }
}
```

Estrutura inicial ``App.js``:

```javascript
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
```

## Trabalhando com dados Dinâmicos - Explicação **useState**

O useState é um hook fundamental no React que permite adicionar estado a componentes funcionais. Ele é usado para gerenciar o estado de um componente, ou seja, as informações que mudam ao longo do tempo durante a execução da aplicação.

- ``import {useState} from 'react'``

```javascript
...
import {useState} from 'react'

function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    alert(`Input: ${input}`)
  }
  ...
```

```html
<input 
  type="text" 
  placeholder="Digite o CEP ..." 
  value={input}
  onChange={(event) => setInput(event.target.value)}
/>

<button className="buttonSearch" onClick={handleSearch}>
  <FiSearch size={25} color="#FFF"/>
</button>
```

- ``value={input}``: Liga o valor do campo de entrada ao estado input. Isso significa que o valor exibido no campo será sempre igual ao valor do estado input.
- ``onChange={(event) => setInput(event.target.value)}``: Define um manipulador de eventos para o evento ``onChange``. Cada vez que o valor do campo de entrada muda (quando o usuário digita algo), a função ``setInput`` é chamada com o novo valor ``event.target.value``, atualizando assim o estado ``input``.

## Preparando para requisições API

Instalamos o módulo axios
- ``npm install axios``

Criamos o diretório services dentro de src ``busca-cep/buscador/src/services`` e o arquivo `/services/api.js`

```javascript
// api.js
import axios from "axios"

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;
```
Importamos o script em ``app.js``
```javascript
import api from './services/api'
```

Modificação da função ``handleSearch()``
```javascript
// Primeira forma
function handleSearch(){
  alert(`Input: ${input}`)
}

// Forma completa
async function handleSearch(){
  if (input === ''){
    alert("Preecnha algum CEP !")
    return
  }
  try{
    const response = await api.get(`${input}/json`)
    console.log(response.data)
  }catch{
    alert("Ops ... Erro ao buscar !")
    setInput("")
  }
}
```

## Resumo até aqui:
- ``useState``: Gerencia o estado do componente App, permitindo que o valor do campo de entrada (input) seja atualizado e acessado.
- ``handleSearch()``: Usa o valor do estado input para realizar uma busca na API, exibindo mensagens de erro ou resultados conforme necessário.
- ``<input>``: Permite ao usuário digitar o CEP e atualiza o estado input com cada mudança, garantindo que o valor do campo de entrada esteja sempre sincronizado com o estado do componente.

## Auto-Formatação do input cep:

Criamos as funções para modificar o texto digitado dentro do input:
```javascript
//utils/funcoes.js  
export function formatCEP(txt){
  let cep = txt.replace(/\D/g, '');
  if (cep.length > 8) {
    cep = cep.slice(0, 8);
  }
  if (cep.length > 5) {
    cep = cep.replace(/^(\d{5})/, '$1-');
  }
  return cep;
}

```
Alteramos ``App.js``:
```javascript
import {formatCEP} from './utils/funcoes.js'
```
```javascript
function handleInputChange(event) {
  const formattedValue = formatCEP(event.target.value);
  setInput(formattedValue);
}
```
Alteração do input ``onChange={handleInputChange}``
```html
<input 
  type="text" 
  placeholder="Digite o CEP ..." 
  value={input}
  onChange={handleInputChange}
/>
```

## Criando outro useState para guardar os dados da requisição:

Definimos o novo useSate `const [cep, setCep]`
```javascript
// useState
const [input, setInput] = useState('')
const [cep, setCep] = useState({})
```

```javascript
// useState
const [input, setInput] = useState('')
const [cep, setCep] = useState({})
```
Ajustamos a funcao assíncrona para enviar os dados da requisição para o novo useSate:
```javascript
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
```

## Display dos dados retornados pela requisção:
Ajustando o display dos valores recuperados:
```javascript
<main className="main">
  <h2>CEP: {cep.cep}</h2>
  <span>{cep.logradouro}</span>
  <span>{cep.complemento}</span>
  <span>{cep.bairro}</span>
  <span>{cep.localidade} - {cep.uf}</span>
</main>
```

Uma melhoria é mostrar o bloco main com o display de dados somente se houver algo dentro de cep. Para isso podemos usar a condicional `Object.keys(cep).length > 0`:
```javascript
{Object.keys(cep).length > 0 && (
  <main className="main">
    <h2>CEP: {cep.cep}</h2>
    <span>{cep.logradouro}</span>
    <span>{cep.complemento}</span>
    <span>{cep.bairro}</span>
    <span>{cep.localidade} - {cep.uf}</span>
  </main>
)}
```