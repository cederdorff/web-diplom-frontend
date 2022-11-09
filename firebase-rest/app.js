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
    console.log(res);
}

// === UPDATE (PUT) === //
async function updateUser(id, name, mail, image) {
    const userToUpdate = { name, mail, image };
    const userAsJson = JSON.stringify(userToUpdate);
    const res = await fetch(`${endpoint}/users/${id}.json`, { method: "PUT", body: userAsJson });
    console.log(res);
}

// === DELETE (DELETE) === //
async function deleteUser(id) {
    const res = await fetch(`${endpoint}/users/${id}.json`, { method: "DELETE" });
    console.log(res);
}

// ====== REST SERVICE END ====== //

// === INITIALIZE APP === //

async function initApp() {
    const users = await getUsers();
    console.log(users);

    const userRace = await getUser("fTs84KRoYw5pRZEWCq2Z");
    console.log(userRace);
}

initApp();

// ====== INITIALIZE APP END ====== //
