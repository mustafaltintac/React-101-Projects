import React from 'react'
import Grid  from "@mui/material/Grid";
import CustomInput from './CustomInput';


export default function Login() {



  return (
    <Grid container sx={{alignItems:"center", justifyContent:"center", marginTop:20}}>
        <Grid item xs={6} md={4}>
          <CustomInput />
        </Grid>
    </Grid>
  )
}
