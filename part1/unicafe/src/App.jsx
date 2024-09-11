import { useState } from "react";

const Button = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = good - bad;
  let positive = 0;
  if (all != 0) {
    positive = (good / all)*100;
  }

  if (all === 0) {
    return <h4>No feedback given</h4>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good: " value={good} />
          <StatisticLine text="Neutral: " value={neutral} />
          <StatisticLine text="Bad: " value={bad} />
          <StatisticLine text="All: " value={all} />
          <StatisticLine text="Average: " value={average} />
          <StatisticLine text="Positive: " value={positive.toFixed(2) + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGood} title="Good" />
      <Button onClick={handleNeutral} title="Neutral" />
      <Button onClick={handleBad} title="Bad" />
      <h2>Statistics</h2>
      <p />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
