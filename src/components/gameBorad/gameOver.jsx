import React,{useEffect} from "react";
import './board.css'
import { updateScore } from "../../api/apiControllers";
import { useUser } from "../../contexts/userContextF/userContext";
import { Link } from "react-router-dom";
const GameOverScreen=({gameSettings})=>{
    const {user}=useUser();
    
    useEffect(()=>{
        async function sendData(){
           await updateScore(user.uid,gameSettings.score);
        }
        sendData();
    },[user.uid,gameSettings.score])
    
    return <div className="game-over">
           <h2>Score: {gameSettings.score}</h2>
         <Link to="/game"  className="btn">Play Again</Link>
         <br/>
         <Link to="/" className="btn" >Go Home</Link>
        <div className="dead-character"></div>
        <div className="game-over-text"></div>
         
       
    </div>
}
export default GameOverScreen;
