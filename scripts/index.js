// Third div cards

var cards = [
    {
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",
        name: "Steak Peppercorn",
        calories: "500 Cal | Gluten Free | Single-Serve",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbf71e27a78a237fd984_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",
        name: "Homestyle Chicken",
        calories: "560 Cal | Gluten Free | Single-Serve",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbfab125b6b21baf1ac9_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",
        name: "Cauliflower Shell Beef Bolognese",
        calories: "490 Cal | Gluten Free | Single-Serve",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbfee93df882573f2857_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",
        name: "Savory-Sweet Chicken Teriyaki Bowl",
        calories: "480 Cal | Gluten Free | Single-Serve",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg",
        name: "Protein-Packed Chicken Parm",
        calories: "410 Cal | Gluten Free | Single-Serve",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc067781d935ac589515_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",
        name: "Golden Oven-Fried Chicken & Mash",
        calories: "510 Cal | Gluten Free | Single-Serve"
    }
];

cards.map(item => {
    var cardBox = document.createElement("div");

    var imageDiv = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", item.image);
    img.setAttribute("id", "cardImage");

    var heading = document.createElement("h4");
    heading.textContent = item.name;
    heading.setAttribute("id", "cardHeading")

    var para = document.createElement("p");
    para.textContent = item.calories;

    imageDiv.append(img),
    cardBox.append(imageDiv, heading, para);
    document.querySelector("#cardsContainer").append(cardBox);
});

// Plan div cards


var planCards = [
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d75bbb20e8074e602_Rectangle%20108.jpg",
        savings: "",
        number: "4-5 Meals",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d5fc8ef6e6127d841_Rectangle%20108-1.jpg",
        savings: "Save up to $12",
        number: "6-7 Meals",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9c24f1e287b2ea6a19_Rectangle%20108-2.jpg",
        savings: "Save up to $20",
        number: "8-9 Meals",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d58c6a6a96a2ad5ef_Rectangle%20108-3.jpg",
        savings: "Save up to $27",
        number: "10-11 Meals",
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9ccb70a3f88391e136_Rectangle%20108-4.jpg",
        savings: "Save up to $33",
        number: "12 Meals",
    },
];

planCards.map(item => {
    var box = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", item.image);

    if (item.savings != "") {
        var saving = document.createElement("p");
        saving.textContent = item.savings;
    }
    else {
        var saving = document.createElement("p");
        saving.textContent = item.savings;
        saving.style.display = "none"
    }

    var heading = document.createElement("h4");
    heading.textContent = item.number;

    box.append(image, saving, heading);
    document.querySelector(".planContainer").append(box);
});

// Ratings div cards and carousel


var carouselCards = [
    [
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Freshly has changed our lives!",
            review: "With Freshly, we dont have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.",
            name: "Dave",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "10 stars! Awesome! Love it!",
            review: "We love Freshly because it takes two minutes to prepare, the food is great and we don't have to spend time cleaning up.",
            name: "Sheri",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "One of the easiest decisions I've made",
            review: "With Freshly, I don't have to think about what I'm going to eat for lunch each day and feel good knowing that I'm eating a healthy meal. I love the convenience!",
            name: "Cindi",
        }
    ],
    [
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Amazingly delicious and convenient!",
            review: "I love that I have found freshly and that it allows me to try new things and allows me to eat healthy while remaining affordable!",
            name: "Jessica Wilson",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Convenience, taste, variety",
            review: "Been a customer for more than a year now, and love it. Customer service is particularly outstanding — whenever there's been a problem.",
            name: "Jeffrey",
        },
        {
            stars: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
            heading: "Delicious! So yummy!",
            review: "The convenience of a well prepared, healthy, flavorful meal with no shopping, preparing, or clean up is simply amazing.",
            name: "Kristie Geiges",
        }
    ]
];

var objNumber = 0;
var currentObj = carouselCards[objNumber];
makeCarousel();

function makeCarousel() {
    document.querySelector("#carouselBox").innerHTML = "";

    currentObj.map(item => {
        var box = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", item.stars);
        image.setAttribute("id", "stars");

        var heading = document.createElement("h4");
        heading.textContent = item.heading;

        var review = document.createElement("p");
        review.textContent = item.review;

        var names = document.createElement("h5");
        names.textContent = item.name;

        box.append(image, heading, review, names);
        document.querySelector("#carouselBox").append(box);
    });
}

document.querySelector("#imageDivRight").addEventListener("click", () => {
    objNumber++;
    if (objNumber > carouselCards.length - 1) {
        objNumber = 0
    }
    currentObj = carouselCards[objNumber];
    makeCarousel(currentObj);
});

document.querySelector("#imageDivLeft").addEventListener("click", () => {
    objNumber--;
    if (objNumber < 0) {
        objNumber = carouselCards.length - 1
    }
    currentObj = carouselCards[objNumber];
    makeCarousel(currentObj);
});

document.querySelector("#signUpBtn").addEventListener("click", () => {
    window.location.href = "signUp.html";
});

// document.querySelector("#submitBtn").addEventListener("click", () => {
//     window.location.href = "plan.html";
// });

document.querySelector("#cardBtn").addEventListener("click", () => {
    window.location.href = "plans&Menu.html";
});

document.querySelector("#planBtn").addEventListener("click", () => {
    window.location.href = "signUp.html";
});

document.querySelector("#getStartedBtn").addEventListener("click", () => {
    var input1 = document.querySelector("#inp1").value;
    var input2 = document.querySelector("#inp2").value;
    if (input1 == "" || input2 == "") {
        alert("Please fill out the fields properly!");
    }
    else {
        window.location.href = "plan.html";
    }
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    var input3 = document.querySelector("#leftInput").value;
    var input4 = document.querySelector("#rightInput").value;
    if (input3 == "" || input4 == "") {
        alert("Please fill out the fields properly!");
    }
    else {
        window.location.href = "plan.html";
    }
});