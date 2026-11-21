// 1. ES6 Variables
const company = "Cynaris Solutions";
let internName = "Monisha";

console.log(`Welcome to ${company}, ${internName}!`);

// 2. Array Destructuring
const skills = ["HTML", "CSS", "JavaScript"];
const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill, secondSkill, thirdSkill);

// 3. Object Destructuring
const intern = {
    name: "Monisha",
    role: "Full Stack Developer Intern",
    location: "Bengaluru"
};

const { name, role, location } = intern;

console.log(name, role, location);

// 4. Arrow Function
const greet = (name) => {
    return `Hello ${name}, welcome!`;
};

console.log(greet("Monisha"));

// 5. filter(), map(), reduce()
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

// 6. Interactive Component using Event Listener
const button = document.createElement("button");

button.textContent = "Click Me";

button.addEventListener("click", () => {
    alert("Welcome to JavaScript ES6+!");
});

document.body.appendChild(button);