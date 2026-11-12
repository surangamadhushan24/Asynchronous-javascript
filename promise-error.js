const restaurantPromise = new Promise((resolve, reject) => {
    console.log("Searching for restaurant...");

    setTimeout(() => {

        const restaurantExists = false;
        if (restaurantExists) {

            resolve({
                id: 1,
                name: "Pizza Hut"
            });

        } else {

            reject("Restaurant not found");

        }


    }, 2000)
})

restaurantPromise.then((restaurant) => {

    console.log("Restaurant:", restaurant);

}).catch((error) => {

    console.log("ERROR:", error);

});