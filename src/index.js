import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//
//
// weird way for rendering
/*
import { render } from "react-dom"
import App from './App';

const rootElement = document.getElementById("root");
render(<App />, rootElement);
*/