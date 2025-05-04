document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    checkLoginStatus();
    
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
    
    // Sign Up Form Submission
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('signUpUsername').value;
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('signUpConfirmPassword').value;
        
        // Validate inputs
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);
        
        if (userExists) {
            alert("Username already exists!");
            return;
        }
        
        // Create new user
        const newUser = {
            username,
            email,
            password // In a real app, you should hash the password
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        alert("Account created successfully! Please sign in.");
        container.classList.remove("sign-up-mode");
        signUpForm.reset();
    });
    
    // Sign In Form Submission
    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInPassword').value;
        
        // Check credentials
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            // Store current user in localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Redirect to dashboard or home page
            window.location.href = 'dashboard.html';
        } else {
            alert("Invalid username or password!");
        }
    });
});

function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // User is logged in, redirect to dashboard
        window.location.href = 'dashboard.html';
    }
}
  // Redirect to /app if already logged in
  if (localStorage.getItem('currentUser')) {
    window.location.href = '/app';
}

// After successful login in your script.js:
// localStorage.setItem('currentUser', JSON.stringify(user));
// window.location.href = '/app';


  