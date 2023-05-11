import React from 'react'
import {Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div>
        Gym
      </div>
      <nav>
      <Link to="appointment">Appointment</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About</Link>
      <Link to="plans">Plans</Link>
      </nav>
    </header>
  )
}

export default NavBar;