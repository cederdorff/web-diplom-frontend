const persons = [
    {
        name: "Birgitte",
        mail: "bki@mail.dk",
        birthDate: "1966-01-14",
        img: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?width=800&height=450"
    },
    {
        name: "Martin",
        mail: "mnor@mail.dk",
        birthDate: "1989-05-02",
        img: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?width=800&height=450"
    },
    {
        name: "Rasmus",
        mail: "race@mail.dk",
        birthDate: "1990-09-15",
        img: "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?width=800&height=450"
    }
];

console.log(persons);

for (const person of persons) {
    document.querySelector("#content").innerHTML += /*html*/ `
      <article>
        <img src="${person.img}">
        <h2>${person.name}</h2>
        <a href="mailto:${person.mail}">${person.mail}</a>
        <p>Birth date: ${person.birthDate}</p>
      </article>
    `;
}
