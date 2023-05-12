import React from 'react';
import man from '../../img/man.jpeg';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaYoutube, FaInstagram, FaTwitter   } from "react-icons/fa";

function Main() {
  return (
    <div className='container'>
     <main>
      <h2>introdução</h2>
      <img src={man} alt="man"/>
     </main>
     <section className='enroll'>
      <Link to="plans">Matricule-se</Link>
     </section>
     <section className='gym-video'>
     <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4"/>
     </video>
     </section>
     <section className="services">
      <div className='service'>
        <img src=""/>
       <div>
        <h2>Nutrição</h2>
        <p>text</p>
       </div>
      </div>      
      <div className='service'>
       <div>
        <h2>Avaliação</h2>
        <p>text</p>
       </div>
        <img src=""/>
      </div>
      <div className='service'>
        <img src=""/>
       <div>
        <h2>pilates</h2>
        <p>text</p>
       </div>
      </div>
     </section>
     <section className="appointment">
      <img src=""/>
      <div class="text-appointment">
       <h3>Experimente!</h3>
       <p>lorem10</p>
       <Link to="appointment">Agendamento grátis</Link>
      </div>
    </section>
    <footer>
      <div className='social-media'>
        <FaFacebookSquare />
        <FaYoutube/>
        <FaInstagram/>
        <FaTwitter/>
      </div>
      <h4>Todos os direitos reservados</h4>
    </footer>
    </div>
  )
}

export default Main;