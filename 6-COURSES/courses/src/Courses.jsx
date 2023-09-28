import Course from "./Course";

function Courses({ courses, deleteCourse }) {
  return (
    <div className="courseMainDiv">
      {courses.map((course) => {
        return (
          <div className="cardDiv">
            <Course  key={course.id} course={course} deleteCourse={deleteCourse} />
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
