const Header = (props) => {
  return <h3>{props.course}</h3>;
};

const Content = (props) => {
  return (
    <div>      
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
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
  return <p>Total {props.exercises1 + props.exercises2 + props.exercises3}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   );
// };

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
