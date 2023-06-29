import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

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
    <div>
      <h1>appointment</h1> 
      <h3>adicione seu E-mail que vamos entrar em contato com você para agendar seu atendimento</h3>
      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="">Nome</label>
        <input type="text" {...register('name')} />
        <label htmlFor="">E-mail</label>
        <input type="email" {...register('email')} />
        <button type="submit">Enviar</button>
      </form>  
      <pre>{outPut}</pre>
    </div>
  )
}

export default Appointment;