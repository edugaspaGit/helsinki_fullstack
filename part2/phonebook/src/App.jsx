import { useState, useEffect } from "react";
import axios from "axios";
import personService from "../services/persons";

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
const Person = ({ person, onClick }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => onClick(person)}>delete</button>
    </div>
  );
};
const Persons = ({ persons, deleteContact }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.name} person={person} onClick={deleteContact} />
      ))}
    </div>
  );
};

const App = () => {
  let phonebook = [];

  const [allPersons, setAllPersons] = useState(phonebook);
  const [persons, setPersons] = useState(phonebook);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personService.getAllPersons().then((initialPersons) => {
      setAllPersons(initialPersons);
      setPersons(initialPersons);
    });
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   setAllPersons(response.data);
    //   setPersons(response.data);
    // });
  }, []);

  // const handleAddContact = (event) => {
  //   event.preventDefault();
  //   const personObject = { name: newName, number: newNumber };

  //   if (allPersons.some((person) => person.name === newName)) {
  //     alert(`${newName} is already added to the phonebook.`);
  //   } else {
  //     personService.createPerson(personObject).then((createdPerson) => {
  //       setAllPersons(allPersons.concat(createdPerson));
  //       setPersons(allPersons.concat(createdPerson));
  //     });
  // };

  const handleUpdateContacts = (event) => {
    event.preventDefault();
    let personObject;
    // Update Person
    if (allPersons.some((person) => person.name === newName)) {
      personObject = persons.find((p) => p.name === newName);
      personObject.number = newNumber;
      if (
        window.confirm(
          `${personObject.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        personService.updatePerson(personObject).then((updatedPerson) => {
          const updatedPersons = persons.map((p) =>
            p.id === updatedPerson.id ? updatedPerson : p
          );
          setPersons(updatedPersons);
        });
      }
      // Create Person      
    } else {
      personObject = { name: newName, number: newNumber };
      personService.createPerson(personObject).then((createdPerson) => {
        setAllPersons(allPersons.concat(createdPerson));
        setPersons(allPersons.concat(createdPerson));
      });
    }
  };
  const handleDeleteContact = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id).then((deletedPerson) => {
        const filteredPersons = persons.filter(
          (p) => p.id !== deletedPerson.id
        );
        setAllPersons(filteredPersons);
        setPersons(filteredPersons);
      });
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
    console.log(allPersons, filter);

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
        onSubmit={handleUpdateContacts}
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
      <Persons persons={persons} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
