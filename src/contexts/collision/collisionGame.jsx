
import React, { useContext,useRef} from "react";

const CollisionContext = React.createContext();
export function useCollision() {
  return useContext(CollisionContext);
}

export const CollisionProvider = ({ children }) => {

    const zombieRef=useRef(null);
    const chracterRef=useRef(null);
    const groundRef=useRef(null);
    const towerRef=useRef(null);


  return (
    <CollisionContext.Provider
      value={{zombieRef,chracterRef,towerRef,groundRef}}
    >
      {children}
    </CollisionContext.Provider>
  );
};



