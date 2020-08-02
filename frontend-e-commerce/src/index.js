import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios"
import ReactTooltip from "react-tooltip"

axios.defaults.baseURL="http://localhost:8082/api"

//let authorization;


ReactDOM.render(
  <React.StrictMode>
    <App /><ReactTooltip />
  </React.StrictMode>,
  document.getElementById('root')
);
