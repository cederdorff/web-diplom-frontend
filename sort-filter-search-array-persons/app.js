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
    },
    {
        name: "Anne Kirketerp",
        mail: "anki@mail.dk",
        title: "Head of Department",
        img: "https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?width=800&height=450"
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

// function search(event) {
//     const searchValue = event.target.value.toLowerCase(); // value from input
//     const results = []; // empty array to hold matches
//     for (const person of persons) {
//         // loop trhough all persons (global variable)
//         const name = person.name.toLowerCase(); // make sure name is lower case
//         if (name.includes(searchValue)) {
//             // test if name includes a part of the searchValue
//             results.push(person); // if includes, add the persons to the result array
//         }
//     }
//     displayPersons(results); // call displayPersons with the results
// }

// function search(event) {
//     const searchValue = event.target.value.toLowerCase(); // input text to lower case
//     const results = persons.filter(function (person) {
//         return person.name.toLowerCase().includes(searchValue);
//     });
//     displayPersons(results); // call displayPersons with the filtered results
// }

// with arrow function
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
        //if checked, show all persons
        displayPersons(persons);
    } else {
        // else (if not checked) filter persons
        // all persons that are not "Lecturer" will be saved in results
        const results = persons.filter(person => person.title !== "Lecturer");
        displayPersons(results);
    }
}

// ====== Event Listeners ====== //
document.querySelector("#save-form").addEventListener("submit", savePerson);
document.querySelector("#search").addEventListener("keyup", search);
document.querySelector("#search").addEventListener("search", search); // clear button
document.querySelector("#sort-by").addEventListener("change", sortPersons);
document.querySelector("#show-lecturers").addEventListener("change", showLecturers);
