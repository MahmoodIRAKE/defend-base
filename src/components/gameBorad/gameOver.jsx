import React,{useEffect} from "react";
import './board.css'
import { updateScore } from "../../api/apiControllers";
import { useUser } from "../../contexts/userContextF/userContext";
import { Link } from "react-router-dom";
import Spinner1 from '../../components/loader/spinner1'
const GameOverScreen=({gameSettings})=>{
    const {user}=useUser();
    
    useEffect(()=>{
        async function sendData(){
           await updateScore(user.uid,gameSettings.score);
        }
        if(user){
        sendData();
        }
    },[user,gameSettings.score])
    if(!user){ return <><Spinner1/> <h1>YOU ARE NOT A USER HAME OVER</h1></>}
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
