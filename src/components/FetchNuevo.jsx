import { useEffect, useState } from 'react'

export default function FetchNuevo() {
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const res = await fetch('http://localhost:3000/usuarios')
        const data = await res.json()

        setUsuario(data.content)
      } catch (err) {
        console.error(`Error al cargar el fetch: ${err}`)
      }
    }

    getUsuarios()
  }, [])

  const deleteUsuario = (id) => {
    setUsuario((prev) => prev.filter((user) => user._id !== id))
  }
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {usuario.map((e) => (
          <li onClick={() => deleteUsuario(e._id)} key={e._id}>
            {e.nombre}
          </li>
        ))}
      </ul>
    </div>
  )
}
