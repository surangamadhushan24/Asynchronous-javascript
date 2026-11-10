
// FOOD DELIVERY APPLICATION
// Learning asynchronous JavaScript using callbacks

function getRestaurant(callback) {

    console.log("1. Getting restaurant information...");

    setTimeout(() => {

        const restaurant = {
            id: 1,
            name: "Pizza Hut",
            location: "Colombo"
        };

        console.log("Restaurant information received!");

        callback(restaurant);

    }, 2000);
}


function getMenu(restaurantId, callback) {

    console.log("2. Getting restaurant menu...");

    setTimeout(() => {

        const menu = [
            { id: 101, name: "Chicken Pizza", price: 2500 },
            { id: 102, name: "Cheese Pizza", price: 2200 },
            { id: 103, name: "Garlic Bread", price: 800 }
        ];

        console.log("Menu received!");

        callback(menu);

    }, 2000);
}


function displayMenu(restaurant, menu) {

    console.log("\n========== RESTAURANT ==========");

    console.log("Name:", restaurant.name);
    console.log("Location:", restaurant.location);

    console.log("\n========== FOOD MENU ==========");

    menu.forEach((food) => {

        console.log(
            `${food.id} - ${food.name} - Rs.${food.price}`
        );

    });

    console.log("\nCustomer can select food!");
}


// APPLICATION STARTS HERE

console.log("Customer opened food delivery app\n");

getRestaurant((restaurant) => {

    console.log("Restaurant:", restaurant.name);

    getMenu(restaurant.id, (menu) => {

        displayMenu(restaurant, menu);

    });

});

console.log("\nCustomer can continue using the application...");
