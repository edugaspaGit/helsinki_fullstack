// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now, a + b);

//   return (
//     <div>
//       <p>Hola Simón, Te Amamos!</p>
//       <p>Hi Simón, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is equal to {a + b}
//       </p>
//     </div>
//   );
// };

// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>
//         Hello world {props.name} {props.address}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <>
//       {/* <div> */}
//       <h1>Greetings</h1>
//       <Hello name="Simón" />
//       <Hello name="Edu" />
//       <Hello name="Viyo" />
//       <Hello name="Nonnita" />
//       <Hello address="3 de Febrero" />
//       {/* </div> */}
//     </>
//   );
// };

// export default App;

const App = () => {
  const friends = ["Peter", 4];
  
  // const friends = [
  //   { name: 'Peter', age: 4 },
  //   { name: 'Maya', age: 10 },
  // ]

  return (
    <div>
      <p>{friends}</p>
      {/* <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p> */}
    </div>
  );
};

export default App;
