document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    var firstName = document.querySelector("#fName").value;
    var lastName = document.querySelector("#lName").value;
    var address = document.querySelector("#address").value;
    var city = document.querySelector("#city").value;
    var email = document.querySelector("#email").value;

    if (firstName == "") {
        alert("First Name must be filled out");
    }

    else if (lastName == "") {
        alert("Last Name must be filled out");
    }

    else if (address == "") {
        alert("Address must be filled out");
    }

    else if (city == "") {
        alert("City must be filled out");
    }

    else if (email == "") {
        alert("Email must be filled out");
    }

    else if (firstName != "" && lastName != "" && address != "" && city != "" && email != "") {
        window.location.href = "payment.html";
    }
});


document.querySelector(".totalJs").textContent = `$${JSON.parse(localStorage.getItem("total"))}`;

var finalSum = JSON.parse(localStorage.getItem("total")) + 6.99;
finalSum = Number(finalSum.toFixed(2));

document.querySelector(".sumTotalJs").textContent = `$${finalSum}`;
document.querySelector(".sumTotalJs").style.color = "green";


document.querySelector(".sumTotalJs1").textContent = `$${finalSum}`;
document.querySelector(".sumTotalJs1").style.color = "green";

var finalLength = JSON.parse(localStorage.getItem("length"));
document.querySelector("#mealNum").textContent = finalLength;

var date = localStorage.getItem("dateStored");
document.querySelector(".dateJs").textContent = date;

var zip = JSON.parse(localStorage.getItem("zip"));
document.querySelector(".zipCode").value = zip;

var email = JSON.parse(localStorage.getItem("email"));
document.querySelector("#email").value = email;

var cart = JSON.parse(localStorage.getItem("itemsInCart"));
console.log(cart);

cart.map(item => {
    var card = document.createElement("div");

    var imageDiv = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012393/production-meal-without-background-image-4e5dd437-69eb-4ae8-847b-7ea52f687633.png");
    image.setAttribute("id","cartImg")

    var name = document.createElement("div");
    name.textContent = item.name;
    name.setAttribute("id","cartName")

    imageDiv.append(image);
    card.append(imageDiv, name);
    document.querySelector("#cardsContainer").append(card);
});