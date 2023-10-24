import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { BooksContex } from "./BooksContex";
import { Stack } from "@mui/material";


function BooksDetail() {
  const {
    setAuthor,
    setCountry,
    setBookLink,
    setPages,
    setYear,
    setLanguage,
    author,
    country,
    language,
    bookLink,
    year,
    title,
    pages,
    imageLink,
    handlePost,
    Find,
    deleteBook
  } = useContext(BooksContex);

  useEffect(()=>{},[title])

  const foundBooks = Find("Library", title);
  if (foundBooks && foundBooks.length > 0) {
    setAuthor(foundBooks[0].author);
    setCountry(foundBooks[0].country);
    setLanguage(foundBooks[0].language);
    setPages(foundBooks[0].pages);
    setYear(foundBooks[0].year);
    setBookLink(foundBooks[0].bookLink);
  } else {
    setAuthor("");
    setCountry("");
    setLanguage("");
    setBookLink("");
    setPages("");
    setYear("");
  }


  return (
    <Formik
      initialValues={{
        author: "",
        country: "",
        language: "",
        bookLink: "",
        page: "",
        title: "",
        year: "",
      }}
    >
      {({ values, errors, handleSubmit, handleChange, resetForm }) => (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <TextField
            name={"author"}
            id="outlined-basic"
            label="Yazar Adı"
            variant="standard"
            value={author}
          />
          <TextField
            name="country"
            id="outlined-basic"
            label="Ülke  "
            variant="standard"
            value={country}

          />
          <TextField
            name="language"
            id="outlined-basic"
            label="Dili"
            variant="standard"
            value={language}
          />

          <Stack direction={"row"}>
            <TextField
              name="bookLink"
              id="outlined-basic"
              label="Link  "
              variant="standard"
              value={bookLink}
              href={bookLink}

            />
            <Button href={bookLink}> git</Button>
          </Stack>
          <TextField
            type="text"
            name="page"
            id="outlined-basic"
            label="Sayfa  "
            variant="standard"
            value={pages.toString()}
          />

          <TextField
            type="text"
            name="year"
            id="outlined-basic"
            label="Yıl  "
            variant="standard"
            value={year.toString()}
          />
          
        </form>
      )}
    </Formik>
  );
}

export default BooksDetail;
