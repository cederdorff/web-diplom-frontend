// ========== imports ========== //
import { persons } from "./data.js";
import { displayPersons } from "./app.js";

// ========== helper functions ========== //

export function search(event) {
    const searchValue = event.target.value.toLowerCase();
    const results = persons.filter(person => person.name.toLowerCase().includes(searchValue));
    displayPersons(results);
}

export function sortPersons(event) {
    const option = event.target.value;
    if (option === "name") {
        console.log("sort by name");
        persons.sort((person1, person2) => person1.name.localeCompare(person2.name));
    } else if (option === "title") {
        console.log("sort by title");
        persons.sort((person1, person2) => person1.title.localeCompare(person2.title));
    }
    displayPersons(persons);
}

export function showLecturers(event) {
    const showLecturers = event.target.checked;
    console.log(showLecturers);

    if (showLecturers) {
        displayPersons(persons);
    } else {
        const results = persons.filter(person => person.title === "Senior Lecturer");
        displayPersons(results);
    }
}
