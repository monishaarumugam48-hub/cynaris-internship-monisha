// ES6 Variables

const company = "Cynaris Solutions";
let internName = "Monisha";

console.log(`Welcome to ${company}, ${internName}!`);

console.log("Welcome to my HTML5 Responsive Website!");

// Select HTML Heading

const heading = document.querySelector(".site-header h1");

console.log(heading.textContent);

// Array Destructuring

const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill, secondSkill, thirdSkill);

// Object Destructuring

const intern = {
    name: "Monisha",
    role: "Full Stack Developer Intern",
    location: "Bengaluru"
};

const { name, role, location } = intern;

console.log(name, role, location);

// Arrow Function

const greet = (name) => {
    return `Hello ${name}, welcome!`;
};

console.log(greet("Monisha"));

// Filter, Map and Reduce

const numbers = [10, 20, 30, 40, 50];

// Filter numbers greater than 20

const filteredNumbers = numbers.filter(num => num > 20);

console.log("Filtered:", filteredNumbers);

// Multiply each number by 2

const mappedNumbers = numbers.map(num => num * 2);

console.log("Mapped:", mappedNumbers);

// Calculate total

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log("Total:", total);

// Interactive Button

const button = document.querySelector("#greetingButton");

const message = document.querySelector("#greetingMessage");

button.addEventListener("click", () => {

    message.textContent = greet("Monisha");

});