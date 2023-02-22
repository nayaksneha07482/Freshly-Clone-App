document.querySelector("#loginBtn").addEventListener("click", () => {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email == "") {
        alert("Please fill the email id properly!")
    }
    else if (password == "") {
        alert("Please fill the password field!")
    }
    else if (email !== "" && password !== "") {
        window.location.href = "plan.html";
    }
});

document.querySelector("#signUpBtn").addEventListener("click", () => {
    window.location.href = "signUp.html";
});