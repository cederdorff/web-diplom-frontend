let persons = []; // global variable

async function getPersons() {
    const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/web-diplom-frontend/main/_data/persons.json"
    ); // fetch request - fetch data from a given url
    persons = await response.json(); // setting global variable with fetched data
    displayPersons(persons); // calling displayPersons with persons as parameter
}

function displayPersons(listOfPersons) {
    let html = ""; // variable to store html
    //loop through all persons and create an article with content for each
    for (const person of listOfPersons) {
        html += /*html*/ `
            <article>
                <img src="${person.img}">
                <h2>${person.name}</h2>
                <p>${person.title}</p>
                <a href="mailto:${person.mail}">${person.mail}</a>
            </article>
        `; // generate and save html for every person in html variable
    }
    // set grid container content with person <article> elements
    // saved in html
    document.querySelector("#content").innerHTML = html;
}

getPersons(); // execute get persons to start the fun
