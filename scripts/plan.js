var columns = document.querySelectorAll("#column");

columns.forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "#cce2e1";
    });
});

document.querySelector("#planBtn").addEventListener("click", () => {
    window.location.href = "day.html";
});