#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let input = await inquirer.prompt({
    name: "num", type: "input",
    message: chalk.rgb(5, 240, 200)('Please enter your desire number:'),
    validate: function(num){
        let InNum = parseInt(num);
        let floNum = parseFloat(num);
        let isValid= !isNaN(InNum) && !isNaN(floNum) && InNum > 0 && floNum > 0;
        return isValid || chalk.rgb(10, 180, 230)('Invalid entry. Please enter a valid number.');
    }  
})

//print table by loop
for (let i = 1; i <= 10; i++) {
    console.log(chalk.rgb(50, 110, 250)(input.num, 'x', i, '=', (input.num * i)));
}