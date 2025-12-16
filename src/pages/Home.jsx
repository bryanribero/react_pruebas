import { Link } from 'react-router-dom'
import useTheme from '../Context/useTheme'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <h1>Bienvenido al home</h1>
      <Link to={'/productos'}>Ir a productos</Link>
      <br />
      <br />
      <button onClick={toggleTheme}>Cambiar thema</button>
      <p>{theme}</p>
    </div>
  )
}
