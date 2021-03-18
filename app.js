// define variables and get elements from html
const userName = document.getElementById('user-name');
console.log(userName);
const defaultName = document.getElementById('name-placeholder');
console.log(defaultName);
const nameButton = document.getElementById('name-button');
console.log(nameButton);

// create function with event listener to click
nameButton.addEventListener('click', () => {
    defaultName.textContent = userName.value;
})