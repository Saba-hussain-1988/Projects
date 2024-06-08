//currency converter by S.R.Chohan
//import inquirer
import inquirer from "inquirer";
//import chalk
import chalk from "chalk";
//welcome note
console.log(chalk.magentaBright.bold.italic('~'.repeat(60)));
console.log(chalk.magentaBright.bold.italic('\tWELCOME IN CURRENCY CONVERTER'));
console.log(chalk.magentaBright.bold.italic('\t\tBy S.R.Chohan'));
console.log(chalk.magentaBright.bold.italic('_'.repeat(70)));
//list of currencies with their country names
let currencies = ['AED(UAE dirham)', 'AFN(afghani)', 'AUD(Australian Dollar)', 'AZN(Azerbaijan manat)', 'BDT(Bangladesh Taka)',
    'BHD(Bahrain Dinar)', 'BND(Brunei DOllar)', 'BRL(Brazilian Real)', 'CAD(Canadian Dollar)', 'CNY(China Yuan)',
    'EGP(Egypt pound)', 'EUR(euro)', 'HKD(Hongkong Dollar)', 'IDR(Indonasian Rupee)', 'INR(Indian Rupee)',
    'IQD(Iraqi Dinar)', 'IRR(Iranian Rial)', 'JPY(Japanese yen)', 'KGS(Kyrgyzstan)', 'KZT(Kazakhystan)',
    'LBP(Labanon pound)', 'LKR(Srilankan Rupee)', 'MYR(Mmalaysia ringit)', 'NZD(Newzealand Dollar)', 'OMR(Oman Rial)',
    'PHP(Phillippines Peso)', 'PKR(Pakistan Rupee)', 'QAR(Qatar Rial)', 'RUB(Russia Rubel)', 'SAR(Saudi Arabia Rial)',
    'SDG(Sudan Pound)', 'SYP(Syria pound)', 'THB(Thailand baht)', 'TJS(Tajikistan)', 'TMT(Turkmenistan)', 'TRY(Turkey Lira)',
    'TWD(Taiwan Dollar)', 'USD(USA Dollar)', 'UZS(Uzbekistan sum)', 'YER(Yemen Rial)', 'ZAR(South Africa Rand)'
];
//take input from user
let user = await inquirer.prompt([
    {
        name: 'currentCurrency',
        type: 'list',
        message: 'choose a currecy which you want to sell:',
        choices: currencies
    },
    {
        name: 'amount',
        type: 'input',
        message: 'Enter your amount:',
        validate: function (amount) {
            let intValue = Number(amount);
            let isValid = !isNaN(intValue) && amount.length !== 0;
            return isValid || 'Invalid input';
        }
    },
    {
        name: 'requiredCurrency',
        type: 'list',
        message: 'choose a currecy which you want to buy:',
        choices: currencies
    }
]);
//take current exchange rates from user
let rates = await inquirer.prompt([
    {
        name: 'sellingCurrency',
        type: 'input',
        message: `current exchange rate of ${user.currentCurrency} `,
        validate: function (sellingCurrency) {
            let intValue = Number(sellingCurrency);
            let isValid = !isNaN(intValue) && sellingCurrency.length !== 0;
            return isValid || 'Invalid input';
        }
    },
    {
        name: 'BuyingCurrency',
        type: 'input',
        message: `current exchange rate of ${user.requiredCurrency} `,
        validate: function (BuyingCurrency) {
            let intValue = Number(BuyingCurrency);
            let isValid = !isNaN(intValue) && BuyingCurrency.length !== 0;
            return isValid || 'Invalid input';
        }
    },
]);
//calculation for conversion
let unit = user.amount / rates.sellingCurrency; // convert into base currency
let conversion = unit * rates.BuyingCurrency;
//final result print statement
console.log(`Your ${chalk.bold.yellowBright(user.amount)} ${chalk.bold.greenBright(user.currentCurrency)} is converted in ${chalk.bold.yellowBright(conversion)} ${chalk.bold.greenBright(user.requiredCurrency)}`);
