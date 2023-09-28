import "./App.css";
import SearchHeader from "./SearchHeader";
import serachImages from "./api.jsx";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images,setImages]=useState([])
  const handleSubmit= async (term)=>{
    const result =await serachImages(term);
      setImages(result);
    };
  return (
    <div>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
