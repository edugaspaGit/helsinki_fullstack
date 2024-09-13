import { useState } from "react";

const Button = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};

const MostVoted = ({ anecdotes, votes }) => {
  const maxVote = Math.max(...votes);
  const position = votes.indexOf(maxVote);
  console.log(votes);

  if (maxVote === 0) return <div>No votes received yet.</div>;
  return <div>{anecdotes[position]}</div>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const handleSelected = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  };

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <div>{anecdotes[selected]}</div>
      <p />
      <Button onClick={handleVote} title="Vote" />
      <Button onClick={handleSelected} title="Next Anecdote" />
      <h2>Anecdote with most votes</h2>
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
};
export default App;
