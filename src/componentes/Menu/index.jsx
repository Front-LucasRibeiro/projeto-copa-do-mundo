import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const [ativaMenu, setFechaMenu] = useState("");
  const localizacao = useLocation()

  const Navegacao = styled.nav`
    width: 310px;
    height: 100vh;
    position: fixed;
    background: #006494;
    padding: 14px 12px;
    box-shadow: -1px -1px 18px rgb(0, 0, 0, .5);
    box-sizing: border-box;
    left: 0;

    &.fecha-menu{
      left: -310px;
    }

    ul{
      list-style: none;
      padding: 0;
      margin: 38px 0 0;

      li{
        color: #fff;
        margin: 18px 0;
        font-family: 'Arial', sans-serif;

        a{
          color: #fff;
          text-decoration: none;
        }

        &.ativo{
          font-weight: bold;
        }
      }
    }

    .fechar{
      position: absolute;
      right: 0;
      font-weight: bold;
      font-size: 28px;
      padding: 6px 12px;
      top: 0;
      color: #fff;
      cursor: pointer;
    }
  `
  const rotas = [
    {
      label: "Fase de Grupos",
      to: "/"
    },
    {
      label: "Oitavas de Final",
      to: "/oitavas-de-final"
    },
    {
      label: "Quartas de Final",
      to: "/quartas-de-final"
    },
    {
      label: "Semifinal",
      to: "/semifinal"
    },
    {
      label: "Final",
      to: "/final"
    }
  ]


  const fechaMenu = () => {
    setFechaMenu('fecha-menu');
  }

  return (
    <header>
      <Navegacao className={ativaMenu}>
        <span className='fechar' onClick={ () => fechaMenu()}>&times;</span>
        <ul className="lista-menu">
          {rotas.map((rota,index) => {
            return(
              <li key={index} className={`${localizacao.pathname === rota.to ? "ativo": "" }`}>
                <Link to={rota.to}>
                  {rota.label}
                </Link>
              </li>
            )
          })}
        </ul>
        
      </Navegacao>
    </header>
  )
}

export default Menu