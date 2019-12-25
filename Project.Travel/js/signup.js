let getSignUp =document.getElementById('signup-button')
getSignUp.addEventListener('click',function(item){
    item.preventDefault();  // block out reset page
    let getErro =document.getElementById('message-erro')
    let user ={
        Name :document.getElementById('name-input').value,
        email :document.getElementById('email-input').value,
        UserName :document.getElementById('username-input').value,
        password :document.getElementById('password-input').value,
        confilmpassword :document.getElementById('confilm').value
    }

    if(user.password ==user.confilmpassword){
    async function data(user){
        let request =await fetch('http://5dfe28f303f98e0014e92871.mockapi.io/api/v1/user')
        let data =await request.json()
        let find =data.filter(function(item){
            return item.email ==user.email
        })
        if(find.length !=0){
            window.location.href="file:///C:/Users/admin/Desktop/Javascript%20Mindx/Fundamentals/Project.Travel/login3.html?"
        }else {return 100}
    }
    async function postdata(user){
        const check =await data(user)
        if(check ==100){
        const setting ={
            method:"POST",
            body :JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        
        const response =await fetch('http://5dfe28f303f98e0014e92871.mockapi.io/api/v1/user',setting)
        if (!response.ok) throw Error(response.message);
        
        try {
            const data = await response.json();
            return data;
        }
        catch (err) {
             throw err;
        }
        
        }else {
            return 0;
        }

    }
    async function getpost(){
        let resutl =await postdata(user)
        if(resutl !=0){
            window.location.href="file:///C:/Users/admin/Desktop/Javascript%20Mindx/Fundamentals/Project.Travel/login1.html"
        }
    }
    data(user)
    getpost()
}else{
    window.location.href="file:///C:/Users/admin/Desktop/Javascript%20Mindx/Fundamentals/Project.Travel/login3.html?"
}

})