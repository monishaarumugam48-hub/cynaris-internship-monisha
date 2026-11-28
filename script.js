
const company = "Cynaris Solutions";
let internName = "Monisha";

console.log(`Welcome to ${company}, ${internName}!`);

console.log("Welcome to my HTML5 Responsive Website!");


const heading = document.querySelector(".site-header h1");

console.log(heading.textContent);



const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill, secondSkill, thirdSkill);


const intern = {
    name: "Monisha",
    role: "Full Stack Developer Intern",
    location: "Bengaluru"
};

const { name, role, location } = intern;

console.log(name, role, location);


const greet = (name) => {
    return `Hello ${name}, welcome!`;
};

console.log(greet("Monisha"));


const numbers = [10, 20, 30, 40, 50];

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

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

});