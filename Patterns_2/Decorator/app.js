const Product = require("./models/Product");
const converterCurrencyDecorator = require("./converterCurrencyDecorator");

// Creating some products through Product Class
const xiaomiMi11 = new Product("Xiaomi", "Mi11" , 1200, "USD");
const iPhone12 = new Product("Iphone", "12" , 2000, "CHF");
const huaweiP40  = new Product("Huawei", "P40" , 1600, "CAD");
const samsungS21 = new Product("Samsung", "Galaxy S21 Ultra 5G" , 180000, "JPY");
const lgWing = new Product("Lg", "Wing 5G" , 6800, "CNY");
const motorolaRazr = new Product("Motorola", "Razr" , 1100, "GBP");

// Injecting the product to the constructor of the decorator class
const xiaomiMi11WithConversor = new converterCurrencyDecorator(xiaomiMi11);
const iPhone12WithConversor = new converterCurrencyDecorator(iPhone12);
const huaweiP40WithConversor = new converterCurrencyDecorator(huaweiP40);
const samsungS21WithConversor = new converterCurrencyDecorator(samsungS21);
const lgWingWithConversor = new converterCurrencyDecorator(lgWing);
const motorolaRazrWithConversor = new converterCurrencyDecorator(motorolaRazr);

// Products now have the converter, not by inheritance, but by composition
xiaomiMi11WithConversor.converter("EUR");
iPhone12WithConversor.converter("EUR");
huaweiP40WithConversor.converter("EUR");
samsungS21WithConversor.converter("EUR");
lgWingWithConversor.converter("EUR");
motorolaRazrWithConversor.converter("EUR");