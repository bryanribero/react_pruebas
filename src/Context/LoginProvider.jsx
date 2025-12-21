import { useState } from 'react'
import { LoginContext } from './loginContext'

export default function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handlerUser(e) {
    setUser(e.target.value)
  }

  function handlerPass(e) {
    setPass(e.target.value)
  }

  function verifyLogin(userAcount, passAcount) {
    const success = userAcount.trim().toUpperCase() === 'ADMIN' && passAcount === '1234'

    if (!isLogin) {
      setPass('')
      setUser('')
    }

    setIsLogin(success)
    return success
  }

  return (
    <LoginContext.Provider value={{ handlerUser, handlerPass, verifyLogin, isLogin, user, pass }}>
      {children}
    </LoginContext.Provider>
  )
}
