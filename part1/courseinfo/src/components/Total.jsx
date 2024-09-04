const Total = ({ parts }) => {
  let totalParts = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p>
        <strong>Number of Exercises: {totalParts}</strong>
      </p>
    </>
  );
};

export default Total;
