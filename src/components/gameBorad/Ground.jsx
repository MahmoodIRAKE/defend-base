import React from "react";
import './board.css'
import { useCollision } from "../../contexts/collision/collisionGame";
import SpecialMove from "../specialMove/SpecialMoveX";
const Ground=({specialMove})=>{
     const {groundRef}=useCollision();
    return (
        <div className="ground" ref={groundRef}>
            {specialMove?<SpecialMove/>:<></>}
            <div className="item1">
                <div className="how-buttons">
                   <p>Press Z To Attack</p>
                   <p>Right and Left Arrow To Move </p>
                   <p>NinJA Steps UP And Right(Left)</p>

                </div>

            </div>
            <div className="item2"></div>
       
        </div>
    )
}
export default Ground;