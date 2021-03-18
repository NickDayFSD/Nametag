// define variables and get elements from html
const userName = document.getElementById('user-name');

const defaultName = document.getElementById('name-placeholder');

const nameButton = document.getElementById('name-button');


// create function with event listener to click
nameButton.addEventListener('click', () => {
    defaultName.textContent = userName.value;
})

// define variables for color buttons and color
const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const redButton = document.getElementById('red-button');
console.log(blueButton);
// define variable for nametag color
const topNametag = document.getElementById('top-nametag');
const botNametag = document.getElementById('bot-nametag');

// create functions for buttons
redButton.addEventListener("click", () => {
    topNametag.style.backgroundColor  = 'red';
    botNametag.style.backgroundColor  = 'red';
})

blueButton.addEventListener("click", () => {
    topNametag.style.backgroundColor  = 'blue';
    botNametag.style.backgroundColor  = 'blue';
})

greenButton.addEventListener("click", () => {
    topNametag.style.backgroundColor  = 'green';
    botNametag.style.backgroundColor  = 'green';
})