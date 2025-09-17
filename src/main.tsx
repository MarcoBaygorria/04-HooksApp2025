import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HokksApp } from './HokksApp.js'
// import { TrafficLight } from './01-useState/TrafficLght.js'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.js'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.js'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    <TrafficLightWithHook />
  </React.StrictMode>,
)
