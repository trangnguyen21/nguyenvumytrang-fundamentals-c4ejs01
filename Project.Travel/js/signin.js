let getsignin =document.getElementById('signin-button')
getsignin.addEventListener('click',function(event){
    event.preventDefault()
    
    let getEmail =document.getElementById('email-input')
    let getPassword =document.getElementById('password-input')
    /*--------CHECK INPUT--------*/
    function Check(getEmail,getPassword){
        if(getEmail.value =="" ||getPassword ==""){
            return 0;
        }else{
            return 1;
        }
    }
    /*---------------------------*/
    const check=Check(getEmail.value,getPassword.value)
    if(check ==1){
        async function DataUser (){
            let request =await fetch('http://5dfe28f303f98e0014e92871.mockapi.io/api/v1/user?fbclid=IwAR0mJ9ilKaDLBgWZiMoqdK_oa8TMDOmm_O4eSTA6CCsLH2qJnwK5h6NbcNA')
            let data =await request.json()
            let find =data.filter(function(item){
                return item.email ==getEmail.value && item.password ==getPassword.value
            })
            if(find.length >0){
                window.location.href="index-matching.html"
            }else{
                window.location.href="login2.html"
            }
        }
        DataUser()
    }else{
        console.log("hehe")
    }
})