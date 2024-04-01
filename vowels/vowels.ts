

import inquirer from "inquirer";
import chalk from "chalk";

let vowels:string[]= ['a', 'e', 'i', 'o', 'u'];
let consonant:string[]=['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let alpha = await inquirer.prompt(
    {
        name : 'vowe', type: "input", message: chalk.rgb(199, 249, 111)("please put a singal alphabet:"),
        validate: function(vowe){
            let length:number = vowe.length();
            let isValide = isNaN(vowe) && length ===1;
            return isValide || chalk.rgb(250, 82, 250)("please enter a singal number:");
        }
    }
)

let letter = (alpha.vowe).toLowerCase();
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o'|| letter === 'u'){
    console.log(`${alpha.vowe} is a vowel.`);
} else if (letter==='b' || letter === 'c' || letter==='d' || letter==='f' || letter==='g' || letter==='h' || letter==='j'
|| letter==='k' || letter==='l' || letter==='m' || letter==='n' || letter==='p' || letter==='q' || letter==='r' ||
 letter==='s' || letter==='t' || letter==='v' || letter==='w' || letter==='x' || letter==='y' || letter==='z'){
    console.log(`${alpha.vowe} is a consonant.`);
}else {
    console.log('Invalid entry.');
}
