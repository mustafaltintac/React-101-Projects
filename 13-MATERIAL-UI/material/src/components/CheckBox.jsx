import React,{useState} from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
} from "@mui/material";
function CheckBox() {

  const [datas,setDatas]=useState([])

  const handleClick=(event)=>{
      if(datas.indexOf(event.target.value)===-1){
        console.log("girdi")
        console.log(event.target.value)
        setDatas([...datas,event.target.value])
      }
      else{
        console.log("girmedi")
        console.log(event.target.value)

        setDatas(datas.filter((data) => event.target.value !== data))
      }
  }
  console.log(datas)
  return (
    <Box>
      <FormControl>
        <FormGroup row>
          <FormControlLabel color="succes" onClick={handleClick} label="lise" value={"lise"} control={<Checkbox/>}/>
          <FormControlLabel onClick={handleClick} label="üni" value={"üni"} control={<Checkbox/>}/>
          <FormControlLabel onClick={handleClick} label="prep" value={"prep"} control={<Checkbox/>}/>

        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default CheckBox;
