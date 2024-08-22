import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>

    // <div>
    //   <Header course={courses[0]} />
    //   <Content parts={courses[0].parts} />
    //   <Total parts={courses[0].parts} />
    // </div>
  );
};

export default Courses;
