// Generate a random number between 0 and 60
const randomNumber = Math.floor(Math.random() * 60); // Math.random() generates a number between 0 and 1 (exclusive), multiplying by 61 gives a number between 0 and 60, and Math.floor() rounds it down to the nearest integer
console.log(randomNumber);
