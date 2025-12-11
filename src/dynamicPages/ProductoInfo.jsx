import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductoInfo() {
  const [productoInfo, setProductoInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const obtenerProductoId = async () => {
      const res = await fetch(`http://localhost:3000/producto/${id}`)
      const producto = await res.json()

      setProductoInfo(producto.producto[0])
      setLoading(false)
    }

    obtenerProductoId()
  }, [id])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>Id: {id}</h1>
      <Link
        to={'/productos'}
        style={{ position: 'absolute', left: '40px', top: '20px' }}
      >
        Productos
      </Link>
      <br />
      <br />
      <h2>{productoInfo.nombre_producto}</h2>
      <br />
      <h2>Precio: {productoInfo.precio_producto} $</h2>
      <br />
      <h2>Stock: {productoInfo.stock_producto}</h2>
    </div>
  )
}
