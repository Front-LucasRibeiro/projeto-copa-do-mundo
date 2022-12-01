import React, { useState } from 'react';
import styled from 'styled-components'
import dados from '../../Dados/dados.json'

const Titulo = styled.h3`
  color: #000;
  font-family: "Arial", sans-serif;
  margin-bottom: 8px;
`

const HeaderTable = styled.tr`
  color: #000;
  font-family: "Arial", sans-serif;
  font-size: 14px;
`

const Table = styled.table`
  color: #000;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  padding: 12px 8px;
  margin-bottom: 38px;

  th{
    color: #666;
    text-align: left;
    padding-bottom: 8px;
    border-bottom: 1px solid #ddd;
  }

  tr{
    &:last-child{
      td{
        border-bottom: 0;
        padding-bottom: 0;
      }
    }
  }

  td{
    padding-bottom: 8px;
    border-bottom: 1px solid #ddd;
  }

  ul{
    display: flex;
    padding: 0;
    list-style: none;

    li{
      margin-right: 8px;
    }
  }
`

const Container = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
`


const grupos = dados

const Grupo = () => {
  const [data, setData] = useState(grupos)

  return (
    <>
      <Container>

        <div className='grupo'>
          {data.grupo.map(grupo => {
            return (
              <>
                <Titulo>Grupo {grupo.nome}</Titulo>
                <Table>
                  <HeaderTable>
                    <th>Equipe</th>
                    <th>Pts</th>
                    <th>PJ</th>
                    <th>VIT</th>
                    <th>E</th>
                    <th>DER</th>
                    <th>GM</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>Últimas 5</th>
                  </HeaderTable>
                  {
                    grupo.times.map((time, index) => {
                      return (
                        <tr>
                          <td>
                            <span className='posicao'>{index + 1}</span>
                            <img src={time.bandeira} alt={time.equipe} />
                            <span className='nome'>{time.equipe}</span>
                          </td>
                          <td>{time.pontos}</td>
                          <td>{time.pj}</td>
                          <td>{time.vit}</td>
                          <td>{time.e}</td>
                          <td>{time.der}</td>
                          <td>{time.gm}</td>
                          <td>{time.gc}</td>
                          <td>{time.sg}</td>
                          <td>
                            <ul>
                              <li>{time.ultimas5[0]}</li>
                              <li>{time.ultimas5[1]}</li>
                              <li>{time.ultimas5[2]}</li>
                              <li>{time.ultimas5[3]}</li>
                              <li>{time.ultimas5[4]}</li>
                            </ul>
                          </td>
                        </tr>
                      )
                    })
                  }
                </Table>
              </>
            )
          })}
        </div>

      </Container>
    </>
  )
}

export default Grupo;
