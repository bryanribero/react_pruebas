import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Productos() {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await fetch('http://localhost:3000/producto')
        const data = await res.json()

        setProductos(data.data)
      } catch (err) {
        console.error(`Error al cargar el fetch: ${err.message}`)
      }
    }

    obtenerProductos()
  }, [])

  const navegar = (e) => {
    navigate(`/productos/${e.id_producto}`)
  }

  return (
    <div>
      <Link
        to={'/'}
        style={{ position: 'absolute', left: '40px', top: '20px' }}
      >
        Home
      </Link>
      <h1>Productos</h1>
      <br />
      <br />
      <ul>
        {productos.map((e) => (
          <li
            key={e.id_producto}
            style={{ cursor: 'pointer' }}
            onClick={() => navegar(e)}
          >
            {e.nombre_producto}
          </li>
        ))}
      </ul>
    </div>
  )
}
