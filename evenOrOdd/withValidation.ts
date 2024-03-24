#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// prompt ,to take input from user
//inquirer, to help prompt , to act in terminal

let number = await inquirer.prompt([
    {name: "num", type: "input", message: chalk.yellow("Please enter your required number:"),
validate: function(num){
    Number(num);
    let isValid = !isNaN(num) ;
    return isValid || chalk.red('Please enter a valid number.');
}},
]);

//print the result through if else

if ((number.num % 2) === 0) {
    console.log(chalk.magentaBright(number.num, 'is an even number.'));
} else  {
    console.log(chalk.cyan(number.num , 'is an odd number.'));
} 