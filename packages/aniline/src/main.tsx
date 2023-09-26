import React from 'react'
import ReactDOM from 'react-dom/client'
import { Page } from './page.tsx'
import '@theme/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)
