
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let paan;
paan = 'Betelnut';
if(paan === 'Calcutti Saada') {
    alert('Jee haan!');
} else {
    alert('Banarasi try kijiye aaj');
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

document.querySelector('html').onclick = function() {
    alert('Oops! You clicked the html element');
}


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Zk6TR5k.jpg') {
        myImage.setAttribute('src', 'images/XwZEjPe.jpg');
    } else {
        myImage.setAttribute('src', 'images/Zk6TR5k.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' is a monkay';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' is a monkay';
}

myButton.onclick = function() {
    setUserName();
}

*/