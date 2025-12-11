import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Bienvenido al home</h1>
      <Link to={'/productos'}>Ir a productos</Link>
    </div>
  )
}
