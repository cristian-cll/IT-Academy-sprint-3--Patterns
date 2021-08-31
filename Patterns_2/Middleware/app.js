const dataCombined = require("./dataCombined"); // JSON
const dataSingular = require("./dataSingular"); // JSON
const { square, cube, half } = require("./Middlewares/mathOperationsMw"); // Middlewares
const calculator = require("./utils/calculator"); // Function
const middleHandler = require("./Middlewares/middlewaresHandler"); // Import the instance


const calcOperFromJSON = (data) => {

    // If data is a JSON Array...
    if (Array.isArray(data)) return data.forEach(item => item.result = calculator(item.operation, item.values));

    data.result = calculator(data.operation, data.values);
}


// Calculating values from JSON
calcOperFromJSON(dataCombined)
calcOperFromJSON(dataSingular)


// Using middlewares
middleHandler.use(square);
middleHandler.use(cube);
middleHandler.use(half);


// Executing middlewares
console.log("Array JSON Object");
middleHandler.run(dataCombined);
console.log("Single JSON Object");
middleHandler.run(dataSingular);