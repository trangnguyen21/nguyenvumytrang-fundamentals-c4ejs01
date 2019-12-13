const signinForm = document.getElementById('form-signin')
const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/users"
signinForm.addEventListener('submit', async function(event){
    event.preventDefault();
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const remembereMechecked = document.getElementById('Remember Me').checked
    const request = await fetch(url)
    const data = await request.json()
    const userFound = data.filter(function(item){
        console.log(item)
        return item.username == email && item.password == password
    })[0];
    if (remembereMechecked && userFound) {
        localStorage.setItem('authUser', userFound.username)
    }   
    if (userFound) {
        window.location.href = './homepage.html'
    }
//     if (password !== passwordConfirm) {
//         const errormessageContainer = document.getElementById('error-message')
//         errormessageContainer.innerText = 'Mật khẩu không khớp. Vui lòng nhập lại'
        
//     } else {
//         const data = {
//             username: email,
//             password
//          }
//         const url1 =  ("http://5dc6a9cb317717001434f796.mockapi.io/api/users")
//         const response = await fetch(url1, {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type": "application/json"
//             }
//         });
//       }
})
