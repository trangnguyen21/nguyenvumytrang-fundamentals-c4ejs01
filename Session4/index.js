// let person = {name: 'Thọ', 
// age: 20, 
// hometown: 'Nha Trang',
// } 
// console.log(person)

// let movie = {
//     name: 'Bắc Kim Thang',
//     year: 2019,
//     type: 'kinh dị',
//     director: 'Trần Hữu Tấn'
//     }
// // console.log(movie)    
// // console.log(movie.name, movie.director)
// // console.log(movie['name'])
// // for (let k in movie ) {
// //     console.log(k, movie[k])
// // }
// // movie.actor = 'Trịnh Tài'
// // movie['actor'] = 'Trịnh Tài'
// // let a = prompt('Enter new key')
// // let b = prompt('Enter new value')
// // movie[a] = b
// // for (let k in movie){
// //     console.log(k, movie[k])
// // 
// movie.name = 'về nhà đi con'
// movie.type = 'tình cảm'
// delete movie.type
// console.log(movie)

// let quizzes = [
//     {
//     question: 'Con nhện có mấy chân',
//     choices: ['1 chân',
//     '2 chân',
//     '3 chân',
//     '6 chân'
// ],
//      answer: 3 
// },
// {
//     question: 'Con gà có mấy chân',
//     choices: ['1 chân',
//     '2 chân',
//     '3 chân',
//     '6 chân'
// ],
//      answer: 1 
// }
// ]
// for (let i=0; i< quizzes.length; i+=1){
//     console.log(quizzes[i].question);
//     let choices = quizzes[i].choices;
//     for (let j=0; j < choices.length; j+=1){
//         console.log(j +1, choices[j])
//     }
//     let userchoice = prompt('Choose your answer')
//     if (userchoice -1 == quizzes[i].answer) {
//         console.log('Hooray')
//     }
//     else {
//         console.log('You are wrong')
//     }
// }   
// console.log(quiz.question)
// for (let i=0; i<quiz.choices.length; i+=1){
//     console.log(i+1, quiz.choices[i])
// }
// let userchoice = prompt('Choose your answer')
// if (userchoice -1 == quiz.answer) {
//     console.log('Hooray')
// }
// else {
//     console.log('You are wrong')
// }

let computer = {
HP: 20,
DELL: 50,
MACBOOK: 12,
ASUS: 30
// }
// console.log(computer.MACBOOK)
// let newkey1 = prompt('Enter new type of computer')
// let newvalue1 = prompt('Enter its quantity')
// computer[newkey1] = newvalue1
// for (let k in computer){
//     console.log(k, computer[k])
}
let newkey2 = prompt('Enter new type of computer')
let newvalue2 = prompt('Enter its quantity')
computer[newkey2] = newvalue2
let sum = 0
for (let i in computer) {
       console.log(i,':', computer[i])
       sum = sum + Number(computer[i])
}
console.log(sum)
computer.FUJITSU = 15
computer.ALIENWARE = 5


