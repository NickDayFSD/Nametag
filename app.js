// define variables and get elements from html
const userName = document.getElementById('user-name');

const defaultName = document.getElementById('name-placeholder');

const nameButton = document.getElementById('name-button');


// create function with event listener to click
nameButton.addEventListener('click', () => {
    defaultName.textContent = userName.value;
})