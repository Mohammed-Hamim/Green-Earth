/*************Functionality of category list starts here****************/
// function for loading categories
const loadCategories = () => {
    const categoryUrl = "https://openapi.programming-hero.com/api/categories";
    fetch(categoryUrl)
        .then(res => res.json())
        .then(data => displayCategories(data.categories));
}

// function for displaying categories
const displayCategories = (categories) => {

    // get the category container 
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

    // get every category
    categories.forEach(category => {

        // create Element for displaying category name 
        const categoryName = document.createElement('div');

        categoryName.innerHTML = `
        <button id="button-${category.id}" onclick="loadByCategory(${category.id})" class="category-btn p-3 md:p-0 md:py-2 mb-2 w-full">${category.category_name}</button>
        `;

        // append to the categoryContainer
        categoryContainer.appendChild(categoryName);


    });
}

loadCategories();
/*************Functionality of category list ends here****************/

/*************Functionality of cart container starts here****************/
// function for loading all plants 
const loadPlants = () => {
    const plantsUrl = "https://openapi.programming-hero.com/api/plants";
    fetch(plantsUrl)
        .then(res => res.json())
        .then(data => {
            displayPlants(data.plants);
        });

    // removing active while clicking All Trees btn
    const categoryButton = document.querySelectorAll(".category-btn");
    // select each button
    categoryButton.forEach(btn => {
        btn.classList.remove("active")
    })

    //Adding active on all tress btn when clicking on it
    const allCategoryBtn = document.querySelector("#all-category-btn");
    allCategoryBtn.classList.add("active");


}


// function for displaying all plants
const displayPlants = (plants) => {
    // displayAddToCart(plants)
    // get the plant container and empty it
    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";
    // get every plant
    plants.forEach(plant => {
        // create element for plant card 
        const plantCard = document.createElement("div");
        plantCard.innerHTML = `
         <div class="bg-white p-4 space-y-4 rounded-lg  ">
                        <img class="h-[190px] w-full rounded-lg " src="${plant.image ? plant.image : "No image found"}" alt="">
                        <h2 onclick="loadPlantDetails(${plant.id})" class="font-bold text-[14px] ">${plant.name ? plant.name : "No name found"}</h2>
                        <p class="text-[12px] h-[100px] text-justify">${plant.description ? plant.description : "No description found"}</p>
                        <div class="flex justify-between items-center">
                            <p class="bg-[#CFF0DC] p-3 rounded-full text-[12px]">${plant.category ? plant.category : "No category found"}</p>
                            <p class="text-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${plant.price ? plant.price : "Price is not available"}</span></p>
                        </div>
                        <button onclick="loadCartDetails(${plant.id})"  class="cart-btn bg-[#15803D] btn rounded-full w-full text-white">Add to Cart</button>
                    </div>
        `;
        // append to the plant card container 
        plantContainer.appendChild(plantCard);
    })


}
loadPlants();
/*************Functionality of cart container ends here****************/

/*************Functionality of showing plant card according to their category starts here****************/
// function for loading plants by category
const loadByCategory = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive()// remove active class

            // select clicked button

            const buttonNum = document.querySelector(`#button-${id}`);
            buttonNum.classList.add("active");// add active class
            displayByCategory(data.plants)
        })
}

// function for displaying plants by category
const displayByCategory = (plants) => {
    // get the plat card container and empty it
    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";
    // get every category
    plants.forEach(plant => {

        // create element
        const plantCard = document.createElement("div");
        plantCard.innerHTML = `
         <div class="bg-white p-4 space-y-4 rounded-lg  ">
                        <img class="max-h-[190px] w-full rounded-lg " src="${plant.image ? plant.image : "No image found"}" alt="">
                        <h2 onclick="loadPlantDetails(${plant.id})" class="text-bold text-[14px] font-bold">${plant.name ? plant.name : "No name found"}</h2>
                        <p class="h-[100px] text-justify">${plant.description ? plant.description : "No description found"}</p>
                        <div class="flex justify-between items-center">
                            <p class="bg-[#CFF0DC] p-3 rounded-full text-sm">${plant.category ? plant.category : "No category found"}</p>
                            <p class="text-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${plant.price ? plant.price : "Price is not available"}</span></p>
                        </div>
                        <button onclick="loadCartDetails(${plant.id})" class="bg-[#15803D] btn rounded-full w-full text-white">Add to Cart</button>
                    </div>
        `;
        // append to the plant card container 
        plantContainer.appendChild(plantCard);
    })

}

// function for removing active color 
const removeActive = () => {
    // get all buttons
    const categoryButton = document.querySelectorAll(".category-btn");
    // get all trees button
    const allCategoryBtn = document.querySelector("#all-category-btn");
    // remove active from it while clicking on other category buttons
    allCategoryBtn.classList.remove("active");

    // select each button
    categoryButton.forEach(btn => {
        btn.classList.remove("active")
    })
}

/*************Functionality of showing plant card according to their category ends here****************/



/*************Functionality of showing plant showing modal stats here****************/

//function for loading plant details
const loadPlantDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`

    fetch(url)
        .then(res => res.json())
        .then(details => displayPlantDetails(details.plants))
}

// function for displaying plant details

const displayPlantDetails = (plants) => {
    //  get the details container 
    const cartDetails = document.getElementById('cart-details');
    // create elements
    cartDetails.innerHTML = `    
                     <h2 class="text-xl font-bold">${plants.name}</h2>
                        <img class="w-full h-[180px] rounded-lg" src="${plants.image}" alt="">
                        <p class="">${plants.category}</p>
                        <p class="text-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${plants.price}</span></p>
                        <p class="text-sm ">${plants.description}</p>
                        <div class="modal-action"> 
                            <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn">Close</button>
                            </form>
                        </div>
    `
    document.getElementById('my_modal_5').showModal();
}
/*************Functionality of showing plant showing modal ends here****************/


/*************Functionality of showing add to cart starts here****************/

// 

//variable for storing updated total
let currentTotal = parseInt(document.getElementById("total").innerText);
// load cart details 
const loadCartDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`

    fetch(url)
        .then(res => res.json())
        .then(details => {
            displayAddToCart(details.plants);

            // get tree price and convert into number
            const treePrice = parseInt(document.getElementById(`tree-price${details.plants.id}`).innerText);


            // add with total
            currentTotal = currentTotal + treePrice;

            // push to the dom
            document.getElementById("total").innerText = currentTotal;
        })
}

// function for creating add to cart
const displayAddToCart = (plants) => {


    // get add cart container and empty it
    const addToCartContainer = document.getElementById('add-to-cart-container');


    alert(`Doy want to add to cart: ${plants.name}`)
    // create element 
    const addedCart = document.createElement("div");
    addedCart.setAttribute('id', `added-cart${plants.id}`)
    addedCart.classList.add("flex", "justify-between", "bg-[#CFF0DC]", "rounded-lg", "p-4")

    addedCart.innerHTML = `
     
                        <div>
                                <h2>${plants.name}</h2>
                                <p id="tree-price${plants.id}">${plants.price}</p>
                            </div>
                            <h2 onclick="removeCarts(${plants.id})" class="font-xl"><i class="fa-solid fa-xmark"></i></h2>
     `;

    //append
    addToCartContainer.appendChild(addedCart)


}

// function for removing cart details 
const removeCarts = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`

    fetch(url)
        .then(res => res.json())
        .then(details => {

            // get tree price and convert into number
            const treePrice = parseInt(document.getElementById(`tree-price${details.plants.id}`).innerText);

            // subtract from total
            currentTotal = currentTotal - treePrice;

            // push to the dom
            document.getElementById("total").innerText = currentTotal;

            // get add cart container and empty it
            const addedCart = document.getElementById(`added-cart${details.plants.id}`);
            addedCart.remove()
        })
}

