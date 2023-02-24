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

document.querySelector("#planBtn").addEventListener("click", () => {
    window.location.href = "signUp.html";
});

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

// Meal Cards

var data = [
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",
        name: "Steak Peppercorn",
        meal: "500 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbf71e27a78a237fd984_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",
        name: "Honestyle Chicken",
        meal: "560 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbfab125b6b21baf1ac9_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",
        name: "CauliFlower Shell Beef Bolognese",
        meal: "490 Cal | Gluten Free | Single-Serve",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbfee93df882573f2857_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",
        name: "Savory-Sweet Chicken Teriyaki Bowl",
        meal: "480 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg",
        name: "Protein-Packed Chicken Parm",
        meal: "410 Cal | Gluten Free | Single-Serve",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc067781d935ac589515_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",
        name: "Golden Oven-Fried Chicken & Mash",
        meal: "510 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106400aa25771202335c782_production-meal-image-1a05b254-2fc5-4eec-9cec-5b1cde753c06.jpeg",
        name: "Chicken Livorno",
        meal: "490 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc0c28709f5aed230b12_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",
        name: "Zingy Buffalo Chicken",
        meal: "470 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",
        name: "White Bean Turkey Chili Bowl",
        meal: "540 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc12a9dd6b9a49263aa5_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg",
        name: "Pork Carnitas",
        meal: "480 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc15eb42cf78056d37ba_production-meal-image-36a77436-ae4f-446d-885c-e9fd7ae139fa.jpeg",
        name: "Coconut Lemongrass Pork Bowl",
        meal: "400 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc18e93df8f1943f313f_production-meal-image-d49fdb42-ecc3-4c0f-ae05-6968f1049a73.jpeg",
        name: "Baja Pork Bowl",
        meal: "420 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc1bc2ba5c4a4abf26ae_production-meal-image-e184440d-cfea-4806-b7e3-1e5856975959.jpeg",
        name: "Sauteed French Green Beans (11 oz)",
        meal: "140 Cal | Gluten Free | Multi-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401eb621bbc28987f309_production-meal-image-53e1a296-8d48-4ba8-acb3-0d9032960be2.jpeg",
        name: "Hearty Chipotle-Chicken Stew",
        meal: "420 Cal | Gluten Free | Single-Serve",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc2128709f42f423136f_production-meal-image-09259aec-5f39-4b6a-8894-fed742f5ab3c.jpeg",
        name: "Oven-Baked Chicken Florentine",
        meal: "410 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc2528709fe39123147c_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
        name: "Chicken Tikka Masala",
        meal: "570 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg",
        name: "Masterful Mash (16 oz)",
        meal: "160 Cal | Gluten Free | Multi-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640534648a3861409719e_production-meal-image-a06ce51f-74b3-429e-8ff1-ada01979e783.jpeg",
        name: "Masterful Mac & Cheese (15 oz)",
        meal: "470 Cal | Gluten Free | Multi-Serve",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg",
        name: "3 Grilled Chicken Breasts(9.75 oz)",
        meal: "160 Cal | Gluten Free | Multi-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg",
        name: "8 Baked Turkey Meatballs(9.98 oz)",
        meal: "110 Cal | Gluten Free | Multi-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc355b47cf883fec7806_production-meal-image-51fe566d-7bc5-4500-91b0-622d6c2e665c.jpeg",
        name: "Unwrapped Salsa Verde Burrito",
        meal: "400 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc3742e9341fa4b6eb26_production-meal-image-b845ba48-1300-4ecb-b9d0-d545b084f15a.jpeg",
        name: "Farmstead Baked Lentil Pasta",
        meal: "500 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc3a2c06a6c5a1adfdac_production-meal-image-8b7c8d85-e8de-423e-b1c8-fd1a18a542e7.jpeg",
        name: "Street Eats Thai Basil Beef",
        meal: "450 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc3ea103d4bde151fca1_production-meal-image-fa4ff532-e487-4656-b98f-f489d59e73b6.jpeg",
        name: "Indian-Spiced Chickpea Curry Bowl",
        meal: "360 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc415b47cf48dbec781d_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg",
        name: "BBQ Bison Burger*",
        meal: "600 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc44e93df8b7db3f412a_production-meal-image-2e64815b-800d-4a38-9664-c7a524148b2f.jpeg",
        name: "Jerk Chicken Bowl",
        meal: "380 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc47e93df810ff3f42b3_production-meal-image-93be0073-891b-4443-a6a0-9ab21a1d309c.jpeg",
        name: "Sticky-Sweet BBQ Beef Bowl",
        meal: "390 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc4acd9fa8c1899b8333_production-meal-image-933355a9-e575-456c-9961-d6ac01cb50da.jpeg",
        name: "Oven-Baked Sweet Potato Cake",
        meal: "430 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc4deb42cfce466d5b09_production-meal-image-b70b17ff-88b4-453d-b192-2be3cc18e849.jpeg",
        name: "Dijon Pork Chop",
        meal: "630 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc4f794572febbcc24f4_production-meal-image-197e49d6-cfcc-4a4b-b0ea-4854553694de-p-500.jpeg",
        name: "Middle Eastern Falafel",
        meal: "470 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc5208008e12e72ce9b4_production-meal-image-c92760b3-d1c8-463a-9721-8effc5cbc614.jpeg",
        name: "Miso-Glazed Beef Bowl",
        meal: "330 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106406e186b52870a4ef9b9_production-meal-image-e11563a9-0714-42b4-aac9-239a7592018b-p-500.jpeg",
        name: "Keto-Friendly Chicken Bowl",
        meal: "340 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc5908008ece832cebc1_production-meal-image-2f53a0bb-c83f-48f7-b920-53e9157ac5e1.jpeg",
        name: "Super-Grain Pulled Pork Bowl",
        meal: "400 Cal | Gluten Free | Single-Serve",
        category: "Purely Plant",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc5deb42cf72856d640f_production-meal-image-2d36ad62-ae02-42fe-9c16-f2064587d892-p-500.jpeg",
        name: "Baked Turkey Meatballs",
        meal: "360 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc60eb42cf68066d66c2_production-meal-image-207ee5a9-50b6-4d3f-a0bb-e31354d0e606-p-500.jpeg",
        name: "Creamy Mushroom Risotto",
        meal: "460 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc6408008eda342cedd3_production-meal-image-8f27cccd-b0db-405a-9341-3f4adabcbe9c.jpeg",
        name: "Chicken Cordon Bleu",
        meal: "710 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc68421a962a476d1689_production-meal-image-603e4274-71b0-48a1-8072-c11baab58220.jpeg",
        name: "Chipotle Chicken Bowl",
        meal: "240 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc6ee93df8293d3f4c0f_production-meal-image-b22511da-67a6-428b-a50d-10212f5cea17.jpeg",
        name: "Banger & Mash",
        meal: "500 Cal | Gluten Free | Single-Serve",
        category: "Proteins"

    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc72f9383b7ab7888551_production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpeg",
        name: "Very Verde Chicken",
        meal: "470 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc75957fd83ea41d0b6a_production-meal-image-2669cb60-58b3-4b43-b88a-6defd9b581cc.jpeg",
        name: "Super Kale Pesto Chicken",
        meal: "400 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc7860386661542b7193_production-meal-image-dd5b71cb-e0fc-4917-bd2b-52678a77f47b.jpeg",
        name: "Supper Club  Top Blade Steak",
        meal: "520 Cal | Gluten Free | Single-Serve",
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc7bf9383b25b1889023_production-meal-image-79ab8e74-c2fa-404a-a107-a6756aba68fa.jpeg",
        name: "Pork Chile Colorado",
        meal: "570 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064033d2877aaa317edab7_production-meal-image-f28dfb4e-efc8-4dff-b95c-9239797edcb0.jpeg",
        name: "Shrimp & Andouille Paella",
        meal: "530 Cal | Gluten Free | Single-Serve",
        category: "Proteins"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc8139a1eecc646be1d9_production-meal-image-0a3b0cc8-11c7-4dd7-9b62-21a8a91c6a07.jpeg",
        name: "Three-Gain Harvest Bowl",
        meal: "420 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc85e93df8947f3f574d_production-meal-image-d5e81f22-3f38-4eaa-932a-c0bca23a021c.jpeg",
        name: "Chicken & Pumpkin Parmesan Risotto",
        meal: "530 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc8708008e112d2cf81f_production-meal-image-b8bb2dcf-52be-4f84-be7c-bf019107f2cc.jpeg",
        name: "Country Chicken Stew",
        meal: "200 Cal | Gluten Free | Single-Serve",
        category: "Signature Collection"
    },
    {
        image:
            "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc8a6038663b1b2b71da_production-meal-image-93da874b-3677-4881-9674-1a9f3a39ba38.jpeg",
        name: "Wintertime Turkey Meatloaf ",
        meal: "500 Cal | Gluten Free | Single-Serve",
        category: "Freshly Fit"
    },
];

function createCards(data){
    document.querySelector("#cardsContainer").innerHTML = "";

    data.map(item => {
        var cardBox = document.createElement("div");
        cardBox.setAttribute("id", "box");
    
        var imageDiv = document.createElement("div");
    
        var img = document.createElement("img");
        img.setAttribute("src", item.image);
        img.setAttribute("id", "cardImage");
    
        var heading = document.createElement("h4");
        heading.textContent = item.name;
        heading.setAttribute("id", "cardHeading")
    
        var para = document.createElement("p");
        para.textContent = item.meal;
    
        imageDiv.append(img),
            cardBox.append(imageDiv, heading, para);
        document.querySelector("#cardsContainer").append(cardBox);
    });
}
createCards(data);


document.querySelector("#signUpBtn").addEventListener("click", () => {
    window.location.href = "signUp.html";
});

// Filter functionality

document.querySelector("#foodType").addEventListener("change", () => {
    let type = document.querySelector("#foodType").value;
    let filteredArr = data.filter(item => {
        return item.category == type;
    });

    createCards(filteredArr);
});