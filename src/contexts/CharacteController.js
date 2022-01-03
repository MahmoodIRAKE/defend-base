
export function characterEventListners(KeyHandler){
    let keyEvent={ArrowRight:'right',ArrowLeft:'left',ArrowDown:'down',ArrowUp:'up',z:'space'}
    window.addEventListener('keydown', function (event) {
       KeyHandler(keyEvent[event.key],1);
      }, false);
      window.addEventListener('keyup', function (event) {
       KeyHandler(keyEvent[event.key],0);
      }, false);
}


// this function detects the move that need to be done according to keys pressed
export function characterMovementRules(posotion,posotionHandler,keys,setGravity,setAnime,setDirection){
    let keysNumber=keysPressedNumber(keys)
    // slide to the right
    if(keys.down&&keys.right&&keysNumber===2){
      console.log(445);
      
    }
    // slide to the left
    if(keys.down&&keys.left&&keysNumber===2){
        console.log(545);
        
      }
    // go right
    if(keys.right&&keysNumber===1){
        posotionHandler('x',posotion.x+10);
        setAnime('run')
        
    }
    //go left
    if(keys.left&&keysNumber===1){
        posotionHandler('x',posotion.x-10);
        setAnime('run-left')
    }
    // jump
    if(keys.up&&keysNumber===1){
        posotionHandler('y',posotion.y-50);
        setGravity(true)
        setAnime('jump')
    }
    if(keys.up&&keys.right&&keysNumber===2){   
        posotionHandler('y',posotion.y-200);
        posotionHandler('x',posotion.x+200);
        setGravity(true)
        
    }
    if(keys.up&&keys.left&&keysNumber===2){   
        posotionHandler('y',posotion.y-200);
        posotionHandler('x',posotion.x-200);
        setGravity(true)
        
    }

}

/// function that checks how much keys were pressed
function keysPressedNumber(keys){
  let sum=0;
  Object.values(keys).map(item=>{
      if(item===1){
          sum++;
      }
      return 1;
  })
  return sum ;
}
// /// this function that gives gravity to the character
export function gravityHandler(posotionHandler,posotion,setGravity,setAnime){
    setTimeout(()=>{
        posotionHandler('y',posotion.y+10);
      
        if(posotion.y>=550){
            setGravity(false);
            setAnime('')
        }
    },1000/60)
}

/// function to stop anime
export function stopAnime(keys,setAnime){
    let keysNumber=keysPressedNumber(keys)
    // slide to the right
    if(keys.down&&keys.right&&keysNumber===2){
      console.log(445);
      
    }
    // slide to the left
    if(keys.down&&keys.left&&keysNumber===2){
        console.log(545);
        
      }
    // go right
    if(!keys.right&&keysNumber===0){
        
        setAnime('')
    }
    //go left
    if(keys.left&&keysNumber===1){
        
    }
    // jump
    if(keys.up&&keysNumber===1){
     
    }
    if(keys.up&&keys.right&&keysNumber===2){   
 
    }
    if(keys.up&&keys.left&&keysNumber===2){   
 
        
    }

}



// export function slideHandler(anchor,posotionHandler,canvas,context,posotion,setSlide,keys){
//     setTimeout(()=>{
            
       
//             posotionHandler('x',posotion.x+50)
//         fillCharacter(canvas,context,posotion.x,posotion.y)
//         if(posotion.x===anchor){
//             setSlide(false);
//         }
//     },1000/10)
// }