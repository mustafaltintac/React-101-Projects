import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BooksContex } from "./BooksContex";
import { useContext } from "react";
import bookImage from "../assets/book.jpg";

function BooksMedia() {
  const { title } = useContext(BooksContex);

  return (
    <Card sx={{ maxWidth: 350, maxHeight: 600 }}>
      <CardMedia
        sx={{ height: 300, width: 350 }}
        image={bookImage}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BooksMedia;
