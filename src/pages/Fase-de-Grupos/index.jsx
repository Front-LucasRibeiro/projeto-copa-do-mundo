import Grupo from '../../componentes/Grupo';
import styled from 'styled-components';

const Titulo = styled.h2`
  text-align: center;
  font-family: "Arial", sans-serif;
  margin: 0 0 38px;
  padding-top: 28px;
`



export default function FaseGrupos() {
  return(
    <section>
      <Titulo>Copa do Mundo 2022 - Fase de Grupos</Titulo>
      <Grupo />
    </section>
  )
}