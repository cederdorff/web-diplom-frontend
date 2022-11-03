async function getPerson() {
    const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/web-diplom-frontend/main/_data/persons.json"
    );
    const persons = await response.json();
    console.log(persons);

    for (const person of persons) {
        document.querySelector("#list-persons").innerHTML += /*html*/ `
            <li>${person.name}</li>
        `;
    }
}

getPerson();
