import inquirer from "inquirer";
import chalk from "chalk";
// generate a random number
let randomNumber = Math.random();
// fixx limit 0 <= guessnumber to geussNmuber => 9.
let num1 = Math.round(randomNumber * 9);
let userGuess = await inquirer.prompt({
    name: 'gNum',
    type: 'number',
    message: chalk.magentaBright("Guess number:\n choose and type a number(between 0 to 9)."),
    validate: function (gNum) {
        let isValid = !isNaN(gNum) && gNum >= 0 && gNum <= 9;
        return isValid || chalk.yellowBright('Invalid input. Please enter a valid number.');
    }
});
// if else ststements to print the result
if (userGuess.gNum === num1) {
    console.log(chalk.greenBright('congratulations! your guess number is matched.'));
}
else if (userGuess.gNum === (num1 + 1) || userGuess.gNum === (num1 - 1)) {
    console.log(chalk.yellowBright('you are closed enough.'));
}
else {
    console.log(chalk.cyanBright('Sorry! The correct answer was:', num1));
}
