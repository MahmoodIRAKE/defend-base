import React,{useEffect} from "react";
import { useGameCanvas } from "../contexts/GameCanvasContext";
import './style.css'
const Game=()=>{

    const {startGame,canvasGameRef} = useGameCanvas();
 
    useEffect(() => {
        startGame();
      }, []);
    return (
        <canvas ref={canvasGameRef}/>
    );
}
export default Game;








