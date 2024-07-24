import React from 'react'
import Home from './routes/Home'
import Overview from './routes/subroutes/Overview'
import New from './routes/subroutes/New'
import Running from './routes/subroutes/Running'
import Completed from './routes/subroutes/Completed'
import Canceled from './routes/subroutes/Canceled'
import Starred from './routes/subroutes/Starred'
import Settings from './routes/subroutes/Settings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}>
          <Route path='' Component={Overview} />
          <Route path='new' Component={New} />
          <Route path='running' Component={Running} />
          <Route path='completed' Component={Completed} />
          <Route path='canceled' Component={Canceled} />
          <Route path='starred' Component={Starred} />
          <Route path='settings' Component={Settings} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
