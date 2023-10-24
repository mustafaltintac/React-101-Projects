import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BooksContex } from "../BooksContex";
import React, { useContext, useState } from "react";
import axios from "axios";
export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const {
    title,
    author,
    bookLink,
    country,
    pages,
    year,
    imageLink,
    language,
    setAuthor,
    setCountry,
    setImageLink,
    setLanguage,
    setBookLink,
    setPages,
    setTitle,
    setYear,
    idLibrary,
    idBooks,
    setIsLoad,
    isLoad,
    handleSelect
    
    
  } = useContext(BooksContex);

  const [upTitle, setUpTitle] = useState();
  const [upAuthor, setUpAuthor] = useState();
  const [upBookLink, setUpBookLink] = useState();
  const [upLanguage, setUpLanguage] = useState();
  const [upCountry, setUpCountry] = useState();
  const [upPages, setUpPages] = useState();
  const [upYear, setUpYear] = useState();
  const [upImageLink, setUpImageLink] = useState();

  const handleClickOpen = () => {
    setUpTitle(title);
    setUpAuthor(author);
    setUpCountry(country);
    setUpImageLink(imageLink);
    setUpLanguage(language);
    setUpBookLink(bookLink);
    setUpPages(pages);
    setUpYear(year);
    handleSelect(title)
    setOpen(true);
  };

  const handleCloseComplate = () => {
    setAuthor(upAuthor);
    handleEdit(), 
    setOpen(false);
    setIsLoad(!isLoad)


  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {

    const updateBook = {
      title: upTitle,
      author: upAuthor,
      country: upCountry,
      language: upLanguage,
      bookLink: upBookLink,
      imageLink: upImageLink,
      pages: upPages,
      year: upYear,
    };

    axios
      .patch(`http://localhost:3000/myBooks/${idBooks}`, updateBook)
      .then((response) => {
        console.log("Veri Güncelleme Başarılı:", response.data);
        setTitle(upTitle);
        setAuthor(upAuthor);
        setCountry(upCountry);
        setImageLink(upImageLink);
        setLanguage(upLanguage);
        setBookLink(upBookLink);
        setPages(upPages);
        setYear(upYear);
      })
      .catch((error) => {
        console.error("Veri Güncelleme Hatası:", error);
      });

    axios
      .patch(`http://localhost:3001/Library/${idLibrary}`, updateBook)
      .then((response) => {
        console.log(
          "Veri Güncelleme Başarılıııııııııııııııııııııııııııııı:",
          response.data
        );
        setTitle(upTitle);
        setAuthor(upAuthor);
        setCountry(upCountry);
        setImageLink(upImageLink);
        setLanguage(upLanguage);
        setBookLink(upBookLink);
        setPages(upPages);
        setYear(upYear);
      })
      .catch((error) => {
        console.error("Veri Güncelleme Hatası:", error);
      });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Güncelle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Güncelleme Ekranı</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kitap bilgilerini eksiksiz girmeye özen gösteriniz
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Kitap İsmi"
            value={upTitle}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="author"
            label="Yazar İsmi"
            value={upAuthor}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpAuthor(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="country"
            label="Ülke "
            value={upCountry}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpCountry(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="language"
            label="Dil"
            value={upLanguage}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpLanguage(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bookLink"
            label="Kitap Linki"
            value={upBookLink}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpBookLink(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bookLink"
            label="Kitap Resmi Linki"
            value={upImageLink}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpImageLink(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="page"
            label="Sayfa Sayısı"
            value={upPages}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpPages(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="page"
            label="Kitap Yılı"
            value={upYear}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUpYear(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleCloseComplate}>Güncelle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
