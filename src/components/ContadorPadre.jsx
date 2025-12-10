import { useState } from 'react'
import ContadorHijo from './ContadorHijo'

export default function ContadorPadre() {
  const [contador, setContador] = useState(0)

  function hadleIncrement() {
    setContador(contador + 1)
  }
  return (
    <div>
      <ContadorHijo value={contador} onClick={hadleIncrement} />
    </div>
  )
}
