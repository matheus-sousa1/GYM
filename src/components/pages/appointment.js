import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import "./appointment.css";

const createUserFormSchema = z.object({
  name: z.string()
  .nonempty('o e-mail é obrigatório')
  .email('o formato do e-mail está inválido'),
  email:z.string()
  .min(6, 'a senha precisa de no mínimo 6 caracteres'),
})

function Appointment() {
  const [outPut, setOutPut] = useState();
  const { register, handleSubmit, formState} = useForm(
   {
    resolver: zodResolver(createUserFormSchema)
   }
  );

  const createUser = (data) => {
    setOutPut(JSON.stringify(data, null, 2))
   console.log(data)
  }

  return (
    <div className="container-appointment">
      <div class="content-appointment">
      <div className='text-appointment'>
      <div className='title-appointment'>agendamento</div> 
      <h1>adicione seu E-mail que vamos entrar em contato com você para agendar seu atendimento</h1>
      </div>
      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" {...register('name')} />
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" {...register('email')} />
        <button type="submit">Enviar</button>
      </form>  
      <pre>{outPut}</pre>
      </div>
      <footer>
      <h4>Todos os direitos reservados</h4>
      </footer>
    </div>
  )
}

export default Appointment;