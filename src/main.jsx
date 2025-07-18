import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'
import './main.css'
import './blog.css'
import './admin.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
