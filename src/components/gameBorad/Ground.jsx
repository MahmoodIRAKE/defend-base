import React from "react";
import './board.css'
import { useCollision } from "../../contexts/collision/collision";
import SpecialMove from "../specialMove/SpecialMove";
const Ground=({specialMove})=>{
     const {groundRef}=useCollision();
    return (
        <div className="ground" ref={groundRef}>
           
            {specialMove?<SpecialMove/>:<></>}
            <div className="item1"></div>
            <div className="item2"></div>
       
        </div>
    )
}
export default Ground;