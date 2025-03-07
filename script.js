// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-btn").onclick =() =>{
//     navbar.classList.toggle("active");
//     cartItem.classList.remove("active");
//     searchForm.classList.remove("active");
// }

// let cartItem = document.querySelector(".cart-items-container");

// document.querySelector("#cart-btn").onclick = () =>{
//     cartItem.classList.toggle("active");
//     navbar.classList.remove("active");
//     searchForm.classList.remove("active");
// }

// let searchForm= document.querySelector(".search-form");

// document.querySelector("#search-btn").onclick = () =>{
//     searchForm.classList.toggle("active");
//     navbar.classList.remove("active");
//     cartItem.classList.remove("active");
// }

// window.onscroll=()=>{
//     navbar.classList.remove("active");
//     cartItem.classList.remove("active");
//     searchForm.classList.remove("active");

// }
















// Toggle search form visibility
const searchButton = document.getElementById('search-btn');
const searchForm = document.querySelector('.header .search-form');

searchButton.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

// Toggle cart visibility
const cartButton = document.getElementById('cart-btn');
const cartItemsContainer = document.querySelector('.header .cart-items-container');

cartButton.addEventListener('click', () => {
    cartItemsContainer.classList.toggle('active');
});

// Toggle menu for mobile view
const menuButton = document.getElementById('menu-btn');
const menu = document.querySelector('.header .navbar');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Open login form when "Order Now" button is clicked
const orderNowButton = document.querySelector('.ordernow .btn');
const loginBox = document.querySelector('.login-box');

orderNowButton.addEventListener('click', () => {
    loginBox.classList.toggle('active');
});

// Close the login box when clicking outside of it
document.addEventListener('click', (e) => {
    if (!loginBox.contains(e.target) && !orderNowButton.contains(e.target)) {
        loginBox.classList.remove('active');
    }
});

// Handle login form submission
const loginForm = document.querySelector('.login-box form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission to allow custom logic

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        alert('Login successful');
        // You can proceed with an actual login request here (like an API call)
        loginForm.reset(); // Reset form fields after login
    } else {
        alert('Please fill in both email and password');
    }
});

// Example of rotating images (if any) on the homepage
const rotatingImages = document.querySelectorAll('.rotating-image');

rotatingImages.forEach(image => {
    image.style.animation = 'rotate 20s linear infinite';
});
