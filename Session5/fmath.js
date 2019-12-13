// function generateQuiz(){
//     let x = Math.floor(Math.random()*10)
//     let y = Math.floor(Math.random()*10)
//     let z = Math.floor(Math.random()*2)
//     let res = x + y
//     let dice = Math.random
//     if (dice < 0.5){
//         console.log(`${x} + ${y} = ${res}`)  // string formatting
//         } else {
//         console.log(`${x} + ${y} = ${res+z}`)
// }

// }
// let answer = prompt('T/F')
// function checkAnswer(dice, answer, score){
//     if (dice < 0.5) {
//         if (answer == "T"){
//             return score +1
//         }else {
//             return score -1
//         }
//     } else {
//         if (answer == "T"){
//             return score -1
//         } else {
//             return score +1
//         }
//     }
// }
// let score = 0
// let playing = true
// for (let i =0; i< 10; i+=1){
//     let dice = Math.random()
//     generateQuiz(dice)
//     let answer = prompt('T/F?')
//     if (answer == 'exit'){
//         playing = false
//     } else {let score = checkAnswer(dice, answer, score)
//         console.log(score)
//     }
// }


// function filterOdd(array){
//     let newArray = []
//      for (let i=0; i<array.length; i+=1){
//          if (array[i] %2 ==0){
//              newArray.push(array[i])
//          }
//      }
//      return newArray
// }
// let res = filterOdd([1,4,5,7,10])
// console.log(res)


function Removespace(stringabc){
    let newstringabc = ''
    for (let index =0; index< stringabc.length; index++){
        if (stringabc[index] !== " "){
            newstringabc += stringabc[index]
        }else {
            newstringabc = "";
        }
    } 
    return newstringabc
}
let result = Removespace('Ai ma 89 không biết')
console.log(result)

