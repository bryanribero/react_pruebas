import { useState } from 'react'

export default function FormularioUno() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function manejarSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    if (!email.trim()) {
      setErr('Ingrese un email')

      return
    } else if (!email.includes('@')) {
      setErr('Formato de email invalido')

      return
    }

    if (!pass.trim()) {
      setErr('Ingrese un password')

      return
    }

    setErr('')
    setEmail('')
    setPass('')
  }
  return (
    <div>
      <form onSubmit={(e) => manejarSubmit(e)}>
        <h1>Formulario</h1>

        {submitted &&
          (err ? (
            <p style={{ color: 'red' }}>{err}</p>
          ) : (
            <p style={{ color: 'green' }}>Ingresado con exito!</p>
          ))}

        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pass">Password </label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
