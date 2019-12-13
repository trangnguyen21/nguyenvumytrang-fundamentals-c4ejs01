const title = document.getElementById('title')
// const content = document.getElementsByClassName('content')
// console.log(contentElements)
// console.dir(title)
console.log(title)
title.innerText = 'DOM'
// for (let i=0; i<contentElements.length; i++) {
//     consoleElements[i].innerText = 'Dom content'
// }
// const tag = document.getElementsByTagName('tag')
// console.log(tagElements)
// title.style.color = 'red'

// title.addEventListener('click',function(){
//     title.style.color = 'red'
    
// })
// title.addEventListener('mouseover', function(){
//     if (title.style.color == 'red') {
//         title.style.color ='blue';
        
//     } 
//     else {
//         title.style.color = 'red'
//     }
// })
function action(e) {
    console.log(e)
    const number = Number(e.target.nextElementSibling.innerText)
    // e.target.innerText = number + 1 
    e.target.nextElementSibling.innerText = number + 1
}

const numbersElement = document.getElementsByClassName('content');
for (let i=0; i<numbersElement.length; i+=1){
    numbersElement[i].addEventListener('click', action);
}
let count = 0
const button = document.getElementById('button')
button.addEventListener ('click', function(e){
    const container = document.getElementById('container')
    container.innerHTML += `<p>` + count + `</p>`
    count += 1
})