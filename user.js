const user = {
  name: "Jaya Tiwari",
  age: 22,
  email: "jaya@tiwari.com"
};

const container = document.getElementById("userInfo");

const nameElem = document.createElement("p");
nameElem.textContent = `Name: ${user.name}`;

const ageElem = document.createElement("p");
ageElem.textContent = `Age: ${user.age}`;

const emailElem = document.createElement("p");
emailElem.textContent = `Email: ${user.email}`;

container.appendChild(nameElem);
container.appendChild(ageElem);
container.appendChild(emailElem);
