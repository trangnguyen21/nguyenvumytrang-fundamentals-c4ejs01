// function generateList(text, callback) {    
//     let array = text.split(' ')
//     let sum = callback(array)
//     console.log(sum)
//     return array
// }

// function calcSum(array){
//     let number = 0
//     for (let i=0; i< array.length; i++){
//         number += Number(array[i])
//     }
//     return number
// }

// let ListNumbers = generateList("2 34 64 24 453 3", calcSum)

// function loop(array, callback){
//     for (let i=0; i<array.length; i+=1){
//         callback(array[i])
//     }
// }

// function print(item){
//     console.log(item)
// }

// loop([1,2,3,4], print)

// function hocbai(action){
//     console.log("hoc bai")
//     return action()
// }

// function diNgu(){
//     console.log("di ngu")
// }
// setTimeout(hocbai(diNgu), 3000)

// function diCho(tacDuong) {
//     return new Promise(function(resolve, reject) {
//         console.log("Đang đi chợ")
//         if (tacDuong == true) {
//             reject("Không đi được")
//         } else {
//             resolve("rau bo xoi")
//         }
//     })
// } 

// async function muado(){
//     try {
//         const item = await diCho(true)
//         console.log(item)
//     } catch (err){
//         console.log(err)
//     }
// }
// muado();
// let result = diCho(true).then(function(item) {
//     console.log(item)
// }).catch(function(reason) {
//     console.log(reason)
// });

// fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members").then(function(response){
//     response.json().then(function(data){
//         console.log(data)
//     })
// })

async function getData() {
    try {
        const response = await fetch("https://sample.mindx.edu.vn/c4e/api/posts")
    const data = await response.json()
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
// getData();

async function postData(data){
    const url1 =  ("https://sample.mindx.edu.vn/c4e/api/posts")
    const response = await fetch(url1, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
}
    // const data = await response.json()
    // return data
    // }
// async function updateData(id, data){
//     const url1 = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
//     await fetch(url1, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-type": "application/json"
//     }
// })
// }
// async function deleteData(id){
//     const url1 = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
//     await fetch(url1, {
//         method: "DELETE",
//         });
//     }
const data1 = {
    title: "Thanh xuân",
    author: "Nguyễn Vũ Mỹ Trang",
    content: "Thanh xuân như một cuộn giấy vệ sinh nhìn thì dày mà dùng tới dùng lui hết lúc nào không hay"
 }
postData(data1);
getData()
// updateData(28, data1);
// deleteData(60);
// getData()
// async function main(){
//     const data1 = {
//     name: "Mỹ Trang",
//     gender: 2,
//     role: "student"
//     };
// }
// main()
// const newData = await postData(data1);
// await updateData(newData.id, data1);
// await deleteData(new.id);
// await getData();
// console.log("Done")


