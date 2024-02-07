document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();

        window.location.href = 'acuar.html'; 
    });

    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        window.location.href = 'acuar.html'; 
    });
});

function TogglePasswordVisibility(password) {
    var passwordInput = document.getElementById(password);
    var icon = document.querySelector('#' + password + ' + .input-group-append .fas');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function showSignUpform() {
    var loginForm = document.getElementById('login-form-container');
    var signupForm = document.getElementById('signup-form-container');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}

function showLoginform() {
    var loginForm = document.getElementById('login-form-container');
    var signupForm = document.getElementById('signup-form-container');
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
}

window.onscroll = function () {
    stickyNavbar();
};

var navbar = document.querySelector('header');
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
