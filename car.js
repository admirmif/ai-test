// Array to hold the cars (no DOM interaction)
let cars = [];

// 1. Function to add a car to the list
function addCar(make, model, year) {
    if (!make || !model || !year) {
        return "Please provide all car details.";
    }

    const newCar = {
        make,
        model,
        year,
    };

    // Issue 1: Cars are added even if the year is not a valid number
    cars.push(newCar);
    return `Car added: ${make} ${model} (${year})`;
}

// 2. Function to display all cars in the array
function getCars() {
    if (cars.length === 0) {
        return "No cars available.";
    }
    return cars.map((car, index) => `${index + 1}. ${car.make} ${car.model} (${car.year})`).join("\n");
}

// 3. Function to delete a car from the list by index
function deleteCar(index) {
    if (index < 0 || index >= cars.length) {
        return "Car not found.";
    }

    // Issue 2: Missing return for deleted car details
    cars.splice(index, 1);
    return "Car deleted successfully.";
}

// 4. Function to update car details by index
function updateCar(index, make, model, year) {
    if (index < 0 || index >= cars.length) {
        return "Car not found.";
    }

    const car = cars[index];
    if (make) car.make = make;
    if (model) car.model = model;
    if (year) car.year = year;

    // Issue 3: Update message doesn't correctly reflect all updated fields
    return `Car updated: ${car.make} ${car.model} (${car.year})`;
}

// 5. Function to search cars by make
function searchCarByMake(make) {
    if (!make) {
        return "Please provide a make to search.";
    }

    // Issue 4: Search is case-sensitive and may not match correctly
    const filteredCars = cars.filter(car => car.make.includes(make));
    if (filteredCars.length === 0) {
        return "No cars found with that make.";
    }

    return filteredCars.map((car, index) => `${index + 1}. ${car.make} ${car.model} (${car.year})`).join("\n");
}

// 6. Function to get a specific car by index
function getCarByIndex(index) {
    if (index < 0 || index >= cars.length) {
        return "Car not found.";
    }

    const car = cars[index];
    // Issue 5: Missing return statement for the car object
    return `Car: ${car.make} ${car.model} (${car.year})`;
}
