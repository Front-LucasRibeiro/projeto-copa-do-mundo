import './App.css';
import Grupo from './componentes/Grupo';
import styled from 'styled-components';

const Titulo = styled.h2`
  text-align: center;
  font-family: "Arial", sans-serif;
  margin-bottom: 38px;
`

function App() {
  return (
    <div className="App">
      <Titulo>Copa do Mundo 2022</Titulo>
      <Grupo />
    </div>
  );
}

export default App;
