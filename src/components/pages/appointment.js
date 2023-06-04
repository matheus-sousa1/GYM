import React from 'react'

function Appointment() {
  return (
    <div>
      <h1>appointment</h1> 
      <form action="">
        <label htmlFor="">Nome</label>
        <input type="text" name="nome" />
        <label htmlFor="">E-mail</label>
        <input type="email" name="email" />
        <input type="date" />
        <select>
          <option>Manhã</option>
          <option>Tarde</option>
          <option>Noite</option>
        </select>
        <textarea></textarea>
        <button type="submit">Enviar</button>
      </form>  
    </div>
  )
}

export default Appointment