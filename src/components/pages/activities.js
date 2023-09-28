import React from 'react';
import yoga from "../../img/yoga.jpg";
import pilates from "../../img/pilates.png";
import abs from "../../img/abs.jpg";
import ritmos from "../../img/ritmos.jpg";
import "./activities.css";

function Activities() {
  return (
    <div className='content-activities'>
      <div className='text-activities'>
      <p className='initial-text'>Conheça todas as atividades que a Gym Center oferece para você.</p>
      </div>
      <div className='activities'>
       <div className='activity'>
        <img src={pilates} alt="pilates"/>
        <h2>Pilates</h2>
        <p>
         Essa atividade ajuda a melhorar a estabilidade, a resistência e
         a flexibilidade, ao mesmo tempo em que reduz o risco de lesões.
        </p>
       </div>
       <div className='activity'>
        <img src={yoga} alt="yoga"/>
        <h2>Yoga</h2>
        <p>
         O yoga é a realização de posturas corporais. Essas posturas são projetadas para fortalecer, 
         alongar e flexibilizar o corpo, além de melhorar a postura e a consciência corporal.
        </p>
       </div>
       <div className='activity'>
        <img src={ritmos} alt="ritmos"/>
        <h2>Ritmos</h2>
        <p>
          aulas de dança descontraídas e animadas são uma excelente forma de exercício
          físico, pois combinam movimentos coreografados com ritmos contagiantes. 
        </p>
       </div>
       <div className='activity'>
        <img src={abs} alt="abs"/>
        <h2>Abs</h2>
        <p>
          Serve para o fortalecimento e a definição da musculatura abdominal.
          Elaborada para trabalhar a musculatura em alta intensidade.
        </p>
       </div>
      </div>
      <footer>
      <h4>Todos os direitos reservados</h4>
      </footer>
    </div>
  )
}

export default Activities;