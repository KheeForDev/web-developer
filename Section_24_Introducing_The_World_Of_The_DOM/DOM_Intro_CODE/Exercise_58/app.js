const container = document.querySelector('#container');

let counter = 1;

while (counter <= 100) {
    const button = document.createElement('button');
    button.innerHTML = "Hey!";

    container.appendChild(button);
    counter++
}