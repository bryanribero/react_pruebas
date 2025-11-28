import { useState, useEffect } from 'react'

export default function Fetch() {
  const [alimento, setAlimento] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/producto?include=comerciante&id_comerciante=2'
        )

        const data = await response.json()

        setAlimento(data.producto)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    getProduct()
  }, [])

  return (
    <div>
      <h1>Fetch de productos</h1>
      <div>
        {alimento.map((e) => (
          <p key={e.id_producto}>{e.nombre_producto}</p>
        ))}
      </div>
    </div>
  )
}
