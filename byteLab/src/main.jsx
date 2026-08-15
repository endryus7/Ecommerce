import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter dá acesso a <Routes>, <Route> e <Link> em qualquer componente */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)