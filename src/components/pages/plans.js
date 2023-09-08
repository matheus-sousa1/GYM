import React from 'react';
import { CgGym } from "react-icons/cg";
import "./plans.css"


function Plans() {
  return (
    <div className='container-plans'>
      <CgGym className="icon-gym" />
      <div className='plans'>
      <div className='plan'>
       <h2>Plano Básico</h2>
       <p>Mensalidade</p>
       <ul>
        <li>R$ 55,50 após o 1º mês</li>
        <li>R$ 80,50 após o 4º mês</li>
       </ul>
       <button>Assine já</button>
      </div>
      <div className='plan'>
       <h2>Plano Premium</h2>
       <p>Mensalidade</p>
       <ul>
        <li>R$ 75,50 após o 1º mês</li>
        <li>R$ 105,50 após o 4º mês</li>
       </ul>
       <button>Assine já</button>
      </div>
      <div className='plan'>
       <h2>Plano Business</h2>
       <p>Mensalidade</p>
       <ul>
        <li>R$ 90,50 após o 1º mês</li>
        <li>R$ 125,50 após o 4º mês</li>
       </ul>
       <button>Assine já</button>
      </div>
      </div>
      <footer>
      <h4>Todos os direitos reservados</h4>
      </footer>
    </div>
  )
}

export default Plans