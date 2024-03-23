"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// prompt ,to take input from user
//inquirer, to help prompt , to act in terminal
let number = await inquirer_1.default.prompt([
    {
        name: "num",
        type: "number",
        message: chalk_1.default.yellowBright("Please enter your required number: "),
    },
]);
//print the result through if else
if (isNaN(number.num)) {
    console.log(chalk_1.default.redBright(number.num, 'is invalid for this program.\nPlease enter a valid number'));
}
else if ((number.num % 2) === 0) {
    console.log(chalk_1.default.greenBright(number.num, 'is an even number.'));
}
else {
    console.log(chalk_1.default.cyanBright(number.num, 'is an odd number.'));
}
