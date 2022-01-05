import React from "react";
import './board.css'
import { useCollision } from "../../contexts/collision/collision";
const Ground=()=>{
     const {groundRef}=useCollision();
    return (
        <div className="ground" ref={groundRef}>
            
            <div className="item1"></div>
            <div className="item2"></div>
       
        </div>
    )
}
export default Ground;