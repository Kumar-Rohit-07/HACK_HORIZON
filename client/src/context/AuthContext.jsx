import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:9000/api/auth/login", {
        email,
        password,
      });
  
      if (res.data && res.data.token) {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token); // Optional: save token
        return true;
      } else {
        toast.error(res.data.message || "Login failed");
        return false;
      }
    } catch (err) {
      console.error("Login error", err);
      toast.error(err.response?.data?.message || "Something went wrong");
      return false;
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:9000/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("Register response:", res.data);
  
      if (res.data && res.status === 201) { // ✅ FIXED CONDITION
        return true;
      } else {
        toast.error(res.data.message || "Registration failed");
        return false;
      }
    } catch (err) {
      console.error("Register error", err);
      toast.error(err.response?.data?.message || "Something went wrong");
      return false;
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
