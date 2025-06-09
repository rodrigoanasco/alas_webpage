import { createRoot } from 'react-dom/client'

{/*This will allow to navigate through multiple pages without reloading the page*/}
import { BrowserRouter } from 'react-router-dom' 

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
