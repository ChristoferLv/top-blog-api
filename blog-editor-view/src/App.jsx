import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router'
import { AuthContext } from './AuthContext.jsx'
import { Link } from "react-router";

function App() {
  return (
    <>
        <header>
          <p>Glad to Shop</p>
          <Link to="/post/1" >
          test</Link>
        </header>
        <Outlet />
    </>
  )
}

export default App
