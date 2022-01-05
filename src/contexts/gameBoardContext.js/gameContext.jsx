
import React, { useContext, useState,useRef} from "react";

const GameContext = React.createContext();
export function useGame() {
  return useContext(GameContext);
}

export const GameProvider = ({ children }) => {
    const [gameSettings,setSettings]=useState({
      characterHealth:100,
      towerPower:0,
      score:0,
      zombieLevel:1,
    })

    const settingsHandler=(name,value)=>{
        setSettings(prevState=>({
          ...prevState,
          [name]:value
        }))
    }

  return (
    <GameContext.Provider
      value={{settingsHandler,gameSettings}}
    >
      {children}
    </GameContext.Provider>
  );
};



