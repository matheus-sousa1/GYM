import React from 'react';
import man from '../../img/man.jpeg';
import enroll from '../../img/enroll.png';
import method from '../../img/method.mp4';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaYoutube, FaInstagram, FaTwitter   } from "react-icons/fa";
import "./main.css";

function Main() {
  return (
    <div className="container">
     <main>
        <h2 className="info-gym">
        Bem-vindo ao Gym, uma academia que está
        comprometida em transformar o seu corpo 
        e melhorar a sua saúde de maneira 
        abrangente e sustentável. Nossa academia
        é mais do que apenas um local para 
        exercícios, é um ambiente motivador e 
        acolhedor, projetado para ajudá-lo a 
        atingir seus objetivos de treinamento 
        físico de maneira eficaz e divertida. 
        </h2>
      <img src={man} alt="man"/>
     </main>
     <section className='enroll-content'>
     <h3 className="force">#FOCO</h3>
      <div className="enroll">
      <img src={enroll} alt="enroll-image" />
      <div className='enroll-text'>
        <h5>R$30,50</h5>
        <p>no primeiro mês</p>
      <Link className="button-enroll" to="plans">Matricule-se</Link>
      </div>
      </div>
     </section>
     <section className='gym-video'>
     <video width="900" controls>
      <source src={method} type="video/mp4"/>
     </video>
     <h4>Você vai aprender métodos de treino com profissionais capacitados</h4>
     
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