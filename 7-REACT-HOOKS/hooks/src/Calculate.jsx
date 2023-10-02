import { useContext } from "react";
import {NumberContext} from "./App"



function Calculate() {
    const  numberContext= useContext(NumberContext)


  return <div>
    <div>
    <p>count={ numberContext.count}</p>
      <button onClick={()=>{numberContext.dispatch('Increase')}}>Increase</button>
      <button onClick={()=>{numberContext.dispatch('Decrease')}}>Decrease</button>
      <button onClick={()=>{numberContext.dispatch('Reset')}}>Reset</button>
    </div>
  </div>;
}

export default Calculate;
