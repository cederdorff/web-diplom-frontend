// ====== REST SERVICE ("model") ====== //
const endpoint = "https://race-crud-rest-default-rtdb.firebaseio.com";

// === READ (GET all users) === //
async function getUsers() {
    const res = await fetch(`${endpoint}/users.json`);
    const data = await res.json();
    const userList = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
    return userList;
}

// === READ (GET one user based on an id) === //
async function getUser(id) {
    const res = await fetch(`${endpoint}/users/${id}.json`);
    const data = await res.json();
    return data;
}

// === CREATE (POST) === //
async function createUser(name, mail, image) {
    const newUser = { name, mail, image };
    const userAsJson = JSON.stringify(newUser);
    const res = await fetch(`${endpoint}/users.json`, { method: "POST", body: userAsJson });
    const data = await res.json();
    console.log(data);
}

// === UPDATE (PUT) === //
async function updateUser(id, name, mail, image) {
    const userToUpdate = { name, mail, image };
    const userAsJson = JSON.stringify(userToUpdate);
    const res = await fetch(`${endpoint}/users/${id}.json`, { method: "PUT", body: userAsJson });
    const data = await res.json();
    console.log(data);
}

// === DELETE (DELETE) === //
async function deleteUser(id) {
    const res = await fetch(`${endpoint}/users/${id}.json`, { method: "DELETE" });
    console.log(res);
}

// ====== REST SERVICE END ====== //

// === INITIALIZE APP === //

async function initApp() {
    console.log("All Users");
    const users = await getUsers();
    console.log(users);

    console.log("One user (user id: 'fTs84KRoYw5pRZEWCq2Z')");
    const userRace = await getUser("fTs84KRoYw5pRZEWCq2Z");
    console.log(userRace);

    // createUser("Mads Madsen", "mads@madsen.dk", "https://www.madsmadsen.dk/images/Mads-Madsen-Image-19.png");
    // deleteUser("-NGQodO_BsJTuvBTfpOl");

    // updateUser(
    //     "-NGQooDzCbSUy_c0S1cf",
    //     "Mads Petersen",
    //     "mads@petersen.dk",
    //     "https://www.madsmadsen.dk/images/Mads-Madsen-Image-19.png"
    // );
}

initApp();

// ====== INITIALIZE APP END ====== //
