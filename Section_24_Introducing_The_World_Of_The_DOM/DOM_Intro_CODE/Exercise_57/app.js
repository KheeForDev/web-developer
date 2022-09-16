// WRITE YOUR CODE IN HERE:
const liList = document.querySelectorAll('ul > li')

for (let li of liList) {
    if (li.classList.contains('highlight')) {
        li.classList.remove('highlight')
    } else {
        li.classList.add('highlight')
    }
}