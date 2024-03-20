import inquirer from "inquirer";
import chalk from "chalk";


// prompt ,to take input from user
//inquirer, to help prompt , to act in terminal

let number = await inquirer.prompt([
    {
        name: "num",
        type: "number",
        message: chalk.yellowBright("Please enter your required number: "),
},
]);

//print the result through if else

if (isNaN(number.num) ){
     console.log(chalk.redBright(number.num, 'is invalid for this program.\nPlease enter a valid number'));
} else if  ((number.num % 2) === 0) {
    console.log(chalk.greenBright(number.num, 'is an even number.'));
} else{
    console.log(chalk.cyanBright(number.num , 'is an odd number.'));
}