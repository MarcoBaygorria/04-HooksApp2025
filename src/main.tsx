import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HokksApp } from './HokksApp.js'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HokksApp />
  </React.StrictMode>,
)
