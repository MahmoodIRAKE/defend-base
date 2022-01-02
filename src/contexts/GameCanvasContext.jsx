import React, { useContext, useRef, useState } from "react";

const GameCanvasContext = React.createContext();
export function useGameCanvas(){
    return useContext(GameCanvasContext);
} 

export const GameProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasGameRef = useRef(null);
  const contextRef = useRef(null);

  const startGame = () => {
    const canvas = canvasGameRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.fillStyle="#333"
    context. fillRect(200,10,150,100)
  };


  return (
    <GameCanvasContext.Provider
      value={{startGame,canvasGameRef,contextRef}}
    >
      {children}
    </GameCanvasContext.Provider>
  );
};

