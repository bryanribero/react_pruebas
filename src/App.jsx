import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Contador from './pages/Contador.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<Contador />} />
      </Routes>
    </>
  )
}
