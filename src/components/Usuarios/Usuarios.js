import React, { useState, useEffect } from 'react'

import Usuario from '../Usuario/Usuario'

function Usuarios () {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {

        const usuarios = data.data.map(usuario => ({
          id: usuario.id,
          nome: usuario.first_name,
          sobrenome: usuario.last_name,
          email: usuario.email,
        }))

        setUsuarios(usuarios)
      })
  }, [])
    
  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if(response.ok) {
            console.log(response)
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }
  return (
    <>
      {usuarios.map(usuario => (
        <Usuario key={usuario.id}
          usuario={usuario}
          removerUsuario={ () => removerUsuario(usuario)}
        />
      ))}
    </>
  )
}

export default Usuarios