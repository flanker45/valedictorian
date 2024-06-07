import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './routes/index'
import Navbar from './components/navbar'

import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/lato/400.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
