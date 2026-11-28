
const company = "Cynaris Solutions";
let internName = "Monisha";

console.log(`Welcome to ${company}, ${internName}!`);
console.log("Welcome to my HTML5 Responsive Website!");

const heading = document.querySelector(".hero h1");
console.log(heading.textContent);

// Array destructuring

const heading = document.querySelector(".site-header h1");

console.log(heading.textContent);



const skills = ["HTML", "CSS", "JavaScript"];
const [firstSkill, secondSkill, thirdSkill] = skills;
console.log(firstSkill, secondSkill, thirdSkill);

// Object destructuring (renamed to avoid clashing with window.name / window.location)

const intern = {
    name: "Monisha",
    role: "Full Stack Developer Intern",
    location: "Bengaluru"
};
const { name: internFullName, role, location: city } = intern;
console.log(internFullName, role, city);

// Arrow function
const { name, role, location } = intern;

console.log(name, role, location);


const greet = (name) => {
    return `Hello ${name}, welcome!`;
};
console.log(greet("Monisha"));

// filter, map, reduce

const numbers = [10, 20, 30, 40, 50];
console.log("Filtered:", numbers.filter(num => num > 20));
console.log("Mapped:", numbers.map(num => num * 2));
console.log("Total:", numbers.reduce((sum, num) => sum + num, 0));

// Greeting button
// Filter
const filteredNumbers = numbers.filter(num => num > 20);

console.log("Filtered:", filteredNumbers);

// Map
const mappedNumbers = numbers.map(num => num * 2);

console.log("Mapped:", mappedNumbers);

// Reduce
const total = numbers.reduce((sum, num) => sum + num, 0);

console.log("Total:", total);


const button = document.querySelector("#greetingButton");
const message = document.querySelector("#greetingMessage");

button.addEventListener("click", () => {
    message.textContent = greet("Monisha");
});

// Theme toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

});