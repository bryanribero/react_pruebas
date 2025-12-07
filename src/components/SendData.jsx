import { useState } from 'react'

export default function SendData() {
  const [formData, setFormData] = useState({ nombre: '', edad: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    if (!formData.nombre.trim() || !formData.edad.trim()) {
      setError('Nombre y edad son obligatorios')
      setLoading(false)
      return
    }

    setTimeout(() => {
      ;(async () => {
        try {
          const res = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nombre: formData.nombre,
              edad: Number(formData.edad),
            }),
          })

          if (!res.ok) throw new Error(`Error del servidor: ${res.status}`)

          const data = await res.json()
          console.log('Respuesta backend:', data)
          setSuccess(true)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      })()
    }, 500)
  }

  return (
    <div>
      <h1>Formulario a la API</h1>
      <form onSubmit={handleSubmit}>
        {success && <p>Datos enviados correctamente!</p>}
        {error && <p>Error: {error}</p>}
        <label>Nombre</label>
        <input
          name="nombre"
          placeholder="Ingrese un nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <br />
        <label>Edad</label>
        <input
          name="edad"
          placeholder="Ingrese una edad"
          value={formData.edad}
          onChange={handleChange}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  )
}
