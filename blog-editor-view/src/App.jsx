import { createContext, useContext, useState } from 'react'
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
        <Link to={"/"}><p>The Gutenberg Blog</p></Link>
        {!user && <div className="header-actions">
          <button onClick={() => navigate("/login")} className="header-action-item">
            Login
          </button>
          <button onClick={() => navigate("/register")} className="header-action-item">
            Sign Up
          </button>
        </div>}
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
