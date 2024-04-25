import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContext from './context/AppContext'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>,
)
