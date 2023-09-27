import React from 'react';
import imageAbout from '../../img/about.jpg';
import "./about.css";

function About() {
  return (
    <div className='container-about'>
      <div className='text'>
       <h1>Sobre nós</h1>
       <p>
       Na Academia GYM, nossa missão é mais do que apenas construir músculos. Estamos comprometidos em transformar vidas, promovendo saúde, bem-estar e autoestima. Há anos, temos sido o destino preferido por aqueles que desejam alcançar seus objetivos de condicionamento físico e adotar um estilo de vida mais ativo. Localizada no coração da cidade, nossa academia é muito mais do que apenas um espaço repleto de máquinas de exercícios. É um lugar onde os sonhos se tornam realidade, onde pessoas de todas as idades, tamanhos e níveis de encontrar se reúnem para se superar e se tornarem a melhor versão de si mesmas.
       </p>
      </div>
      <img src={imageAbout} />
      <footer>
      <h4>Todos os direitos reservados</h4>
      </footer>
    </div>
  )
}

export default About