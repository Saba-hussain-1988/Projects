"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// generate a random number
let randomNumber = Math.random();
// fixx limit 0 <= guessnumber to geussNmuber => 9.
let num1 = Math.round(randomNumber * 9);
let userGuess = await inquirer_1.default.prompt({
    name: 'gNum',
    type: 'number',
    message: chalk_1.default.magentaBright("Guess number:\n choose and type a number(between 0 to 9)."),
    validate: function (gNum) {
        let isValid = !isNaN(gNum) && gNum >= 0 && gNum <= 9;
        return isValid || chalk_1.default.yellowBright('Invalid input. Please enter a valid number.');
    }
});
// if else ststements to print the result
if (userGuess.gNum === num1) {
    console.log(chalk_1.default.greenBright('congratulations! your guess number is matched.'));
}
else if (userGuess.gNum === (num1 + 1) || userGuess.gNum === (num1 - 1)) {
    console.log(chalk_1.default.yellowBright('you are closed enough.'));
}
else {
    console.log(chalk_1.default.cyanBright('Sorry! The correct answer was:', num1));
}
