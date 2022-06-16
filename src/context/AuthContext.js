import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        console.log(token);
        if (token) {
          const resMe = await axios.get("/users/me");
          setUser(resMe.data.user);
          console.log(resMe.data);
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
      }
    };

    fetchMe();
  }, []);

  const signUp = async (input) => {
    const res = await axios.post("/auth/signup", input);
    setAccessToken(res.data.token);
    console.log(input);
    // const resMe = await axios.get("/users/me");
    // setUser(resMe.data.user);
  };

  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });
    console.log(res);
    console.log(res.data);
    console.log(res.data.token);
    setAccessToken(res.data.token);
    // const resMe = await axios.get("/users/me");
    // setUser(resMe.data.user);
  };

  const logout = () => {
    console.log("trigger");
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
