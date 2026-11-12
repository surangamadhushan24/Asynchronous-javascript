
const restaurantPromise = new Promise((resolve, reject) => {

    console.log("Checking restaurant...");

    setTimeout(() => {

        const restaurant = {
            id: 1,
            name: "Pizza Hut",
            location: "Colombo"
        };

        resolve(restaurant);

    }, 2000);

});

console.log("Customer opened application");

restaurantPromise.then((restaurant) => {

    console.log("Restaurant information received!");

    console.log(restaurant);

});

console.log("Customer can continue browsing");
