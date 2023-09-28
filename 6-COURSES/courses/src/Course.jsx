function Course({ course, deleteCourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{course.title}</h2>
        <h4 className="cardPrice">{course.price}</h4> 
      </div>
       <p>{course.desc}</p>

      <button
        className="cardDeleteBtn"
        onClick={() => {
          deleteCourse(course.id);
        }}
      >
        sil
      </button>
    </div>
  );
}

export default Course;
