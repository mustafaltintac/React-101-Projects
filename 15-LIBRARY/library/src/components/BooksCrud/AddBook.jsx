import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BooksContex } from "../BooksContex";
import { useContext, useState } from "react";
import DeleteBook from "./DeleteBook";

function AddBook() {
  const [open, setOpen] = React.useState(false);

  const {
    title,
    handlePost,
    setTitle,
    setCountry,
    setImageLink,
    setBookLink,
    setYear,
    setPage,
    setLanguage,
  } = useContext(BooksContex);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleCloseComplate=()=>{
    handlePost()
    handleClose()
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="info" onClick={handleClickOpen}>
        Yeni Kitap Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lütfen Alanları Eksiksiz Doldurunuz
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Kitap İsmini Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="author"
            label="Yazar İsmini Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="country"
            label="Yazıldığı Ülkeyi  Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="language"
            label="Kitap Dilini Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="bookLink"
            label="Kitap Linkini Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setBookLink(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="page"
            label="Sayfa Sayısını Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setPage(e.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="year"
            label="Yazıldığı Yılı Giriniz"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseComplate} >Ekle</Button>
          <Button onClick={handleClose}>Vazgeç</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddBook;
