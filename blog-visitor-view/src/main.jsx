import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import App from './App.jsx'
import LoginPage from './login.jsx'
import { AuthProvider } from './AuthProvider.jsx'
import Home from './HomePage.jsx'
import ViewPost from './ViewPostPage.jsx'
import RegisterPage from './RegisterPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/", element: <Home /> },
      { path: "/view/:postId", element: <ViewPost /> },
      { path: "*", element: <Navigate to="/" replace /> } 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
