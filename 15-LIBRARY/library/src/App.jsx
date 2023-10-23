import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import GenelBooks from "./components/GenelBooks";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import  MainContextProvider  from "./contex";
import BooksContextProvider from "./components/BooksContex";
import CustomBooks from "./components/CustomBooks"


function App() {


    
  return (
    <MainContextProvider  >
      <BooksContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GenelBooks" element={<GenelBooks />} />
          <Route path="/CustomBooks" element={<CustomBooks />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      </BooksContextProvider>
    </MainContextProvider>
  );
}

export default App;
