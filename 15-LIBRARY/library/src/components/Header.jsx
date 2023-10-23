import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Button, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { MainContext } from "../contex";

export default function Header() {


  const  {toggleIslogin,isLogin,setIsLogin}= useContext(MainContext)

  const handleClick=()=>{
   toggleIslogin(false)
   setIsLogin(false)
  }


  return (
    <AppBar sx={{ justifyContent: "center" }}>
      <Toolbar>
        <IconButton>
          <LocalLibraryIcon />
        </IconButton>
        <Typography sx={{ marginRight: "auto" }}>
          KÜTÜPHANE 
        </Typography>
        <Stack direction="row" spacing={1}>
          {(isLogin == "true") ? (
            <Stack direction={"row"} spacing={1}>
              <Button variant="text" href="/" color="inherit"  > Anasayfa</Button>
              <Button variant="text" href="/GenelBooks" color="inherit"  > Kitap Ekle</Button>
              <Button variant="text" href="/CustomBooks" color="inherit"  > Kitaplarıma Git</Button>
              <Button variant="text" href="/Login" color="inherit"  onClick={handleClick} > Çıkış Yap</Button>
            </Stack>
          ) : (
            <Stack direction={"row"} spacing={1}>
             <Button variant="text" href="/" color="inherit"  > Anasayfa</Button>
             <Button variant="text" href="/Login" color="inherit"  > Giriş Yap</Button>
            </Stack>
          )}  
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
