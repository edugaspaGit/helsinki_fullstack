import { useState } from "react";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      Filter shown with: <input value={value} onChange={onChange} />
    </div>
  );
};
const Input = ({ text, value, onChange }) => {
  return (
    <div>
      {text}
      <input value={value} onChange={onChange} />
    </div>
  );
};
const Button = ({ text, type }) => {
  return (
    <div>
      <button type={type}>{text}</button>
    </div>
  );
};

const PersonForm = ({ onSubmit, input1, input2, button1 }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        text={input1.text}
        value={input1.value}
        onChange={input1.onChange}
      />
      <Input
        text={input2.text}
        value={input2.value}
        onChange={input2.onChange}
      />
      <Button text={button1.text} type={button1.type} />
    </form>
  );
};
const Person = ({ person }) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  );
};
const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

const App = () => {
  const phonebook = [
    { name: "Simón Gasparotto", number: "341-2161088" },
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ];
  const [allPersons, setAllPersons] = useState(phonebook);
  const [persons, setPersons] = useState(phonebook);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleAddContact = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };
    if (allPersons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      setAllPersons(allPersons.concat(personObject));
      setPersons(allPersons.concat(personObject));
    }
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    const filter = event.target.value;
    setNewFilter(filter);
    const personsFiltered = allPersons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setPersons(personsFiltered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter} />
      <h2>Add a New</h2>
      <PersonForm
        onSubmit={handleAddContact}
        input1={{
          text: "Name:",
          value: newName,
          onChange: handleChangeName,
        }}
        input2={{
          text: "Number:",
          value: newNumber,
          onChange: handleChangeNumber,
        }}
        button1={{ type: "submit", text: "Add" }}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
