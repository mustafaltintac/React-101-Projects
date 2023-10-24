import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import GenelBooks from "./components/GenelBooks";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import MainContextProvider from "./contex";
import BooksContextProvider from "./components/BooksContex";
import CustomBooks from "./components/CustomBooks";
import { Box } from "@mui/material";
import image from "./assets/Library.jpg"

function App() {
  return (
    <MainContextProvider>
      <BooksContextProvider>
          <Header />
          <Box className="App" sx={{height:"100vh"} }>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/GenelBooks" element={<GenelBooks />} />
            <Route path="/CustomBooks" element={<CustomBooks />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Box>
      </BooksContextProvider>
    </MainContextProvider>
  );
}

export default App;
