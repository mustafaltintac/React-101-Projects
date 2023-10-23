import React from 'react'
import BooksSearch from './BooksSearch'
import { BooksContex } from './BooksContex'
import { useContext } from 'react'
import { Button, Grid } from '@mui/material'
import {Box} from '@mui/material'
import {Stack} from "@mui/material"
import BooksDetail from './BooksDetail'
import BooksMedia from './BooksMedia'
import EditBooks from "./BooksCrud/EditBook"

function CustomBooks() {

    const {books,deleteBook} = useContext(BooksContex)

  return (
    <Box
    spacing={15}
    sx={{
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    }}
  >
    <BooksSearch Library={books} />
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <BooksMedia />
      </Grid>
      <Grid item xs={12} md={6} >
        <BooksDetail />
        <Stack direction={"row"} spacing={2} sx={{margin:2}}>
            <EditBooks/>
        <Button variant='contained' color="error" onClick={deleteBook}>Sil</Button>
        </Stack>
        

      </Grid>
    </Grid>
  </Box>
  )
}

export default CustomBooks