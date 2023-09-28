import "./App.css";
import Loading from "./Loading";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);

  const [LoadingFlag, setLoadingFlag] = useState(false);
  const fetchCoursee = async () => {
    setLoadingFlag(true);

    try {
      const response = await axios.get("http://localhost:3004/courses");
      setCourses(response.data);
      setLoadingFlag(false);
    } catch {
      setLoadingFlag(false);
    }
  };

  console.log(courses);
  useEffect(() => {
    fetchCoursee();
  }, []);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => {
      return course.id !== id;
    });
    setCourses(afterDeletedCourses);
  };

  return (
    <div>
      {LoadingFlag ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div>
              <h3>Kursların Hepsini Sildin</h3>
              <button
                className=""
                onClick={() => {
                  fetchCoursee();
                }}
              >
                yenile
              </button>
            </div>
          ) : (
            <div>
              <h2>Kurslarım</h2>
              <Courses courses={courses} deleteCourse={deleteCourse} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
