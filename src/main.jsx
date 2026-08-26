import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const forceTop = () => {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

// Drop any #hash (e.g. #projects) so the browser does not anchor-scroll to it.
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

forceTop()
window.addEventListener('load', forceTop)
window.addEventListener('pageshow', forceTop)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
