import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './sections/content_section'
// import {Main_container} from './sections/main_container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Main_container/> */}
  </React.StrictMode>,
)
