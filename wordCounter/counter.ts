#! /usr/bin/env node

/**Word Counter
The user will enter a english paragraph and all that is needed is to just to implement counting 
characters and words without whitespaces.

Create a GitHub repository for the project and submit its URL in the project submission form. */

import inquirer from "inquirer";
import chalk from "chalk";

//declare a constant "paragraph", and assign it to the result of inquirer.prompt function

const paragraph: {
    para:string
} = await inquirer.prompt(
    {
        name: "para",
        type: "input",
        message: chalk.rgb(255, 0, 255)("Enter your paragraph which you want to count words and characters.")
    }
)
//remove the white spaces and extra spaces 
const words= paragraph.para.trim().split(" ").filter(word => word !== "");

// print the array of words
console.log(words);

// count the words of paragraph and print in the console
console.log(chalk.rgb(0, 240, 255)("There are ", words.length, "words in this paragraph."));

//store all characters in a veriable with out spaces
const characters = words.join("");

//print the all characters
console.log(chalk.rgb(200, 230, 90)(characters));

//count and print the number of characters in console
console.log(chalk.rgb(0, 255, 190)(`There are ${characters.length} characters in this paragraph.`));

