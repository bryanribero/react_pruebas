import { useNavigate } from 'react-router-dom'
import useLogin from '../Context/useLogin'

export default function Login() {
  const { handlerUser, handlerPass, verifyLogin, isLogin, user, pass } = useLogin()
  const navigate = useNavigate()

  function handlerSubmit() {
    const success = verifyLogin(user, pass)

    if (success) {
      navigate('/')
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="user">Usuario</label>
      <input type="text" id="user" value={user} onChange={(e) => handlerUser(e)} />
      <br />
      <br />
      <label htmlFor="pass">Contraseña</label>
      <input type="password" id="pass" value={pass} onChange={(e) => handlerPass(e)} />

      <button onClick={handlerSubmit}>Ingresar</button>
    </div>
  )
}
