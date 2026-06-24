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
        {user && <div className="header-actions">
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
