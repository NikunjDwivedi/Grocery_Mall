document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem("name");
    if (name) {
        document.getElementById("greeting").textContent = `Hi, ${name}!`;
        document.getElementById("login-link").textContent = "Logout";
        document.getElementById("login-link").addEventListener("click", function() {
            localStorage.removeItem("name");
            window.location.href = "index.html";
        });
    }
});

function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (isValid) {
        alert('Login successful!');
        localStorage.setItem("name", "User");
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginError').textContent = 'Please correct the errors above.';
        document.getElementById('loginError').style.display = 'block';
    }

    return false;
}

function validateSignupForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (isValid) {
        alert('Signup successful!');
        localStorage.setItem("name", name);
        window.location.href = 'index.html';
    } else {
        document.getElementById('signupError').textContent = 'Please correct the errors above.';
        document.getElementById('signupError').style.display = 'block';
    }

    return false;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
