import  database from "./firebase";
import {ref,set,get,update}from "firebase/database";
const db=database;


export async function writeUserData(data) {
    let res=[]
    console.log(data);
    await getData(res);
    if(res[0]&&Object.keys(res[0]).includes(data.uid)){
    set(ref(db,data.uid),{id:data.uid,score:0,name:data.displayName});
    }
    if(res.length===0){
      set(ref(db,data.uid+'/'),{id:data.uid,score:0,name:data.displayName});
    }
  }

export async function getData(arr){
    
    await get(ref(db)).then((snapshot) => {
      if (snapshot.exists()) {
         arr.push(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

}
export async function getUserData(setData){
    
  await get(ref(db)).then((snapshot) => {
    if (snapshot.exists()) {
       setData(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

}

export function updateScore(uid,data) {
    const updates = {};
    updates[uid+'/bestscore/'] = data;
    return update(ref(db), updates)
}