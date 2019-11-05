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

// let computer = {
// HP: 20,
// DELL: 50,
// MACBOOK: 12,
// ASUS: 30
// }
// // console.log(computer.MACBOOK)
// // let newkey1 = prompt('Enter new type of computer')
// // let newvalue1 = prompt('Enter its quantity')
// // computer[newkey1] = newvalue1
// // for (let k in computer){
// //     console.log(k, computer[k])
// // }
// // let newkey2 = prompt('Enter new type of computer')
// // let newvalue2 = Number(prompt('Enter its quantity'))
// // computer[newkey2] = newvalue2
// // let sum = 0
// // for (let i in computer) {
// //        console.log(i,':', computer[i])
// //        sum = sum + Number(computer[i])
// // }
// // console.log(sum)
// computer.TOSHIBA = 10
// computer.FUJITSU = 15
// computer.ALIENWARE = 5
// computer.ACER = 10
// console.log(computer)
// let price = {HP: 600,
//        DELL: 650,
//        MACBOOK: 12000,
//        ASUS: 400,
//        ACER: 350,
//        TOSHIBA: 600,
//        FUJITSU: 900,
//        ALIENWARE: 1000}
// Part 4
// // console.log(price)
// // console.log(price.ASUS)
// // let newkey3 = prompt('Enter model')
// // console.log(price[newkey3])

// Part 5
// let sum1 = 5 * price.ASUS
// console.log(sum1)
// let Invoice2 
// let newkey4 = prompt('Enter model to sell')
// let newvalue4 = Number(prompt('Enter quantity to sell'))
// Invoice2 = newvalue4 * price[newkey4]
// console.log(Invoice2)
// computer[newkey4] -= newvalue4
// console.log(computer)

// Part 6
// let sumEach = 0
// // for (let j in price){
// //        console.log(computer[j],price[j])
// //        sumEach = computer[j] * price[j]
// //        console.log(j, ':', sumEach)
// // }
// for (let k in price){
//        sumEach = sumEach + (computer[k] * price[k])
// }
// console.log(sumEach)

// Part 7
// let Character = {
//        Name: 'Light',
//        Age: 17,
//        Strength: 8,
//        Defense: 10,
//        HP: 100,
//        Backpack: ['Shield', 'Bread Loaf'],
//        Gold: 100,
//        Level: 2,
// }
// Character.Gold += 50
// Character.Backpack.push('Flinstone')
// Character.Pocket = ['Flashlight', 'MonsterDev']
// console.log(Character)

// Part 8
// let Skill = [
//        {Name: 'Tackle',
//        Minimumlevel: 1,
//        Damage: 5,
//        Hitrate: 0.3
//        },
//        {Name: 'Quick attack',
//        Minimumlevel: 2,
//        Damage: 3,
//        Hitrate: 0.5
//        },
//        {Name: 'Strong Kick',
//        Minimumlevel: 4,
//        Damage: 9,
//        Hitrate: 0.2
//        }
// ]
// for (let i=0; i< Skill.length; i+=1){
//        console.log(Skill[i].Minimumlevel)
//        let userlevel = prompt('user level')
//        if (userlevel == Skill[i].Minimumlevel){
//               console.log('OK')
//        }
//        else {
//               console.log('No')
//        }
// }

// for (let j=0; j<Skill.length;j+=1){
//        let hitrateuser = Math.random()
//        if (hitrateuser < Skill[j].Hitrate){
//               console.log(Skill[j].Damage)
//        }
//        else {
//               console.log('Wrong')
//        }
// }

let Moviebonus = {
       total_results: 3,
       results: [
           {
               popularity: 512.119,
               vote_count: 460,
               video: false,
               poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
               id: 475557,
               adult: false,
               backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
               original_language: "en",
               original_title: "Joker",
               genres: [
                   80,
                   18,
                   53
               ],
               title: "Joker",
               vote_average: 8.8,
               overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
               release_date: "2019-10-04"
           },
           {
               popularity: 241.402,
               vote_count: 598,
               video: false,
               poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
               id: 429203,
               adult: false,
               backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
               original_language: "en",
               original_title: "The Old Man & the Gun",
               genres: [
                   35,
                   80,
                   18
               ],
               title: "The Old Man & the Gun",
               vote_average: 6.3,
               overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
               release_date: "2018-09-28"
           },
           {
               popularity: 233.735,
               vote_count: 4139,
               video: false,
               poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
               id: 429617,
               adult: false,
               backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
               original_language: "en",
               original_title: "Spider-Man: Far from Home",
               genres: [
                   28,
                   12,
                   878
               ],
               title: "Spider-Man: Far from Home",
               vote_average: 7.6,
               overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
               release_date: "2019-07-02"
           },
           {
               popularity: 158.333,
               vote_count: 323,
               video: false,
               poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
               id: 522938,
               adult: false,
               backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
               original_language: "en",
               original_title: "Rambo: Last Blood",
               genres: [
                   28,
                   53
               ],
               title: "Rambo: Last Blood",
               vote_average: 6.1,
               overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
               release_date: "2019-09-20"
           },
       ]
   }

// console.log(Moviebonus.results)
// console.log(Moviebonus.results[0])
// console.log(Moviebonus.results[0].vote_average, Moviebonus.results[0].genres)
// for (let i in Moviebonus.results){
//        console.log(i, Moviebonus.results[i].title)
// console.log(i, Moviebonus.results[i].vote_average)
// console.log(i, Moviebonus.results[i].genres)

// let usergenre = prompt('which genre do you like')
// for (let k in Moviebonus.results){
//     console.log(Moviebonus.results[k].genres)
//     let genres = Moviebonus.results[k].genres
//     for (let h=0; h < genres.length; h+=1){
//         if (usergenre == genres[h]){
//         console.log(k, Moviebonus.results[k])
//         }
//     }
// }

// // let userrate = prompt('Which rate do you want')
// // for (let k in Moviebonus.results){
// //     if (userrate > Moviebonus.results[k].vote_average){
// //         console.log(k, Moviebonus.results[k].title)
// //     }
// // }

