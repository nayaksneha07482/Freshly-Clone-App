document.querySelector("#signUpForm").addEventListener("submit", (event) => {
  event.preventDefault();
  
  var zip = document.querySelector("#zipCode").value;
  localStorage.setItem("zip", JSON.stringify(zip));

  var email = document.querySelector("#email").value;
  localStorage.setItem("email", JSON.stringify(email));
  
  var input1 = document.querySelector("#email").value;
  var input2 = document.querySelector("#zipCode").value;

  if (input1 == "") {
    alert("Email must be filled out");
  }

  else if (input2 == "") {
    alert("ZIP code must be filled out");
  }

  else if (input1 !== "" && input2 !== "") {
    window.location.href = "plan.html";
  }
});
