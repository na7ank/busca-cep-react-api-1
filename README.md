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

Estrutura ``App.js``:

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

## Trabalhando com dados Dinâmicos - **useState**

O useState é um hook fundamental no React que permite adicionar estado a componentes funcionais. Ele é usado para gerenciar o estado de um componente, ou seja, as informações que mudam ao longo do tempo durante a execução da aplicação.

- import {useState} from 'react'

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

## Preparando para requisições API

Instalamos o módulo axios
- ``npm install axios``

Criamos o diretório services dentro de src ``busca-cep/buscador/src/services`` e o arquivo `/services/api.js`
