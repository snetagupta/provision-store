import React from "react";

const AuthContext = React.createContext("");

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = React.useState(null);
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
