// Shared authentication functions
function handleLogin(username, password) {
    // Your login logic
    localStorage.setItem('currentUser', username);
    window.location.href = '/exp.html';
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login.html';
}