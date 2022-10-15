"use strict"; // to enable strict mode and modern JavaScript functionality

function showAlert() {
    alert("Open your Developer Console!");
}

// declare yourself as an object
let person = {
    name: "Rasmus Cederdorff",
    initials: "race",
    age: 32,
    city: "Aarhus C",
    education: "Master of Science in IT",
    whyMDU: "The combination of design and programming",
    expectations: "Prepare you for the real world.",
    specialisation: "I speak JavaScript",
    dreamJob: "Frontend Developer at Apple Inc (or Senior Lecturer)",
    funFacts: "My socks often match color combinations in my clothes.",
    image: "https://cederdorff.com/img/rasmus_new.webp",
    web: "https://cederdorff.com",
    instagram: "https://instagram.com/cederdorff/",
    linkedIn: "https://www.linkedin.com/in/cederdorff/"
};

console.log(person);

// append the object to the DOM
document.querySelector("#content").innerHTML += /*html*/ `
    <article>
      <img src='${person.image}'>
      <h2>${person.name}</h2>
      <p>${person.age} years old</p>
      <a href='${person.web}'>${person.web}</a>
    </article>
`;
