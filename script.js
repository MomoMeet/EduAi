document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Basic check, add actual login functionality here
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email === "test@example.com" && password === "password") {
          window.location.href = "main.html";
        } else {
          alert("Incorrect email or password");
        }
      });
    }
  });
  
  