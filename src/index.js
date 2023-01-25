import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App'

// By add react strrictmode it add addtionally check and warnings
ReactDom.createRoot(document.getElementById('root')).render(<App />)

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
