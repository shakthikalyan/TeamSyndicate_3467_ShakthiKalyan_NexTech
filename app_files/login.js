function toggleSignup() {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#0D274E";
    document.getElementById("signup-toggle").style.backgroundColor = "#0D274E;";
    document.getElementById("signup-toggle").style.color = "#0D274E";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function toggleLogin() {
    document.getElementById("login-toggle").style.backgroundColor = "#0D274E;";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#0D274E;";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}
function fun() {
    alert("You have been logged in,Thank you!");
    window.location.assign("index.html");

}
function account() {
    alert("Your account has been created,Thankyou!");
    window.location.assign("index.html");
}