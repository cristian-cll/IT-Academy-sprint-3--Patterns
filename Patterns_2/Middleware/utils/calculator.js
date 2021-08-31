const calculator = (operation, values) => {
    let result;

    switch (operation) {
        case "sum": result = values.reduce((a, b) => a + b, 0); break;
        case "substraction": result = values.reduce((a, b) => a - b); break;
        case "multiplication": result = values.reduce((a, b) => a * b); break;
        default: break;
    }

    return result;
}

module.exports = calculator;