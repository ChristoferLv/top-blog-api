import { createContext, use, useContext, useState } from 'react'
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
        {user != null ? (
          <div className="header-actions">
            <button onClick={() => logOut()} className="header-action-item">
              Log Out
            </button>
          </div>)
          : (<div className="header-actions">
            <button onClick={() => navigate("/login")} className="header-action-item">
              Log In
            </button>
          </div>)
        }
      </header>
      <Outlet />
    </>
  )
}

export default App
