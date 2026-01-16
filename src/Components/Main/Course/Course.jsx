import "./Course.css";
import { courses } from "../../../courseData";

function Course() {
  console.log(courses);

  return (
    <div className="course">
      <div className="course__container container">
        <h2 className="course__title">Welcome to the Frontend Course...</h2>
        <div className="course__cards">
          {courses.map((course) => {
            return (
              <div className="course__cards--card" key={course.id}>
                <div className="course__cards--imgs">
                  <img className="course__cards--img" src={course.img} alt="" />
                </div>
                <h3 className="course__cards--title">{course.shortTitle}</h3>
                <p className="course__cards--subtitle">{course.description}</p>
                <button className="course__cards--btn">Click Me</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;
