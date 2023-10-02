import  React,{ useReducer } from 'react'
import Calculate from './Calculate';
import './App.css'

export const NumberContext =React.createContext();
const initilaValue=0;

  

const reducer=(state,action)=>{
  switch(action){
    case 'Increase':
      return state+1;
    case 'Decrease':
      return state-1;
    case 'Reset':
      return initilaValue;
    default:
      alert("error");
  } 
}

function App() {



  const [count,dispatch]=useReducer(reducer,initilaValue)
  return (
    <div >
      <NumberContext.Provider value={{count:count ,dispatch:dispatch}}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  )
}

export default App
