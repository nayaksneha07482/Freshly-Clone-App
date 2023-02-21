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