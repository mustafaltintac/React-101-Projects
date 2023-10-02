import "./App.css";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoursee = async () => {
    try {
        const response = await axios.get("http://localhost:3004/courses");
        setCourses(response.data);
        setLoading(true)
    } catch (error) {
        console.error("API isteğinde hata oluştu:", error);
    }
}


  useEffect(() => {
    fetchCoursee();
  },[]);


  
  return (
    <div className="App">
      <h2>Kurslarım</h2>
      <Courses courses={courses} loading={loading} />
    </div>
  );
}

export default App;
