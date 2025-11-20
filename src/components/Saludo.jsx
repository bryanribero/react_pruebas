import { useState } from 'react'

export const Saludo = ({ texto }) => {
  const [saludo, setSaludo] = useState(true)
  return (
    <div>
      <h1>{texto}</h1>
      <p>{saludo ? 'Hola' : 'Adios'}</p>
      <button onClick={() => setSaludo(!saludo)}>
        {saludo ? 'Despedirte' : 'Saludar'}
      </button>
    </div>
  )
}
