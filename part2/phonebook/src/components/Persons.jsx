import Person from "./Person";
const Persons = ({ persons, deleteContact }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.name} person={person} onClick={deleteContact} />
      ))}
    </div>
  );
};
export default Persons;
