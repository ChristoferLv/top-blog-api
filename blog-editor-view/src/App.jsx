import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet, useNavigate } from 'react-router'
import { AuthContext } from './AuthContext.jsx'
import { Link } from "react-router";
import { logOut } from './api/requests.js'

function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <a href="/"><p>The Gutenberg Blog</p></a>
        {user && <div className="header-actions">
          <button onClick={() => navigate("/new-post")} className="header-action-item">
            New Post
          </button>
          <button onClick={() => logOut()} className="header-action-item">
            Log Out
          </button>
        </div>}
      </header>
      <Outlet />
    </>
  )
}

export default App
