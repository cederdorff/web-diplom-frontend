const person1 = {
    name: "Birgitte",
    mail: "bki@mail.dk",
    birthDate: "1966-01-14",
    img: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?width=800&height=450"
};

console.log(person1);

const person2 = {
    name: "Martin",
    mail: "mnor@mail.dk",
    birthDate: "1989-05-02",
    img: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?width=800&height=450"
};

console.log(person2);

const person3 = {
    name: "Rasmus",
    mail: "race@mail.dk",
    birthDate: "1990-09-15",
    img: "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?width=800&height=450"
};

console.log(person3);

document.querySelector("#content").innerHTML += /*html*/ `
      <article>
        <img src="${person1.img}">
        <h2>${person1.name}</h2>
        <a href="mailto:${person1.mail}">${person1.mail}</a>
        <p>Birth date: ${person1.birthDate}</p>
      </article>
    `;

document.querySelector("#content").innerHTML += /*html*/ `
      <article>
        <img src="${person2.img}">
        <h2>${person2.name}</h2>
        <a href="mailto:${person2.mail}">${person2.mail}</a>
        <p>Birth date: ${person2.birthDate}</p>
      </article>
    `;

document.querySelector("#content").innerHTML += /*html*/ `
      <article>
        <img src="${person3.img}">
        <h2>${person3.name}</h2>
        <a href="mailto:${person3.mail}">${person3.mail}</a>
        <p>Birth date: ${person3.birthDate}</p>
      </article>
    `;
