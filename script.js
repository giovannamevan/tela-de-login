document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("login-error").style.display = "block";
    } else {
        document.getElementById("login-error").style.display = "none";
    }
});






