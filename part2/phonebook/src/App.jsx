import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNr: "0303456-0303456" },
    { name: "Edu Gaspa", phoneNr: "0303456-0303456" },
    { name: "Viyo Le", phoneNr: "0303456-0303456" },
    { name: "Simón Pedro", phoneNr: "0303456-0303456" },
  ]);

  const [filteredPersons, setFilteredPersons] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newPhoneNr, setNewPhoneNr] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNrChange = (event) => {
    setNewPhoneNr(event.target.value);
  };

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setNameFilter(filter);

    const personsFiltered =
      filter.length === 0
        ? persons
        : persons.filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          );

    setFilteredPersons(personsFiltered);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (!persons.some((person) => person.name === newName)) {
      const personObject = { name: newName, phoneNr: newPhoneNr };
      setPersons(persons.concat(personObject));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName("");
    setNewPhoneNr("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <input value={nameFilter} onChange={handleFilterChange} />
      </div>
      <h2>New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone Number:
          <input value={newPhoneNr} onChange={handlePhoneNrChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.phoneNr}
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
