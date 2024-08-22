import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  //the average score (good: 1, neutral: 0, bad: -1)
  const average = (good - bad) / 3;
  let positivePerc = 0;
  if (total != 0) {
    positivePerc = (good / total) * 100;
  }

  if (total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine value={good} text="good " />
          </tr>
          <tr>
            <StatisticLine value={neutral} text="neutral " />
          </tr>
          <tr>
            <StatisticLine value={bad} text="bad " />
          </tr>
          <tr>
            <StatisticLine value={total} text="total " />
          </tr>
          <tr>
            <StatisticLine value={average.toFixed(2)} text="average " />
          </tr>
          <tr>
            <StatisticLine value={positivePerc.toFixed(2) + " %"} text="positive " />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
