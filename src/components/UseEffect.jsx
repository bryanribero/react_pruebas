import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`Contador actual: ${contador}`)
  }, [contador])
  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>{contador}</p>
    </div>
  )
}
