let persons = [
    {
        name: "Birgitte Kirk Iversen",
        mail: "bki@mail.dk",
        title: "Senior Lecturer",
        img: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?width=800&height=450"
    },
    {
        name: "Martin Aagaard Nøhr",
        mail: "mnor@mail.dk",
        title: "Lecturer",
        img: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?width=800&height=450"
    },
    {
        name: "Rasmus Cederdorff",
        mail: "race@mail.dk",
        title: "Senior Lecturer",
        img: "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?width=800&height=450"
    },
    {
        name: "Dan Okkels Brendstrup",
        mail: "dob@mail.dk",
        title: "Lecturer",
        img: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?width=800&height=450"
    }
];

console.log(persons);

function displayPersons() {
    // reset  <section id="content" class="grid-container">...</section>
    document.querySelector("#content").innerHTML = "";
    //loop through all persons and create an article with content for each
    for (const person of persons) {
        document.querySelector("#content").insertAdjacentHTML(
            "beforeend",
            /*html*/ `
            <article>
                <img src="${person.img}">
                <h2>${person.name}</h2>
                <p>${person.title}</p>
                <a href="mailto:${person.mail}">${person.mail}</a>
            </article>
        `
        );
        document
            .querySelector("#content article:last-child")
            .addEventListener("click", () => deletePerson(person));
    }
}

displayPersons();

function deletePerson(person) {
    console.log(person);
    persons = persons.filter(item => item != person);
    displayPersons();
}
