const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spanList = document.querySelectorAll('span')

for (let i = 0; i < colors.length; i++) {
    spanList[i].style.color = colors[i]
}