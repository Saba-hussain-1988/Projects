#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// prompt to take input from user 
let calcu = await inquirer_1.default.prompt([
    // First Number
    { name: "num1", type: "input", message: chalk_1.default.magentaBright('Please enter first number: '),
        //validate , to check input is a number not any other character
        validate: function (num1) {
            let intNum = parseInt(num1);
            let floatNum = parseFloat(num1);
            let isValid = !isNaN(intNum) && !isNaN(floatNum);
            return isValid || chalk_1.default.yellowBright('Please enter a valid number.');
        } },
    // oprator choices
    { name: 'oprator', type: 'list', message: chalk_1.default.cyanBright('Please choose a oprator:'),
        choices: ['+', '-', '*', '/', '%', '**'] },
    //second Number
    { name: 'num2', type: 'input', message: chalk_1.default.blueBright('Please enter second number: '),
        // validate, to check the second number is a number not any other charactor,
        validate: function (num2) {
            let intnum = parseInt(num2);
            let floatnum = parseFloat(num2);
            let isValid = !isNaN(intnum) && !isNaN(floatnum);
            return isValid || chalk_1.default.yellowBright('Please enter a valid number.');
        } }
]);
//convert type input to number
calcu.num1 = Number(calcu.num1);
calcu.num2 = Number(calcu.num2);
//if else statements to print the result according the user's input
if (calcu.oprator === '+') {
    //if user wanna add values
    console.log(chalk_1.default.magenta(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 + calcu.num2)));
}
else if (calcu.oprator === '-') {
    // if user wanna substract 
    console.log(chalk_1.default.greenBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 - calcu.num2)));
}
else if (calcu.oprator === '*') {
    //if user want to multiply the values
    console.log(chalk_1.default.redBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 * calcu.num2)));
}
else if (calcu.oprator === '/') {
    //if user want to divide
    // then check the second Number should not be zero
    if (calcu.num2 === 0) {
        // if the second number is zero, print the statement to user 
        console.log(chalk_1.default.bgCyanBright('Can not divided by zero. Please put a non zero second number.'));
    }
    else {
        console.log(chalk_1.default.cyanBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 / calcu.num2)));
    }
    //if user choose to oprate module
}
else if (calcu.oprator === '%') {
    // then check the second Number should not be zero
    if (calcu.num2 === 0) {
        // if the second number is zero, print the statement to user 
        console.log(chalk_1.default.bgYellowBright('Can not divided by zero. Please put a non zero second number.'));
    }
    else {
        console.log(chalk_1.default.yellowBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 % calcu.num2)));
    }
    //if user choose exponant
}
else if (calcu.oprator === '**') {
    console.log(chalk_1.default.blueBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 ** calcu.num2)));
}
