document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    
    if (!passwordPattern.test(password)) {
        alert("Invalid password format. Please follow the instructions.");
        return;
    }
    
    alert("Signup successful!");
});
