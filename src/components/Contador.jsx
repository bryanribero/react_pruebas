import { useState } from 'react'
import style from './contador.module.css'

export default function Contador() {
  const [contador, setContador] = useState(1)
  return (
    <div
      className={style.divContador}
      onClick={() => setContador(contador + 1)}
    >
      Clicks: {contador}
    </div>
  )
}
