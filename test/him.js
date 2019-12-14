const travel =[
    G1 ={
        name :"G1",
        place :"bắc",
        time :"xuân",
        age :[15,25],
    },
    G2 ={
        name :"G2",
        place :"bắc",
        time :"hạ ",
        age :[15,25],
    },
    G3 ={
        name :"G3",
        place :"bắc",
        time :"hạ ",
        age :[26,40],
    },
    G4 ={
        name :"G4",
        place :"bắc",
        time :"thu",
        age :[15,25],
    },
    G5 ={
        name :"G5",
        place :"bắc",
        time :"xuân",
        age :[26,40],
    },
    G6 ={
        name :"G6",
        place :"bắc",
        time :"thu",
        age :[26,40],
    },
    G7 ={
        name :"G7",
        place :"bắc",
        time :"đông",
        age :[15,25],
    },
    G8 ={
        name :"G8",
        place :"bắc",
        time :"đông",
        age :[26,40],
    },
    G9 ={
        name :"G9",
        place :"trung",
        time :"xuân",
        age :[26,40],
    },
    G10 ={
        name :"G10",
        place :"trung",
        time :"xuân",
        age :[15,25],
    },
    G11 ={
        name :"G11",
        place :"trung",
        time :"hạ ",
        age :[15,25],
    },
    G12 ={
        name :"G12",
        place :"trung",
        time :"hạ ",
        age :[26,40],
    },
    G13 ={
        name :"G13",
        place :"trung",
        time :"thu",
        age :[26,40],
    },
    G14 ={
        name :"G14",
        place :"trung",
        time :"thu",
        age :[15,25],
    },
    G15 ={
        name :"G15",
        place :"trung",
        time :"đông",
        age :[15,25],
    },
    G16 ={
        name :"G16",
        place :"trung",
        time :"đông",
        age :[26,40],
    },
    G17 ={
        name :"G17",
        place :"nam",
        time :"xuân",
        age :[26,40],
    },
    G18 ={
        name :"G19",
        place :"nam",
        time :"xuân",
        age :[15,25],
    },
    G19 ={
        name :"G20",
        place :"nam",
        time :"hạ ",
        age :[26,40],
    },
    G20 ={
        name :"G21",
        place :"nam",
        time :"hạ ",
        age :[15,25],
    },
    G21 ={
        name :"G22",
        place :"nam",
        time :"thu",
        age :[26,40],
    },
    G22 ={
        name :"G23",
        place :"nam",
        time :"thu",
        age :[15,25],
    },
    G23 ={
        name :"G24",
        place :"nam",
        time :"đông",
        age :[15,25],
    },
    G24 ={
        place :"nam",
        time :"đông",
        age :[26,40],
    },
]
let submit =document.getElementById("submit")
submit.addEventListener("click",function(item){
    let gettime =document.getElementById('time')
let getplace =document.getElementById('space')
let getage =document.getElementById('age')

let want ={
    place :getplace.value,
    time :gettime.value,
    age :getage.value,
}
let find =travel.filter(function(item){
    return item.place ==want.place && item.time ==want.time &&(want.age <=item.age[1] && want.age >=item.age[0]) 
})

function check (find){
    if(find.length >=1)
    return find[0].name;
}
let num =check(find)
console.log(num)
})