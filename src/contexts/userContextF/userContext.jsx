


import React, { useContext, useState} from "react";

const UserContext = React.createContext();
export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [lastScore,setScore]=useState(0)



  return (
    <UserContext.Provider
      value={{user,setUser,lastScore,setScore}}
    >
      {children}
    </UserContext.Provider>
  );
};



