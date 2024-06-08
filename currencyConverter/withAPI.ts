import inquirer from "inquirer";
import chalk from "chalk";


//currency converter API link
let api_link = "https://v6.exchangerate-api.com/v6/6226b9c6437d44f7a3441d68/latest/USD";

//fatching data
let fetchData = async (data:any) => {
    let fetchData = await fetch (data);
    let respons = await fetchData.json();
    return respons.conversion_rates;
};


let data = await fetchData(api_link);

//object keys in an array 
let countries = Object.keys(data);


//user input about current currency
let currentCurrency = await inquirer.prompt({
    type: 'list',
    name: 'name',
    message: 'Please select the current currency',
    choices: countries,
});
console.log(`Converting from ${chalk.yellowBright(currentCurrency.name)}:`);

//user input about amount
let userAmount = await inquirer.prompt({
    type: 'number',
    name: 'amount',
    message: `Please enter the amount in ${chalk.yellowBright.bold(currentCurrency.name)}:`,
});
console.log(userAmount.amount);

//user input about required currency
let requiredCurrency = await inquirer.prompt({
    type: 'list',
    name: 'name',
    message: 'Please select the rquired currency',
    choices: countries,
});

let convertion_rates = `https://v6.exchangerate-api.com/v6/6226b9c6437d44f7a3441d68/pair/${currentCurrency.name}/${requiredCurrency.name}`;
console.log(convertion_rates);
//fatching data for conversion rates
let DataConversion = async (data:any) => {
    let DataConversion = await fetch (data);
    let respons = await DataConversion.json();
    return respons.conversion_rate;
}

let cnvRates = await DataConversion(convertion_rates);
let cnvtdRates = userAmount.amount * cnvRates

console.log(`Your ${chalk.yellowBright(userAmount.amount)} ${chalk.yellowBright(currentCurrency.name)} in ${chalk.yellowBright(requiredCurrency.name)} is ${chalk.yellowBright(cnvtdRates)}`)