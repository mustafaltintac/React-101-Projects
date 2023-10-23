import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { MainContext } from "../contex";
import { useContext } from "react";

function Home() {

   const  {isLogin}= useContext(MainContext)



  
    
  return (isLogin === "true"  || isLogin ===true) ? (
    <Grid
      container
      margin={10}
      alignItems={"center"}
      justifyContent={"center"}
      color={"black"}
      borderColor={"red"}
    >
      <Grid item xs={12} md={6}>
        Emlak Katılım Bankasına Hoş geldiniz,Artık kitap ekleyip
        çıkartabilirsiniz {isLogin} {typeof(isLogin)}
      </Grid>
      <Grid>

      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      margin={10}
      alignItems={"center"}
      justifyContent={"center"}
      color={"black"}
      borderColor={"red"}
    >
      <Grid item xs={12} md={6}>
        <p>
          Merhaba Kitap Dostları! Amlak
          Katılım Bankası Kütüphanesi'ne hoş geldiniz! Burada zengin kitap
          koleksiyonumuz ve çeşitli etkinliklerle bilgi dünyasında keyifli bir
          yolculuğa çıkabilirsiniz. Sizi bekliyoruz! Sevgi ve Kitap Dolu Günler
          dileriz, Amlak Katılım Bankası Kütüphanesi Ekibi {isLogin} {typeof(isLogin)}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Üye girişi için tıklayınız</h2>
          <Button variant="contained" href="./Login">
            Giriş Yap
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
