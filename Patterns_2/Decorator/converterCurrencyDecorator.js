const data = require("./currency_conversions.json");


class converterCurrencyDecorator{
    constructor(product){
        this.product = product;
    }

    getProduct(){
        return this.product;
    }
    converter(currencyTarget){

        try {
            // Built a regex pattern from product currency to currency target. Based on data.json structure
            const regex = new RegExp(this.getProduct().currency + "_" + currencyTarget);
            // Operation if the currencies values are correct with pattern
            const conversion = this.getProduct().price * Object.entries(data).find(key => regex.test(key))[1]
            console.log(`* Converting ${this.getProduct().currency} to ${currencyTarget}`);
            console.log(`- ${this.getProduct().name}${this.getProduct().model} with a price ${this.getProduct().price} ${this.getProduct().currency} to ${conversion.toFixed(2)} ${currencyTarget}`);
        } catch (error) {
            console.log("Doesn't exist the curreny target");
        }

    }
}

module.exports = converterCurrencyDecorator;