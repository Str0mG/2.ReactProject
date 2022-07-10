import React from 'react'
import { Formik, useField } from 'formik';
import * as yup from 'yup';

import './AdicionarUsuario.css'


const Campo = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <div className="Coluna">
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        
      />
      {meta.error && meta.touched ? (<div className="invalid-feedback">{meta.error}</div>) : null}

    </div>
  )
}

function AdicionarUsuario() {
  
  const onSubmitHandler = (values,{resetForm} ) => {
    console.log(values)
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        resetForm();
        alert('Usuário adicionado com sucesso :)')
        
      }
    })
    
  }
  
  const esquema = yup.object(
    {
      nome: yup.string()
        .required('O nome é obrigatório')
        .min(3, 'Nome muito curto')
        .max(30, 'Nome muito longo'),
      email: yup.string()
        .required('O email é obrigatório')
        .email('Email inválido'),
      sobrenome: yup.string()
        .required('O sobrenome é obrigatório')
        .min(3, 'Sobrenome muito curto')
        .max(30, 'Sobrenome muito longo'),
    });


  return (
    <div className="AdicionarUsuario">
      <h2>Adicionar Usuário</h2>
      <Formik
        initialValues={{nome:'', sobrenome:'', email:''}}
        validationSchema={esquema}
        onSubmit={onSubmitHandler}
        >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
              <div className="Linha">
                <Campo id="nome" name="nome" type="text" label="Nome"/>
                <Campo id="sobrenome" name="sobrenome" type="text" label="Sobrenome" />
              </div>
              <div className="Linha">
                <Campo id="email" name="email" type="email" label="Email"/>
              </div>
              <button type="submit">Adicionar</button>
          </form>)}
      </Formik>
    </div>
  )
  
}

export default AdicionarUsuario