// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const btn = document.getElementById("btn");
// const loginForm = document.getElementById("login-form"); // Group inputs
// const welcomeDiv = document.getElementById("welcome-message"); // Dedicated container

// // 1. DEFINE THE UI LOGIC
// // This function acts as the "Source of Truth" for your UI
// function checkLoginStatus() {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//         // --- User is Logged In ---
//         const userObj = JSON.parse(storedUser);

//         // Hide Form
//         loginForm.style.display = "none";

//         // Show Welcome Message
//         welcomeDiv.innerHTML = `
//             <h2>Welcome Back, ${userObj.email}!</h2>
//             <button onclick="logout()">Logout</button>
//         `;
//     } else {
//         // --- User is Logged Out ---
//         loginForm.style.display = "block";
//         welcomeDiv.innerHTML = `<h2>Please log in to continue.</h2>`;

//         // Clear inputs
//         emailInput.value = "";
//         passwordInput.value = "";
//     }
// }

// // 2. EVENT LISTENER (The "Write" Action)
// btn.addEventListener("click", function() {
//     const email = emailInput.value;
//     const password = passwordInput.value;

//     if (email && password) {
//         const userObj = { email, password };

//         // Save to Storage
//         localStorage.setItem("user", JSON.stringify(userObj));

//         // IMMEDIATELY update the UI so the user sees the change
//         checkLoginStatus(); 
//     } else {
//         alert("Please enter both email and password");
//     }
// });

// // 3. LOGOUT FUNCTION (The "Delete" Action)
// window.logout = function() {
//     localStorage.removeItem("user");
//     checkLoginStatus(); // Update UI immediately
// }

// // 4. INITIALIZATION (The "Read" Action)
// // Run this once when script loads to handle page refreshes
// checkLoginStatus();


// // //const themeBtn= document.getElementById("themeBtn");
// // themeBtn.addEventListener("click",()=>{
// //     document.body.classList.toggle("dark-mode");
// // })

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

themeBtn.addEventListener("click", () => {
    // This adds the class if it's missing, and removes it if it's there
    document.body.classList.toggle("dark-mode");
    // Save the current theme to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.removeItem("theme");
    }
});