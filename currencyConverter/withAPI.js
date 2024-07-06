"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//currency converter API link
let api_link = "https://v6.exchangerate-api.com/v6/6226b9c6437d44f7a3441d68/latest/USD";
//fatching data
let fetchData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let fetchData = yield fetch(data);
    let respons = yield fetchData.json();
    return respons.conversion_rates;
});
let data = await fetchData(api_link);
//object keys in an array 
let countries = Object.keys(data);
//user input about current currency
let currentCurrency = await inquirer_1.default.prompt({
    type: 'list',
    name: 'name',
    message: 'Please select the current currency',
    choices: countries,
});
console.log(`Converting from ${chalk_1.default.yellowBright(currentCurrency.name)}:`);
//user input about amount
let userAmount = await inquirer_1.default.prompt({
    type: 'number',
    name: 'amount',
    message: `Please enter the amount in ${chalk_1.default.yellowBright.bold(currentCurrency.name)}:`,
});
console.log(userAmount.amount);
//user input about required currency
let requiredCurrency = await inquirer_1.default.prompt({
    type: 'list',
    name: 'name',
    message: 'Please select the rquired currency',
    choices: countries,
});
let convertion_rates = `https://v6.exchangerate-api.com/v6/6226b9c6437d44f7a3441d68/pair/${currentCurrency.name}/${requiredCurrency.name}`;
console.log(convertion_rates);
//fatching data for conversion rates
let DataConversion = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let DataConversion = yield fetch(data);
    let respons = yield DataConversion.json();
    return respons.conversion_rate;
});
let cnvRates = await DataConversion(convertion_rates);
let cnvtdRates = userAmount.amount * cnvRates;
console.log(`Your ${chalk_1.default.yellowBright(userAmount.amount)} ${chalk_1.default.yellowBright(currentCurrency.name)} in ${chalk_1.default.yellowBright(requiredCurrency.name)} is ${chalk_1.default.yellowBright(cnvtdRates)}`);
