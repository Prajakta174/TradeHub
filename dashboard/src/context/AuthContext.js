import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tradehub-6mu3.onrender.com/api/user/profile", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          setUser(null);
          setLoading(false);
          return;
        }

        return res.json();
      })
      .then((data) => {
        if (data) {
          setUser(data);
        }

        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
