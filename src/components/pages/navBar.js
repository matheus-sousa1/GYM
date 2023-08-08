import React from 'react'
import {Link } from 'react-router-dom';
import "./navBar.css";

function NavBar() {
  return (
    <header>
      <h1>
        Gym
      </h1>
      <nav>
      <Link className="link" to="appointment">Agendamento</Link>
      <Link className="link" to="activities">Atividades</Link>
      <Link className="link" to="about">Sobre</Link>
      <Link className="link" to="plans">Planos</Link>
      </nav>
    </header>
  )
}

export default NavBar;