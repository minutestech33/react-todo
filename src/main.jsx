import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DesignContextProvider } from './context/DesignContext'
import { DataContextProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <DesignContextProvider>
        <App />
      </DesignContextProvider>
    </DataContextProvider>
  </React.StrictMode>,
)
