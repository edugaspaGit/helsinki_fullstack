const Header = (props) => {
  return <h3>{props.course}</h3>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Total{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },

      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

// import { useState } from "react";
// import Courses from "./components/Courses";

// const App = () => {
//   const courses = [
//     {
//       id: 1,
//       name: "Half Stack application development",
//       parts: [
//         {
//           name: "Fundamentals of React: ",
//           exercises: 10,
//           id: 1,
//         },
//         {
//           name: "Using props to pass data: ",
//           exercises: 7,
//           id: 2,
//         },
//         {
//           name: "State of a Component: ",
//           exercises: 14,
//           id: 3,
//         },
//         {
//           name: "State of a Component 2: ",
//           exercises: 5,
//           id: 4,
//         },
//         {
//           name: "State of a Component 3: ",
//           exercises: 6,
//           id: 5,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Node.js",
//       parts: [
//         {
//           name: "Routing: ",
//           exercises: 3,
//           id: 1,
//         },
//         {
//           name: "Middlewares: ",
//           exercises: 7,
//           id: 2,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "MongoDB.js",
//       parts: [
//         {
//           name: "Non Relational DataBases: ",
//           exercises: 6,
//           id: 1,
//         },
//         {
//           name: "Defining Entities: ",
//           exercises: 5,
//           id: 2,
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <Courses courses={courses} />
//     </div>
//   );
// };

// export default App;
