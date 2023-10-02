import { useState } from "react"

function Courses({ courses ,loading}) {



  if (!loading) {
    return <div>Loading...</div>;
}
const [index,setIndex]=useState(0)
const {title,price,desc}=courses[index]

const handleClickPrevious=()=>{
    if(index===0){
      setIndex(courses.length-1)
    }
    else{
      setIndex(index-1)
    }
}
const handleClickNext=()=>{
  if(index===courses.length-1){
    setIndex(0)
  }
  else{
    console.log(index+1)
    setIndex(index+1)
  }
}

const handleClickRand=()=>{ 
  let rand= Math.floor(Math.random()*courses.length)
  while(rand===index){
     rand= Math.floor(Math.random()*courses.length)
  }
  setIndex(rand)
}



  return (
    <div className="MainDiv">
    <button className="btn" onClick={handleClickPrevious}>Previous</button>
    <div className="courseMainDiv">
      <button className="btn" onClick={handleClickRand}>RandomKurs</button>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <p>{desc}</p>
    </div>
    <button className="btn" onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default Courses;
