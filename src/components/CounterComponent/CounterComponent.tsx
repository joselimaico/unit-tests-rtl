import React, {useState} from "react";

interface counterProps {

}
export const CounterComponent:React.FC<counterProps> = ()=>{
   const [count,setCount]= useState(0);
   const handleCount = ()=>{
       setCount((prevState)=>{
           return prevState + 1;
       })
   }
   return (
       <div>
           <h2>Contador {count}</h2>
           <button onClick={handleCount}>Aumentar</button>
       </div>
   )
}