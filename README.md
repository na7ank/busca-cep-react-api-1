# busca-cep
Uso de api com front em react para buscar informações de um cep.

## Início
- ``npx create-react-app buscador``

## Deletando arquivos que não irei usar e modificando scripts:
- src/App.css
- src/App.test.js
- src/logo.svg
- src/setupTests.js
- src/reportWebVitals.js
- buscador/.gitignore

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