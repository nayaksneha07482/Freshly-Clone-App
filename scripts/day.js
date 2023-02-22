document.querySelector("#btn").addEventListener("click", () => {
    window.location.href = "cart.html";
});

var divs = document.querySelectorAll("#dateBox>div");

divs.forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "rgb(255, 253, 247)";
        item.style.borderLeft = " 7px solid rgb(42, 109, 255)";

        var date = item.textContent;
        localStorage.setItem("dateStored", date);

        document.querySelector("#date").textContent = date;
    });
});