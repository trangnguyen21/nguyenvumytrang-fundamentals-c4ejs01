// $('#exampleModalCenter').modal('show');
const travel =[
    G1 ={
        name :"G1",
        place :"Miền núi phía bắc",
        time :"Mùa xuân",
        age : "Dưới 25 tuổi",
    },
    G2 ={
        name :"G2",
        place :"Miền núi phía bắc",
        time :"Mùa hạ",
        age : "Dưới 25 tuổi",
    },
    G3 ={
        name :"G3",
        place :"Miền núi phía bắc",
        time :"Mùa thu",
        age :"Dưới 25 tuổi",
    },
    G4 ={
        name :"G4",
        place :"Miền núi phía bắc",
        time :"Mùa đông",
        age :"Dưới 25 tuổi",
    },
    G5 ={
        name :"G5",
        place :"Duyên hải miền trung",
        time :"Mùa xuân",
        age :"Dưới 25 tuổi",
    },
    G6 ={
        name :"G6",
        place :"Duyên hải miền trung",
        time :"Mùa hạ",
        age :"Dưới 25 tuổi",
    },
    G7 ={
        name :"G7",
        place :"Duyên hải miền trung",
        time :"Mùa thu",
        age :"Dưới 25 tuổi",
    },
    G8 ={
        name :"G8",
        place :"Duyên hải miền trung",
        time :"Mùa đông",
        age :"Dưới 25 tuổi",
    },
    G9 ={
        name :"G9",
        place :"Đồng bằng nam bộ",
        time :"Mùa xuân",
        age :"Dưới 25 tuổi",
    },
    G10 ={
        name :"G10",
        place :"Đồng bằng nam bộ",
        time :"Mùa hạ",
        age :"Dưới 25 tuổi",
    },
    G11 ={
        name :"G11",
        place :"Đồng bằng nam bộ",
        time :"Mùa thu",
        age :"Dưới 25 tuổi",
    },
    G12 ={
        name :"G12",
        place :"Đồng bằng nam bộ",
        time :"Mùa đông",
        age :"Dưới 25 tuổi",
    },
    G13 ={
        name :"G13",
        place :"Miền núi phía bắc",
        time :"Mùa xuân",
        age : "Trên 25 tuổi",
    },
    G14 ={
        name :"G14",
        place :"Miền núi phía bắc",
        time :"Mùa hạ",
        age : "Trên 25 tuổi",
    },
    G15 ={
        name :"G15",
        place :"Miền núi phía bắc",
        time :"Mùa thu",
        age :"Trên 25 tuổi",
    },
    G16 ={
        name :"G16",
        place :"Miền núi phía bắc",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    },
    G17 ={
        name :"G17",
        place :"Duyên hải miền trung",
        time :"Mùa xuân",
        age :"Trên 25 tuổi",
    },
    G18 ={
        name :"G18",
        place :"Duyên hải miền trung",
        time :"Mùa hạ",
        age :"Trên 25 tuổi",
    },
    G19 ={
        name :"G19",
        place :"Duyên hải miền trung",
        time :"Mùa thu",
        age :"Trên 25 tuổi",
    },
    G20 ={
        name :"G20",
        place :"Duyên hải miền trung",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    },
    G21 ={
        name :"G21",
        place :"Đồng bằng nam bộ",
        time :"Mùa xuân",
        age :"Trên 25 tuổi",
    },
    G22 ={
        name :"G22",
        place :"Đồng bằng nam bộ",
        time :"Mùa hạ",
        age :"Trên 25 tuổi",
    },
    G23 ={
        name :"G23",
        place :"Đồng bằng nam bộ",
        time :"Mùa thu",
        age :"Trên 25 tuổi",
    },
    G24 ={
        name :"G24",
        place :"Đồng bằng nam bộ",
        time :"Mùa đông",
        age :"Trên 25 tuổi",
    }

];

/*---------------------------------------*/

let submit = document.getElementById('Submit')
submit.addEventListener("click", function(){
    let gettime = document.getElementById('Select-time')
    let getplace = document.getElementById('Select-place')
    let getage = document.getElementById('Select-age')
    let want = {
        place :getplace.value,
        time :gettime.value,
        age :getage.value,
    }
    /*-----check input -----*/
    function check (want){
        if(want.place =="" ||want.time ==""||want.age ==""){
            return 0;
        }else{
            return 1;
        }
    }
    const Check =check(want)
    /*----------------------------*/

    if(Check ==1){
        let find = travel.filter(function(item){
                return item.place == want.place && item.time == want.time && item.age == want.age
            
        })
        
        function check (find){
            if(find.length >=1)
            return find[0].name;
        }
        let num =check(find)
        
        function on(num) {
            console.log(num)
            document.getElementById('overlay').innerHTML =`
            <div id="text">
                <h1 id="travel">Congrats</h1>
                <br>
                <p id="congrats">Chúng tôi đã tìm thấy nhóm <strong>${num}</strong> là nhóm phù hợp với bạn. Bạn hãy đọc thông tin chi tiết về nhóm nhé.
                </p>
                
                <ul id="optionbut">
                    <li ><a href="index-matching.html"         target="_blank"><button class="ok"> BACK</button></a></li>          
                    <li><a href="index-team.html"><button class="oki"> NEXT</ button></  a></li>
                </ul>
            </div>
            `
            document.getElementById('mainNav').style.display="none";
            document.getElementById("overlay").style.display = "block";
        }
        on(num)
    }
})

let close =document.getElementById("overlay")
close.addEventListener("click",function(){
    close.style.display="none"
    window.location.href="index-matching.html"
    document.getElementById('mainNav').style.display="block";
})