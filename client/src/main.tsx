import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './routes/index'
import Navbar from './components/navbar'

import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme.ts'
import { ThemeProvider } from '@emotion/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
