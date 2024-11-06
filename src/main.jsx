// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import './assets/css/style.css'; 


// import './index.css'
// import '@nextui-org/react/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </React.StrictMode>,
)