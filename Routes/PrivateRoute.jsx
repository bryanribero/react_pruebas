import { Navigate } from 'react-router-dom'
import useLogin from '../src/Context/useLogin'

export default function PrivateRoute({ children }) {
  const { isLogin } = useLogin()

  return isLogin ? children : <Navigate to="/login" />
}
