import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes'
import styled from 'styled-components';
import './index.css'

const Conteudo = styled.section`
  width: calc(100% - 310px);
  float: right;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Conteudo className='conteudo'>
      <Router />
    </Conteudo>
  </React.StrictMode>
);

