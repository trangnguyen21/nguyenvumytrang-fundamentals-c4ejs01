$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  const MatchTravel =[
    {   name: "G1",
        place :"Miền núi phía bắc",
        time :" Mùa xuân",
        age : "Dưới 25 tuổi",
    },
    {
        name: "G2",
        place :"Miền núi phía bắc",
        time :"Mùa hạ",
        age : "Dưới 25 tuổi",
    },
    {
        name: "G3",
        place :"Miền núi phía bắc",
        time :"Mùa hạ ",
        age : "Dưới 25 tuổi",
    },
    {
        name: "G4",
        place :"Miền núi phía bắc",
        time :"Mùa thu",
        age : "Dưới 25 tuổi",
    },
    {
        name: "G5",
        place :"Miền núi phía bắc",
        time :"Mùa xuân",
        age : "Dưới 25 tuổi",
    },
    {
        name: "G6",
        place :"Miền núi phía bắc",
        time :"Mùa thu",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G7",
        place :"Miền núi phía bắc",
        time :"Mùa đông",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G8",
        place :"Miền núi phía bắc",
        time :"Mùa đông",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G9",
        place :"Duyên hải miền trung",
        time :"Mùa xuân",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G10",
        place :"Duyên hải miền trung",
        time :"Mùa xuân",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G11",
        place :"Duyên hải miền trung",
        time :"Mùa hạ ",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G12",
        place :"Duyên hải miền trung",
        time :"Mùa hạ ",
        age :"Dưới 25 tuổi",
    },
    {
        name: "G13",
        place :"Duyên hải miền trung",
        time :"Mùa thu",
        age : "Trên 25 tuổi",
    },
    {
        name: "G14",
        place :"Duyên hải miền trung",
        time :"Mùa thu",
        age : "Trên 25 tuổi",
    },
    {
        name: "G15",
        place :"Duyên hải miền trung",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    },
    {
        name: "G16",
        place :"Duyên hải miền trung",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    },
    {   name: "G17",
        place :"Đồng bằng nam bộ",
        time :"Mùa xuân",
        age :"Trên 25 tuổi",
    },
    {
        name: "G18",
        place :"Đồng bằng nam bộ",
        time :"Mùa xuân",
        age :"Trên 25 tuổi",
    },
    {
        name: "G19",
        place :"Đồng bằng nam bộ",
        time :"Mùa hạ ",
        age :"Trên 25 tuổi",
    },
    {
        name: "G20",
        place :"Đồng bằng nam bộ",
        time :"Mùa hạ ",
        age :"Trên 25 tuổi",
    },
   {
         name: "G21",
        place :"Đồng bằng nam bộ",
        time :"Mùa thu",
        age :"Trên 25 tuổi",
    },
   {
        name: "G22",
        place :"Đồng bằng nam bộ",
        time :"Mùa thu",
        age :"Trên 25 tuổi",
    },
    { 
        name: "G23",
        place :"Đồng bằng nam bộ",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    },
    {
        name: "G24",
        place :"Đồng bằng nam bộ",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    },
];


let submit = document.getElementById('Submit')
Submit.addEventListener("click", function(item) {
    let gettime = document.getElementById('Select-time')
    let getplace = document.getElementById('Select-place')
    let getage = document.getElementById('Select-age')
    let want = {
        place :getplace.value,
        time :gettime.value,
        age :getage.value,
    }
    function check (find){
        if(find.length >=1)
        return find[0].name;
    }
    let num =check(find)
    console.log(num)

})
