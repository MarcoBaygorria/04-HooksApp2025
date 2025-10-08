import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'




// import { InstagromApp } from './07-useOptimistic/InstagromApp.js'
// import { MemoCounter } from './06-memos/MemoCounter.js'
// import { MemoHook } from './06-memos/MemoHook.js'
// import { TasksApp } from './05-useReducer/TaskApp.js'
// import { ScrambleWords } from './05-useReducer/ScrambleWords.js'
// import { FocusScreen } from './04-useRef/FocusScreen.js'
// import { HokksApp } from './HokksApp.js'
// import { TrafficLight } from './01-useState/TrafficLght.js'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.js'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.js'
// import { PokemonPage } from './03-examples/PokemonPage.js'
// import { ClientInformation } from './08-use-suspense/ClientInformation.js';
// import { getUserAction } from './08-use-suspense/api/get-user.action.js';
// import { Divide } from 'lucide-react';
import { ProfessionalApp } from './09-useContext/ProfessionalApp.js';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className='bg-gradient flex flex-col'>
          <h1 className='text-2xl'>Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} /> */}
    {/* </Suspense> */}
    <ProfessionalApp />
  </React.StrictMode>,
)
