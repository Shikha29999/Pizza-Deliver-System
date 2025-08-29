// JavaScript for Responsive Navigation Menu and Smooth Scrolling

// Selecting elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav ul li a');

// Toggle navigation menu on mobile
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Close the menu when a link is clicked (for mobile devices)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});

// Smooth scrolling to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the section smoothly
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed header height
            behavior: 'smooth'
        });
    });
});
// JavaScript for Scroll Animations and Basic Form Handling

// Function to add 'visible' class when elements come into view
function revealOnScroll() {
    const aboutSection = document.querySelector('.about');
    const contactSection = document.querySelector('.contact');
    const windowHeight = window.innerHeight;

    // Get the position of the sections relative to the viewport
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const contactTop = contactSection.getBoundingClientRect().top;

    // Reveal the section if it's within the viewport range
    if (aboutTop < windowHeight - 100) {
        aboutSection.classList.add('visible');
    }
    if (contactTop < windowHeight - 100) {
        contactSection.classList.add('visible');
    }
}

// Add event listener for scrolling
window.addEventListener('scroll', revealOnScroll);

// Basic form submission alert (if using a contact form)
const contactForm = document.querySelector('#contactForm'); // Assuming a contact form with id 'contactForm'

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset(); // Reset the form fields
    });
}

// Initial check to reveal elements on page load
revealOnScroll();
// JavaScript for Smooth Scrolling and Form Validation

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic Form Validation
function validateForm(event, form) {
    event.preventDefault();
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    } else {
        alert('Please fill out all fields correctly.');
    }
}

// Add event listeners for form submissions
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => validateForm(e, form));
    });
});
    
    // Simulated login/signup process
    document.getElementById("signupForm").addEventListener("submit", function(event) {
      event.preventDefault();
      // Simulate a signup process, then show main content
      showMainContent();
    });
  
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      // Simulate a login process, then show main content
      showMainContent();
    });
  
    function showMainContent() {
      authSection.style.display = "none";
      mainContent.style.display = "block";
    }
  
  let isLoggedIn = false; // Simulating a logged-in status

// Redirect if user is not logged in
document.body.addEventListener("click", function(event) {
  if (!isLoggedIn && !event.target.closest(".auth-section")) {
    event.preventDefault();
    showSignup();
  }
});

// Show Signup Section
function showSignup() {
  document.getElementById("signup-section").style.display = "block";
  document.getElementById("login-section").style.display = "none";
  document.getElementById("main-content").style.display = "none";
}

// Show Login Section
function showLogin() {
  document.getElementById("signup-section").style.display = "none";
  document.getElementById("login-section").style.display = "block";
  document.getElementById("main-content").style.display = "none";
}

// Handle Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  isLoggedIn = true;
  showMainContent();
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  isLoggedIn = true;
  showMainContent();
});

// Show Main Content
function showMainContent() {
  document.getElementById("signup-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// Switch to Login Section if user already has an account
document.getElementById("show-login").addEventListener("click", function(event) {
  event.preventDefault();
  showLogin();
});



// Responsive Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    let errorMessage = '';
    if (!name.value.trim()) {
        errorMessage += 'Name is required.\n';
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        errorMessage += 'Valid email is required.\n';
    }
    if (!message.value.trim()) {
        errorMessage += 'Message cannot be empty.\n';
    }

    if (errorMessage) {
        e.preventDefault();
        alert(errorMessage);
    } else {
        alert('Your message has been sent!');
    }
});

// Testimonials Carousel (Optional Dynamic Enhancement)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const showTestimonial = () => {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentTestimonial ? 'block' : 'none';
    });
};
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial();
}, 5000);
showTestimonial();

// Smooth Scrolling (Optional for Navigation)
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sample Data (Replace with real database calls in a backend environment)
let orders = [
    { id: 1, item: "Margherita Pizza", status: "Pending" },
    { id: 2, item: "Pepperoni Pizza", status: "Completed" }
];

let menu = [
    { id: 1, name: "Margherita Pizza", price: 200 },
    { id: 2, name: "Pepperoni Pizza", price: 300 }
];

let feedbacks = [
    { id: 1, customer: "John", message: "Great service!" },
    { id: 2, customer: "Emily", message: "Loved the pizza!" }
];

// View Orders
function viewOrders() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = `<h4>Orders:</h4>`;
    orders.forEach(order => {
        orderList.innerHTML += `
            <div>
                <p>Order ID: ${order.id}</p>
                <p>Item: ${order.item}</p>
                <p>Status: ${order.status}</p>
                <button onclick="updateOrder(${order.id})">Update Status</button>
            </div>
            <hr>
        `;
    });
}

// Update Order Status
function updateOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = order.status === "Pending" ? "Completed" : "Pending";
        alert(`Order ID ${orderId} status updated to ${order.status}`);
        viewOrders();
    }
}

// Edit Menu
function editMenu() {
    const menuManagement = document.getElementById("menu-management");
    menuManagement.innerHTML = `<h4>Menu Items:</h4>`;
    menu.forEach(item => {
        menuManagement.innerHTML += `
            <div>
                <p>Item: ${item.name}</p>
                <p>Price: ₹${item.price}</p>
                <button onclick="deleteMenuItem(${item.id})">Delete</button>
            </div>
            <hr>
        `;
    });
}

// Delete Menu Item
function deleteMenuItem(itemId) {
    menu = menu.filter(item => item.id !== itemId);
    alert(`Menu item with ID ${itemId} deleted.`);
    editMenu();
}

// View Feedback
function viewFeedback() {
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = `<h4>Customer Feedback:</h4>`;
    feedbacks.forEach(feedback => {
        feedbackList.innerHTML += `
            <div>
                <p>Customer: ${feedback.customer}</p>
                <p>Message: ${feedback.message}</p>
            </div>
            <hr>
        `;
    });
}
