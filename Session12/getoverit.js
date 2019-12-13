const signupForm = document.getElementById('form-signup')
signupForm.addEventListener('submit',async function(event){
    event.preventDefault();
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const passwordConfirm = document.getElementById('password-confirm').value
    console.log(email)
    console.log(password)
    console.log(passwordConfirm)
    if (password !== passwordConfirm) {
        const errormessageContainer = document.getElementById('error-message')
        errormessageContainer.innerText = 'Mật khẩu không khớp. Vui lòng nhập lại'
        
    } else {
        const data = {
            username: email,
            password
         }
        const url1 =  ("http://5dc6a9cb317717001434f796.mockapi.io/api/users")
        const response = await fetch(url1, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        });
      }
})
