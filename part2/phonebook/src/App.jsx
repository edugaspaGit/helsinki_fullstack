import { useState, useEffect } from "react";
import personService from "../services/persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import "./index.css";

const SuccessMessage = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="success">{message}</div>;
};
const ErrorMessage = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="error">{message}</div>;
};

const App = () => {
  let phonebook = [];

  const [allPersons, setAllPersons] = useState(phonebook);
  const [persons, setPersons] = useState(phonebook);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAllPersons().then((initialPersons) => {
      setAllPersons(initialPersons);
      setPersons(initialPersons);
    });
  }, []);

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
        personService
          .updatePerson(personObject)
          .then((updatedPerson) => {
            setSuccessMessage(`Updated: ${updatedPerson.name}`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
            const updatedPersons = persons.map((p) =>
              p.id === updatedPerson.id ? updatedPerson : p
            );
            setPersons(updatedPersons);
          })
          .catch((error) => {
            const filteredPersons = allPersons.filter(
              (p) => p.id !== personObject.id
            );
            setAllPersons(filteredPersons);
            setPersons(filteredPersons);
            setNewFilter("");
            setErrorMessage(
              `Information of ${personObject.name} has already been removed from the server.`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
      // Create Person
    } else {
      personObject = { name: newName, number: newNumber };
      personService.createPerson(personObject).then((createdPerson) => {
        setAllPersons(allPersons.concat(createdPerson));
        setPersons(allPersons.concat(createdPerson));
        setNewFilter("");
        setSuccessMessage(`Added: ${createdPerson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    }
  };
  const handleDeleteContact = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then((deletedPerson) => {
          let filteredPersons = allPersons.filter(
            (p) => p.id !== deletedPerson.id
          );
          setAllPersons(filteredPersons);

          filteredPersons = allPersons.filter(
            (p) =>
              p.id !== deletedPerson.id &&
              p.name.toLowerCase().includes(newFilter.toLowerCase())
          );
          setPersons(filteredPersons);

          setSuccessMessage(`Deleted: ${deletedPerson.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((error) => {
          let filteredPersons = allPersons.filter((p) => p.id !== person.id);
          setAllPersons(filteredPersons);

          filteredPersons = allPersons.filter(
            (p) =>
              p.id !== person.id &&
              p.name.toLowerCase().includes(newFilter.toLowerCase())
          );
          setPersons(filteredPersons);

          setErrorMessage(
            `Information of ${person.name} has already been removed from the server.`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
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
    setNewFilter(filter);
    const filteredPersons = allPersons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessMessage message={successMessage} />
      <ErrorMessage message={errorMessage} />
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
