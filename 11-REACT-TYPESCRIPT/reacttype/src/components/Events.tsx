import React , {useState} from "react";

function Events() {

    const [value, setValue] = useState("");

  const HandleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    console.log(id)
  };
  const HandleChange = (event : React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event?.target.value)
  }
  return (
    <div>
      <button onClick={(event) => HandleClick(event, 4)}> Sil</button>
      <input type="text" value={value} onChange={HandleChange} />
    </div>
  );
}

export default Events;
