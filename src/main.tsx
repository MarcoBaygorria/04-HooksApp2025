import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HokksApp } from './HokksApp.js'
import { TrafficLight } from './01-useState/TrafficLght.js'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>,
)
