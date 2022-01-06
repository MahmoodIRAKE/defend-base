
import React, { useContext, useState,useRef} from "react";
import Zombie from "../../components/zombies/Zombie";
const ZombieContext = React.createContext();
export function useZombie() {
  return useContext(ZombieContext);
}

export const ZombieProvider = ({ children }) => {
    const zombieRef = useRef(null);
    const [zombie,setZombie]=useState({
        health:10,
        kind:1,
        direction:1,
        anime:1,
        posotion:{x:0,y:700},
        zombieLevel:1,
        zombieId:0,
    })
    
 

    const zombieArrMaker=(zombieArray)=>{
        
        for(let i=0;i<zombie.zombieLevel*3;i++){
        zombieArray.push({
            health:10,
            direction:1,
            anime:1,
            posotion:{x:-Math.floor(Math.random()*1000+1),y:700},
            zombieId:i+zombieArray.length,
        })
      }
     
    }

    const zombieDraw=(zombieArray,gameSettings,specialMove,setSpecialMove,setGameOver,gameOver)=>{
        zombieArrMaker(zombieArray);
        return zombieArray.map(item=>{
            return <Zombie key={item.zombieId} id={item.zombieId} posotionZ={item.posotion} 
            gameSettings={gameSettings} specialMove={specialMove} setSpecialMove={setSpecialMove}
            setGameOver={setGameOver} gameOver={gameOver}
            />
        })
    }
    




  return (
    <ZombieContext.Provider
      value={{zombieDraw,setZombie,zombieRef}}
    >
      {children}
    </ZombieContext.Provider>
  );
};



