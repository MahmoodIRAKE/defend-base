
import React, { useContext, useState } from "react";
import Zombie from "../../components/zombies/Zombie";
const ZombieContext = React.createContext();
export function useZombie() {
  return useContext(ZombieContext);
}

export const ZombieProvider = ({ children }) => {
  
    const [zombie,setZombie]=useState({
        health:10,
        kind:1,
        direction:1,
        anime:1,
        posotion:{x:0,y:10},
        zombieLevel:1,
        zombieId:0,
    })

    // const zombieHandler=(name,value)=>{
    //     setZombie(prevState=>({
    //         ...prevState,
    //         [name]:value
    //     }))
    // }

    const zombieArrMaker=()=>{
        let res=[];
        for(let i=0;i<zombie.zombieLevel*20;i++){
        res.push({
            health:10,
            kind:Math.floor(Math.random()*2+1),
            direction:1,
            anime:1,
            posotion:{x:-Math.floor(Math.random()*100+1),y:63},
            zombieId:i,
        })
      }
      return res;
    }

    const zombieDraw=()=>{
        let zombieArr=zombieArrMaker();
        return zombieArr.map(item=>{
            return <Zombie key={item.zombieId} id={item.zombieId} posotion={item.posotion}/>
        })
    }
    
    // const zombieLevelUp=()=>{
    //      setZombie('zombieLevel',zombie.zombieLevel+1);
    // }

    // setTimeout(()=>{
    //     zombieLevelUp();
    // },20000) 



  return (
    <ZombieContext.Provider
      value={{zombieDraw,setZombie}}
    >
      {children}
    </ZombieContext.Provider>
  );
};



