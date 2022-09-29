import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const initialState = {
  user: {},
  token: null,
  error: null,
  isLoading: false,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
