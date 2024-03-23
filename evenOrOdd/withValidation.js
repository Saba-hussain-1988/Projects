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
    { name: "num", type: "input", message: chalk_1.default.yellow("Please enter your required number:"),
        validate: function (num) {
            Number(num);
            let isValid = !isNaN(num);
            return isValid || 'Please enter a valid number.';
        } },
]);
//print the result through if else
if ((number.num % 2) === 0) {
    console.log(chalk_1.default.magentaBright(number.num, 'is an even number.'));
}
else {
    console.log(chalk_1.default.cyanBright(number.num, 'is an odd number.'));
}
