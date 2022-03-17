import { createContext, useContext, useState, useEffect } from "react";
const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [Id, setId] = useState("");
  const contextValue = { Id, setId };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
