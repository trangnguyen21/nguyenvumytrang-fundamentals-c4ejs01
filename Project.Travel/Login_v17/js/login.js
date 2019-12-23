console.log(6)
let getsignup =document.getElementById('signup')
getsignup.addEventListener('click',function(){
    const hehe =document.getElementsByClassName("form-content")
    console.log(hehe)
    hehe.innerHTML=`<p>bum</p>`
})
