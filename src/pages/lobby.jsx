import React from "react";
import { useUser } from "../contexts/userContextF/userContext";
import Spinner1 from '../components/loader/spinner1'
import { Link } from "react-router-dom";
const Lobby=()=>{
    const {user}=useUser();
    console.log(user)
  return<div className="lobby">
          {!user? <Spinner1/>:
          <div className="lobby-info">
              <h1>HELLO</h1>
               <p> Ninja {user.displayName}</p>
               <Link to='/game' className="btn">KILL ZOMBIES</Link>
               <br />
               <Link to='/score' className="btn">World Records</Link>
          </div>
          
         }
       
      </div>
}
export default Lobby;