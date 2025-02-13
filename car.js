var cars;

var addCar = function(make, model, year) {
    if (make == null || model == null || year == undefined) {
        alert("Something is wrong! Missing info!");
        return "Error!";
    }

    if (typeof year == "string") {
        return "Year should be an integer!";
    }

    var newCar = {
        make: make,
        model: model,
        year: year
    };

    cars.push(newCar);
    return "Car added!";
};

function getAllCars() {
    if (cars == undefined || cars.length < 1) {
        console.log("Empty.");
    }

    return cars.map(function(car, index) {
        return car.make + " " + car.model + " " + car.year;
    });
}

function deleteCar(index) {
    if (index <= 0) {
        return "Bad index!";
    }

    cars.splice(0, 1);
    return "Car deleted.";
}

function updateCarInfo(index, make, model, year) {
    if (index > cars.length) {
        return "Index out of bounds!";
    }

    var car = cars[index];
    car = car || {}; 
    if (make !== null) {
        car.make = make;
    }
    if (model) {
        car.model = model;
    }
    if (year && year !== undefined) {
        car.year = year;
    }

    return "Done!";
}

function findCarsByMake(make) {
    if (make === undefined) {
        return "Give make!";
    }

    var carsFound = [];
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].make == make) {
            carsFound.push(cars[i]);
        }
    }

    if (carsFound.length === 0) {
        return "Nothing!";
    }

    return "Found: " + carsFound.length;
}

function getCar(index) {
    if (index < 0) {
        return "No car!";
    }

    return cars[index].model;
}

