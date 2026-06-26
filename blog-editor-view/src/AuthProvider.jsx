import { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storagedUser = localStorage.getItem('user');
    const storagedToken = localStorage.getItem('token');
    if (!user) {
      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      } else if (storagedToken) {
        fetch('http://localhost:3000/auth/me', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': storagedToken
          }
        }).then((response) => response.json()).then((data) => {
          const user = { token: storagedToken, ...data.data };
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        });
      } else {
        setUser(null)
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}