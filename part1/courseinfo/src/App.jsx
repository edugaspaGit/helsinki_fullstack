import { useState } from "react";
import Courses from "./components/Courses";

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React: ",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data: ",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a Component: ",
          exercises: 14,
          id: 3,
        },
        {
          name: "State of a Component 2: ",
          exercises: 5,
          id: 4,
        },
        {
          name: "State of a Component 3: ",
          exercises: 6,
          id: 5,
        },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          name: "Routing: ",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares: ",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      id: 3,
      name: "MongoDB.js",
      parts: [
        {
          name: "Non Relational DataBases: ",
          exercises: 6,
          id: 1,
        },
        {
          name: "Defining Entities: ",
          exercises: 5,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
};

export default App;
