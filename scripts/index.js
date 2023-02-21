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