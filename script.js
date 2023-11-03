const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const username = formData.get("username");
    const password = formData.get("password");

    fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: `username=${username}&password=${password}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "/welcome.html";
            } else {
                messageDiv.textContent = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});