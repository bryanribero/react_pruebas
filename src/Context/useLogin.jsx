import { useContext } from 'react'
import { LoginContext } from './loginContext'

export default function useLogin() {
  return useContext(LoginContext)
}
