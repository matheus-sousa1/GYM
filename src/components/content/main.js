import React from 'react';
import man from '../../img/man.jpeg';
import enroll from '../../img/enroll.png';
import method from '../../img/method.mp4';
import avaliação from '../../img/avaliação.jpg';
import nutrição from '../../img/nutrição.jpg';
import tryIt from '../../img/experimente.jpg';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaYoutube, FaInstagram, FaTwitter   } from "react-icons/fa";
import Bounce from 'react-reveal/Bounce';
import "./main.css";

function Main() {
  return (
    <div className="container">
     <main>
      <Bounce left>
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
        </Bounce>
        <Bounce right>
      <img src={man} alt="man"/>
      </Bounce>
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
      <Bounce left>
      <div className='service'>
        <img src={nutrição}/>
       <div>
        <h2>Nutrição</h2>
        <p>
        reconhecemos a importância vital da nutrição como componente 
        essencial do sucesso no condicionamento físico e na busca por
        um estilo de vida saudável. Nossa abordagem à nutrição vai 
        além de contar calorias; trata-se de fornecer orientação 
        personalizada e conhecimento nutricional para maximizar seus
        resultados e promover o bem-estar geral.
        </p>
       </div>
      </div>
      </Bounce>     
      <Bounce right>
      <div className='service'>
       <div>
        <h2>Avaliação</h2>
        <p>
          vamos apresentar uma abordagem revolucionária para avaliação física:
           a Avaliação 360. Essa abordagem inovadora é projetada para 
           fornecer aos nossos membros uma visão abrangente e detalhada de
           sua condição física e bem-estar, abrangendo todos os aspectos 
           que criaram para uma vida saudável. A Avaliação 360 na  é conduzida
           por uma equipe de profissionais altamente treinados, incluindo
           personal trainers, fisioterapeutas e nutricionistas. 
           </p>
       </div>
        <img src={avaliação}/>
      </div>
      </Bounce>
     </section>
     <section className="appointment">
      <img src={tryIt}/>
      <div class="text-appointment">
       <h3>Experimente!</h3>
       <p>
        Você pode solicitar uma experiência com uma personal trailer
        para saber como irá funcionar seus treinos e se realmente está disposto 
        a entrar de vez nessa jornada que pode melhorar sua saúde e muito mais.
       </p>
       <Link className="btn-appointment" to="appointment">Agende uma experiência</Link>
      </div>
    </section>
    <footer>
      <div className='social-media'>
        <FaFacebookSquare className="icon" />
        <FaYoutube className="icon"/>
        <FaInstagram className="icon"/>
        <FaTwitter className="icon"/>
      </div>
      <h4>Todos os direitos reservados</h4>
    </footer>
    </div>
  )
}

export default Main;