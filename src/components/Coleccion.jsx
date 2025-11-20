import { useState } from 'react'

export default function Coleccion() {
  const [usuarios] = useState([
    { id: 1, nombre: 'Jose' },
    { id: 2, nombre: 'Pedro' },
  ])

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ol>
        {usuarios.map((e) => (
          <li key={e.id}>{e.nombre}</li>
        ))}
      </ol>
    </div>
  )
}
