import React from 'react';
import {BrowserRouter } from "react-router-dom"
import "./App.scss"
import Layout from "./components/layout/layout"
import ReactTooltip from "react-tooltip"

const App=()=> {
  return (
    <BrowserRouter>
       < Layout/><ReactTooltip />
    </BrowserRouter>
  );
}

export default App;
