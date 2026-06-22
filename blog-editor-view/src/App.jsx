import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  return (
     <>
      <header>
        <p>Glad to Shop</p>
      </header>
      <Outlet />
    </>
  )
}

export default App
