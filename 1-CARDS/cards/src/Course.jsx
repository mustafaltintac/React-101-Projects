import React from "react";
import './App.css'


function Course(props){ 
    // {kaynak,title,description}
    // const title=props.title;
    // const description=props.description;
    const {kaynak,title,description} =props;
    console.log(props);
    return(
     <div> 
         <img className="resim" src={props.kaynak} alt=""  /> 
        <div><strong>{props.title}</strong></div>
        <div>{props.description}</div>
     </div>
    )
}
export default Course