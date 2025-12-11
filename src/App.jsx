import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  )
}
