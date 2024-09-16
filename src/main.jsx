import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SpinnerProvider } from './context/SpinnerContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SpinnerProvider>
            <App />
    </SpinnerProvider>
  </StrictMode>,
)
