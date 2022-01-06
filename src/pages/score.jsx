import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner1 from "../components/loader/spinner1";
import { getUserData } from "../api/apiControllers";
const ScoreWorld=()=>{
  
  const [data,setData]=useState(null)
  
  useEffect(()=>{
      async function getData(){
         await getUserData(setData);
      }
      getData();
  },[])




if(!data){return <Spinner1/>}

return <div className="score">
          <Link to="/lobby"> Go Back </Link>
          {Object.values(data).map((item)=>{
              return <div className="score-card">
                  <p>{item.name}</p>
                  <p>{item.score}</p>
                  
              </div>
          })}
       </div>

}
export default ScoreWorld;