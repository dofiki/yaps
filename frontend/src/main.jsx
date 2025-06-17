import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InvertLens from './components/InvertLens'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvertLens />
    <App />
  </StrictMode>,
)
