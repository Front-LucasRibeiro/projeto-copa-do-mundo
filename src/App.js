import './App.css';
import Grupo from './componentes/Grupo';
import styled from 'styled-components';
import Menu from './componentes/Menu';

const Titulo = styled.h2`
  text-align: center;
  font-family: "Arial", sans-serif;
  margin: 0 0 38px;
  padding-top: 28px;
`

const Conteudo = styled.section`
  width: calc(100% - 310px);
  float: right;
`

function App() {
  return (
    <div className="App">
      <Menu />
      <Conteudo className='conteudo'>
        <Titulo>Copa do Mundo 2022</Titulo>
        <Grupo />
      </Conteudo>
    </div>
  );
}

export default App;
