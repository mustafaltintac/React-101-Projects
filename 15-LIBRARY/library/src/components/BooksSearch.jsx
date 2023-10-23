import React, { useContext } from 'react'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { BooksContex } from './BooksContex';


function BooksSearch({Library}) {

    const {handleSelect } = useContext(BooksContex)


  return (
    <Autocomplete
      sx={{widows:500, margin:1}}
        options={Library.map((book) => ({
          id: book.id,
          title: book.title,
        }))}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField key={params.id} {...params} label="Search a Book" />
        )}
        onChange={(event) => handleSelect(event.currentTarget.innerHTML)}
      />
  )
}

export default BooksSearch