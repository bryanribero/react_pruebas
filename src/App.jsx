import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import ProductoInfo from './dynamicPages/ProductoInfo.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'
import Login from './pages/Login.jsx'
import LoginProvider from './Context/LoginProvider.jsx'
import PrivateRoute from '../Routes/PrivateRoute.jsx'

export default function App() {
  return (
    <>
      <ThemeProvider>
        <LoginProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoInfo />} />
          </Routes>
        </LoginProvider>
      </ThemeProvider>
    </>
  )
}
