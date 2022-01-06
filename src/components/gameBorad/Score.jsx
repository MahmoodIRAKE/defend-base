import React from "react";
import './board.css'
const Score=({gameSettings})=>{
    return <div className="score1">
       Score:{gameSettings.score}
    </div>
}
export default Score;