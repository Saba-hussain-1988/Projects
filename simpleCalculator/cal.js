import inquirer from "inquirer";
import chalk from "chalk";
// prompt to take input from user 
let calcu = await inquirer.prompt([
    // First Number
    { name: "num1", type: "input", message: chalk.magentaBright('Please enter first number: '),
        //validate , to check input is a number not any other character
        validate: function (num1) {
            let intNum = parseInt(num1);
            let floatNum = parseFloat(num1);
            let isValid = !isNaN(intNum) && !isNaN(floatNum);
            return isValid || chalk.yellowBright('Please enter a valid number.');
        } },
    // oprator choices
    { name: 'oprator', type: 'list', message: chalk.cyanBright('Please choose a oprator:'),
        choices: ['+', '-', '*', '/', '%', '**'] },
    //second Number
    { name: 'num2', type: 'input', message: chalk.blueBright('Please enter second number: '),
        // validate, to check the second number is a number not any other charactor,
        validate: function (num2) {
            let intnum = parseInt(num2);
            let floatnum = parseFloat(num2);
            let isValid = !isNaN(intnum) && !isNaN(floatnum);
            return isValid || chalk.yellowBright('Please enter a valid number.');
        } }
]);
//convert type input to number
calcu.num1 = Number(calcu.num1);
calcu.num2 = Number(calcu.num2);
//if else statements to print the result according the user's input
if (calcu.oprator === '+') {
    //if user wanna add values
    console.log(chalk.magenta(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 + calcu.num2)));
}
else if (calcu.oprator === '-') {
    // if user wanna substract 
    console.log(chalk.greenBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 - calcu.num2)));
}
else if (calcu.oprator === '*') {
    //if user want to multiply the values
    console.log(chalk.redBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 * calcu.num2)));
}
else if (calcu.oprator === '/') {
    //if user want to divide
    // then check the second Number should not be zero
    if (calcu.num2 === 0) {
        // if the second number is zero, print the statement to user 
        console.log(chalk.bgCyanBright('Can not divided by zero. Please put a non zero second number.'));
    }
    else {
        console.log(chalk.cyanBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 / calcu.num2)));
    }
    //if user choose to oprate module
}
else if (calcu.oprator === '%') {
    // then check the second Number should not be zero
    if (calcu.num2 === 0) {
        // if the second number is zero, print the statement to user 
        console.log(chalk.bgYellowBright('Can not divided by zero. Please put a non zero second number.'));
    }
    else {
        console.log(chalk.yellowBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 % calcu.num2)));
    }
    //if user choose exponant
}
else if (calcu.oprator === '**') {
    console.log(chalk.blueBright(calcu.num1, calcu.oprator, calcu.num2, '=', (calcu.num1 ** calcu.num2)));
}
