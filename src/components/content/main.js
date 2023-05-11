import React from 'react';
import man from '../../img/man.jpeg';
//import Plans from "../pages/plans";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className='container'>
     <main>
      <h3>introdução</h3>
      <img src={man} alt="man"/>
     </main>
     <section className='enroll'>
      <Link to="plans">Matricule-se</Link>
     </section>
    </div>
  )
}

export default Main;