const authUser = localStorage.setItem('authUser')
if (!authUser) {
    window.location.href = '\.session3'
}