import { useState } from "react";
import Button from "./Button";
import MostVoted from "./MostVoted";

function App() {
  const [selected, setSelected] = useState(0);

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

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const nrOfAnecdotes = anecdotes.length - 1;

  const handleVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;        
    setVotes(votesCopy);
  };

  const handleSelected = (max) => {
    const position = Math.floor(Math.random() * max);
    setSelected(position);
  };

   return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>
        <Button onClick={handleVote} text="Vote" />
        <Button
          onClick={() => handleSelected(nrOfAnecdotes)}
          text="Next anecdote"
        />
      </p>      
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
}
export default App;
