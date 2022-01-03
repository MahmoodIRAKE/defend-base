import  database from "./firebase";
import {ref,set,get,update,remove}from "firebase/database";
const db=database;

export function deleteData(data) {
    remove(ref(db,'/omri/'+data.id+'/name'));
  }

export function writeUserData(data) {
    set(ref(db,data.id),data);
  }

export async function getData(setData){
    
    await get(ref(db,'/omri/')).then((snapshot) => {
      if (snapshot.exists()) {
         setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

}

export function writeNewPost(data) {
    const updates = {};
    updates['/omri/' + data.id] = data;
    return update(ref(db), updates)
}