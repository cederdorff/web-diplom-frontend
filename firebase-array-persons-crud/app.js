// ========== global variables ========== //
const endpoint = "https://race-crud-rest-default-rtdb.firebaseio.com"; // url to endpoint / firebase REST API
let persons = []; // to hold all users (persons) from firebase
let selectedPersonId;

async function getPersons() {
    const res = await fetch(`${endpoint}/users.json`); // read all users (persons) from firebase
    const data = await res.json(); // parse from json to javascript data
    persons = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
    displayPersons(persons); // call displayPersons with persons as argument.
}

getPersons(); // execute getPersons to start your app

function displayPersons(listOfPersons) {
    let html = "";
    //loop through all persons and create an article with content for each
    for (const person of listOfPersons) {
        html += /*html*/ `
            <article>
                <img src="${person.image}">
                <h2>${person.name}</h2>
                <p>${person.title}</p>
                <a href="mailto:${person.mail}">${person.mail}</a>
                <div class="btns">
                    <button class="btn-update-user" data-id="${person.id}">Update</button>
                    <button class="btn-delete-user" data-id="${person.id}">Delete</button>
                </div>
            </article>
        `;
    }
    document.querySelector("#content").innerHTML = html; // set grid container with person <article>-s
    addUpdateDeleteEvents();
}

async function savePerson(event) {
    event.preventDefault(); // prevent form refreshing page
    const form = event.target; // save reference to form in varaiable

    // create new person object based on input values
    const newPerson = {
        name: form.name.value,
        mail: form.mail.value,
        title: form.title.value,
        image: form.url.value
    };

    const personAsJson = JSON.stringify(newPerson);
    // add new persons to database with fetch (POST)
    await fetch(`${endpoint}/users.json`, { method: "POST", body: personAsJson });
    getPersons(); // call getPersons to get the all persons including the new one. getPersons will also call displayPersons
    form.reset(); // reset (clear) input fields
}

// search with filter and arrow function
function search(event) {
    const searchValue = event.target.value.toLowerCase(); // input text to lower case
    const results = persons.filter(person => person.name.toLowerCase().includes(searchValue));
    displayPersons(results); // call displayPersons with the filtered results
}

function sortPersons(event) {
    //event.target.value is the value of the selected option in the select (dropdown)
    const option = event.target.value;
    if (option === "name") {
        //if option "name" is selected
        persons.sort((person1, person2) => person1.name.localeCompare(person2.name));
    } else if (option === "title") {
        //if option "title" is selected
        persons.sort((person1, person2) => person1.title.localeCompare(person2.title));
    }
    displayPersons(persons);
}

function showLecturers(event) {
    //event.target.checked is true or false
    //based on checkbox is checked or not checked
    const showLecturers = event.target.checked;
    if (showLecturers) {
        //if checked, show Lecturers only
        // all persons that are "Lecturer" will be saved in results
        const results = persons.filter(person => person.title === "Lecturer");
        displayPersons(results);
    } else {
        // else (if not checked), show all persons
        displayPersons(persons);
    }
}

function selectPerson(event) {
    selectedPersonId = event.target.getAttribute("data-id");
    console.log(selectedPersonId);

    const person = persons.find(person => person.id === selectedPersonId);
    console.log(person);

    const form = document.querySelector("#form-update");
    form.name.value = person.name;
    form.mail.value = person.mail;
    form.title.value = person.title;
    form.url.value = person.image;
    form.scrollIntoView({ behavior: "smooth" });
}

async function updatePerson(event) {
    event.preventDefault(); // prevent form refreshing page
    const form = event.target; // save reference to form in varaiable

    const personToUpdate = {
        name: form.name.value,
        mail: form.mail.value,
        title: form.title.value,
        image: form.url.value
    };

    const personAsJSON = JSON.stringify(personToUpdate);
    // update person using the id of the person
    await fetch(`${endpoint}/users/${selectedPersonId}.json`, { method: "PUT", body: personAsJSON });
    getPersons(); // call getPersons to get the all persons including the updated one
    form.reset(); // reset (clear) input fields
}
async function deletePerson(event) {
    const id = event.target.getAttribute("data-id"); // id of person you want to delete
    await fetch(`${endpoint}/users/${id}.json`, { method: "DELETE" });
    getPersons(); // call getPersons to get the all persons including the updated one
}

// ====== Event Listeners ====== //
document.querySelector("#form-create").addEventListener("submit", savePerson);
document.querySelector("#search").addEventListener("keyup", search);
document.querySelector("#search").addEventListener("search", search); // clear button
document.querySelector("#sort-by").addEventListener("change", sortPersons);
document.querySelector("#show-lecturers").addEventListener("change", showLecturers);
document.querySelector("#form-update").addEventListener("submit", updatePerson);

function addUpdateDeleteEvents() {
    //delete event
    document.querySelectorAll(".btn-delete-user").forEach(btn => btn.addEventListener("click", deletePerson));
    //update event
    document.querySelectorAll(".btn-update-user").forEach(btn => btn.addEventListener("click", selectPerson));
}
