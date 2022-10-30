import { persons } from "./data.js";

console.log(persons);

export function displayPersons(listOfPersons) {
    let html = "";
    //loop through all persons and create an article with content for each
    for (const person of listOfPersons) {
        html += /*html*/ `
            <article>
                <img src="${person.img}">
                <h2>${person.name}</h2>
                <p>${person.title}</p>
                <a href="mailto:${person.mail}">${person.mail}</a>
            </article>
        `;
    }
    document.querySelector("#content").innerHTML = html; // set grid container with person <article>-s
}

displayPersons(persons);

function savePerson(event) {
    event.preventDefault(); // prevent form refreshing page
    const form = event.target; // save reference to form in varaiable

    // create new person object based on input values
    const newPerson = {
        name: form.name.value,
        mail: form.mail.value,
        title: form.title.value,
        img: form.url.value
    };

    persons.push(newPerson); // add new peron object to array (persons)
    displayPersons(persons); // make sure to reload all persons
    form.reset(); // reset (clear) input fields
}
// ========== event listeners ========== //
document.querySelector("#save-form").addEventListener("submit", savePerson);
document.querySelector("#search").addEventListener("keyup", search);
document.querySelector("#search").addEventListener("search", search); // clear button
document.querySelector("#sort-by").addEventListener("change", sortPersons);
document.querySelector("#show-lecturers").addEventListener("change", showLecturers);
