import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Inputcreate } from './components/Inputst'
import { Render } from './components/Rendertask'

function App() {
    const [tasklist,settasklist]= useState([]);
  {
      async function fetching_data(){
          let response =  await fetch("http://localhost:3000/todos")
          let data = await response.json();
          settasklist(data.todos)
    }
    {fetching_data()}
}

return (
    <div>
      <Inputcreate></Inputcreate>
      <Render data= {tasklist}></Render>
    </div> 
  )
}
export default App
