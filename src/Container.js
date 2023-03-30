import React,{useState} from 'react';
import './App.css'
import Card from './Card';
function Container(){
 const [array,setArray]=useState([])
 const [count,setCount]=useState(0)
  const addcard =()=>{
    console.log(count,array);
    if(count>=0){
      setCount(count+1);
      setArray((array)=>{
        let uparr =[...array,count]
        return uparr;
      });
     console.log(count,array);
    }
  }
  const remcard =()=>{
    if(count>=0&& array!==[]){
      setCount(count-1);
      setArray((array)=>{
        let uparr = array.filter((ele,count)=>{
           return ele[count];
        }) 
        return uparr;
      });
     console.log(count,array);
    }
  }
  return (
    <div className='main'>
      <div id='pri'>
      <button onClick={addcard}>ADD CARD</button>
      <button id='red'onClick={remcard}>REMOVE ALL CARDS</button>
      </div>
      <div id='sec'>
      <Card/>
     {array.map((object,i)=>{return (<Card key={i}/>)})}
      </div>
    </div>
  );
};
export default Container;

