import React from "react";
import BooksSearch from "./BooksSearch";
import { BooksContex } from "./BooksContex";
import { useContext } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import EditBook from "./BooksCrud/EditBook";
import BooksDetail from "./BooksDetail";
import BooksMedia from "./BooksMedia";
import AddBook from "./BooksCrud/AddBook";
import { MainContext } from '../contex' 

function GenelBooks() {
  const { Library, handlePost } = useContext(BooksContex);
  const  {isLogin}= useContext(MainContext)

  return   isLogin == "false"  ? (
    <h2
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      Lütfen Giriş Yapınız
    </h2>
  ) : (
    <Box
      spacing={15}
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
      }}
    >
      <BooksSearch Library={Library} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BooksMedia />
        </Grid>
        <Grid item xs={12} md={6}>
          <BooksDetail />
          <Stack direction={"row"} spacing={2} sx={{ margin: 2 }}>
            <Button variant="contained" color="success" onClick={handlePost}>
              Kitap Ekle
            </Button>
            <AddBook />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GenelBooks;
