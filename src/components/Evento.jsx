import { useState } from 'react'

export default function Evento() {
  const [texto, setTexto] = useState('')

  const captarTexto = (e) => {
    setTexto(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Escriba un texto"
        onChange={captarTexto}
      />
      <p>{texto}</p>
    </div>
  )
}
