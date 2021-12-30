import React, { useEffect } from 'react';
import './App.css';
import './utils/utils.css'
import {writeUserData,getData,writeNewPost,deleteData} from './api/apiControllers'
import {googleSignUp,logInWithFacebook} from './api/facebookAuth'
function App() {
  const [value,setValue]=React.useState({
    id:0,
    name:null
  })
  const [data,setData]=React.useState(null)

    useEffect(()=>{
     getData(setData);
    },[])

  const changeHandler=(e)=>{
      const{name,value}=e.target;
      setValue(prevState=>({
        ...prevState,
        [name]:value
      }))
  }
 if(!data){return <>loading ....</>}

  return (
    <div className="App flexing-center col">
         <h1>id</h1>
         <input type="text" onChange={(e)=>changeHandler(e)} name='id'  required/>
         <h1></h1>
         <input type="text" onChange={(e)=>changeHandler(e)} name='name' required/>
         <button type='submit' onClick={(e)=>{e.preventDefault(); logInWithFacebook() }}>Submit</button>
    </div>
  );
}

export default App;
