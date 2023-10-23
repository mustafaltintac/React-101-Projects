import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import BooksMedia from "./BooksMedia";
import BooksSearch from "./BooksSearch";
import BooksDetail from "./BooksDetail";
import { BooksContex } from "./BooksContex";

function Books() {

  const {Library} = React.useContext(BooksContex)
  return (
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Books;
