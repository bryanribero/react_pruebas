import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import ProductoInfo from './dynamicPages/ProductoInfo.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoInfo />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}
