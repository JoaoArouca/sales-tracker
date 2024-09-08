import React from 'react'
import ReactDOM from 'react-dom/client'
import { enableMSW } from './api/mock'
import { App } from './App'
import './index.css'


enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})