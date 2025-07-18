import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'
import './main.css'
import './blog.css'
import './admin.css'
import App from './App.jsx'

// Performance optimization: Use concurrent features
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
