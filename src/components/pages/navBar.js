import React from 'react'
import {Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div>
        Gym
      </div>
      <nav>
      <Link to="appointment">Agendamento</Link>
      <Link to="activities">Atividades</Link>
      <Link to="about">Sobre</Link>
      <Link to="plans">Planos</Link>
      </nav>
    </header>
  )
}

export default NavBar;