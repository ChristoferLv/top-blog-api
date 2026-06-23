import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import LoginPage from './login.jsx'
import { AuthProvider } from './AuthProvider.jsx'
import Home from './HomePage.jsx'
import CreatePost from './CreatePostPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "posts/my", element: <Home /> },
      { path: "posts/new", element: <CreatePost /> },
      { path: "posts/:id", element: <h1>a</h1> },
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
