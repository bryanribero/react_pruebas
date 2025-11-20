import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')

  function manejarSubmit(e) {
    e.preventDefault()

    if (email.trim() === '') {
      setErr('Tienes que colocar un email')
      return
    } else if (!email.includes('@')) {
      setErr('El formato del email es incorrecto')
      return
    }

    if (pass.trim() === '') {
      setErr('Tienes que colocar una contraseña')
      return
    }

    setErr('')

    console.log(`Datos enviados: ${{ email, pass }}`)

    setEmail('')
    setPass('')
  }
  return (
    <div>
      <form onSubmit={manejarSubmit}>
        {err ? (
          <p style={{ color: 'red' }}>{err}</p>
        ) : (
          <p style={{ color: 'green' }}>Enviado con exito!</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <br />
        <br />
        <button type="submit"> Enviar</button>
      </form>
    </div>
  )
}
