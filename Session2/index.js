// let yob = prompt('enter your yob')
    // let age = 2019 - yob
    // console.log(age)
    // if(age < 16) {
    //     console.log('Get Out')
    // }
    // else if(age < 18){
    //     console.log('No entry allowed')
    // }
    // else{
    //     console.log('Welcome')
    // }
    // let random = Math.random(0, 100)
    // let intrandom = Math.ceil(random*100)
    // console.log(intrandom)
    // if(intrandom < 30) {
    //     console.log('Rainy')
    // }
    // else if (intrandom < 60) {
    //     console.log('Cloudy')
    // }
    // else{
    //     console.log('Sunny')
    // }
// let menu = ['Bún đậu', 'pho', 'bun cha']
// let newMonan = 'chả cốm'
// menu.push(newMonan)
// menu.push(newMonan) // create
// let n = menu.length
// for(let i = 0; i<n; i+=1){
//     console.log(menu[i])
//     // menu[i] = 'bún thang'
// }
// console.log(menu)
// let h = menu.slice(0, 3)
// console.log(h)
// menu = menu.splice(0, 1)
// console.log(menu)

let shop = prompt('Khach can gi')
let closet = ['giay', 'miniskirt', 'giep', 'ao thun']
let itemforsale = 'quan que'
closet.push(itemforsale)
if(shop ==1) {
    console.log(closet)
}
else if (shop ==2){
    console.log(closet)
}
else if (shop ==3) {
    let h = closet.splice(0, 3)
    console.log(closet)
}
else closet[0] = 'trouser'
    console.log(closet)

