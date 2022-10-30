const persons = [
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

function displayPersons(listOfPersons) {
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

function search(event) {
    console.log(event);
    const searchValue = event.target.value.toLowerCase();
    console.log(searchValue);

    const results = [];

    for (const person of persons) {
        const name = person.name.toLowerCase();
        if (name.includes(searchValue)) {
            results.push(person);
        }
    }
    displayPersons(results);
}

// ====== Event Listeners ====== //
document.querySelector("#save-form").addEventListener("submit", savePerson);
document.querySelector("#search").addEventListener("keyup", search);
