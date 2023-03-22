import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// Para registrar os resultados (por exemplo: relatáriowebvitals (console.log))
// ou envie para um terminal de análise.Saiba mais: https://bit.ly/cra-vitals
reportWebVitals();
