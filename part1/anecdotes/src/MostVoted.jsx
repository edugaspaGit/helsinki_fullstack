const MostVoted = ({ anecdotes, votes }) => {
  const hasNonZeroElement = votes.some((element) => element !== 0);
  if (hasNonZeroElement === false) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <div>No votes provided yet.</div>
      </div>
    );
  }
  let votesMax = votes[0];
  let voteMaxIndex = 0;
  
  for (let index = 1; index < votes.length; index++) {
    if (votesMax < votes[index]) {
      votesMax = votes[index];
      voteMaxIndex = index;
    }
  }

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[voteMaxIndex]}</div>
    </div>
  );
};

export default MostVoted;
