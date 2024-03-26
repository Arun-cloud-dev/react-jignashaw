import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Example from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Example/>
    <Home/> 
    
  </React.StrictMode>,
)
