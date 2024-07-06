#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import inquirer tool
const inquirer_1 = __importDefault(require("inquirer"));
// import chalk for styling the command line project
const chalk_1 = __importDefault(require("chalk"));
/** declared a variable,
 *  which would store with the random number in loops,
 * Math.random() generates a number between 0 to 1, there are 0 and 1 are exclusive.
 * here's the world of numbers(uncountable list of numbers) in between 0 and 1.
 * like 0.9384858229..., 0.284758599...., 0.0000218383538..., etc*/
let randomNum;
// create a boolean variable to start the game(loop)
let condition = true;
//game runs with while loop
while (condition) {
    //welcome note 
    console.log(chalk_1.default.rgb(244, 136, 217).bold.italic.underline('\n\n\t\t\t\tWELCOME in NUMBER GEUSSING GAME\n'));
    console.log(chalk_1.default.rgb(244, 201, 136)('\tIt can helps to enhance your cognitive skills like critical thinking and problem-solving.\n'));
    console.log(chalk_1.default.rgb(0, 245, 250).bold.underline('\n \t\t"Main Menu"'));
    //ask to user to choose the level of game
    let level = await inquirer_1.default.prompt({
        name: 'option', type: 'list', message: chalk_1.default.rgb(171, 248, 116)("Select:"),
        choices: ['Easy', 'Medium', 'Hard', 'Exit']
    });
    //////// "level Easy"////////
    /////it works between 0 to 3, code for its rounds
    if (level.option === 'Easy') {
        //create the boolean condition for the easy level
        let levelCondition = true;
        //declare variable totalscore
        let totalscore = 0;
        for (let i = 1; levelCondition; i++) {
            //print the round's num
            console.log(chalk_1.default.rgb(252, 5, 252)(`\n\n\t\tRound ${i}\n\n`));
            //generate the rendom number in between 0 to 3
            randomNum = Math.random() * 3;
            let Num = Math.round(randomNum);
            //take input from user
            let guess = await inquirer_1.default.prompt([
                {
                    name: 'num', type: 'input',
                    message: chalk_1.default.rgb(1, 253, 5)("Put your number(0 to 3)"),
                    //check the input is a number, not less thn 0 and greater thn 3 
                    validate: function (num) {
                        let num1 = parseInt(num);
                        let isValid = (num1 >= 0 && num1 <= 3);
                        return isValid || chalk_1.default.rgb(232, 1, 253)('Please enter a valid number.');
                    }
                }
            ]);
            if (levelCondition) {
                // check the answer of user is correct? 
                if (Number(guess.num) === Num) {
                    //score of user
                    let score = 10;
                    // print the winning statement
                    console.log(chalk_1.default.rgb(5, 141, 252)(`\nCongratulation! your number is matched.`));
                    console.log(chalk_1.default.rgb(231, 252, 78).bold(`\n round ${i} clear.`));
                    //add in total score
                    totalscore += score;
                    // print the score and total score
                    console.log(chalk_1.default.rgb(129, 246, 189)(`\ncurrent score: ${score}`));
                    console.log(chalk_1.default.rgb(199, 129, 246)(`\nTotal score: ${totalscore}`));
                }
                // if user loose the game
                else {
                    //check the user ans is close
                    if (Number(guess.num) === Num + 1 || Number(guess.num) === Num - 1) {
                        //score
                        let scorE = 2;
                        // print the statement that user is close enough
                        console.log(chalk_1.default.rgb(103, 255, 184)(`\nYou were close enough.`));
                        console.log(chalk_1.default.rgb(231, 252, 78).bold(`\nThe correct number is ${Num}.`));
                        //add in total score
                        totalscore += scorE;
                        //print the score and total score
                        console.log(chalk_1.default.rgb(129, 246, 189)(`\ncurrent score: ${scorE}`));
                        console.log(chalk_1.default.rgb(199, 129, 246)(`\nTotal score: ${totalscore}`));
                    }
                    //if user geuss was wrong
                    else {
                        //print the loosing statement
                        console.log(chalk_1.default.rgb(9, 202, 255)(`\nSorry! you have lost 5 points.`));
                        console.log(chalk_1.default.rgb(231, 252, 78).bold(`\nThe correct number is ${Num}.`));
                        totalscore -= 5;
                        // total score 
                        console.log(chalk_1.default.rgb(13, 236, 244)(`\nYour total score: ${totalscore}`));
                        // if score less then 0, game out
                        if (totalscore < 0) {
                            console.log(chalk_1.default.rgb(247, 156, 136)('\nYour score is less then 0. You have lost the game.'));
                            levelCondition = false;
                        }
                    }
                }
            }
            if (levelCondition) {
                let isContinue = await inquirer_1.default.prompt({
                    name: 'inOrOut', type: 'confirm', default: true,
                    message: chalk_1.default.rgb(248, 158, 221)('\nDo you want to continue or not(go to main menu)?')
                });
                levelCondition = isContinue.inOrOut;
            }
        }
    }
    ////////// level medium ///////////
    else if (level.option === 'Medium') {
        //create a condition for running the loop
        let levelCondition = true;
        //declare variable totalscore
        let totalscore = 0;
        for (let i = 1; levelCondition; i++) {
            //print the round's num
            console.log(chalk_1.default.rgb(252, 5, 252)(`\n\n\t\tRound ${i}\n\n`));
            //generate the rendom number in between 0 to 5
            randomNum = Math.random() * 5;
            let Num = Math.round(randomNum);
            //take input from user
            let guess = await inquirer_1.default.prompt([
                {
                    name: 'num', type: 'input',
                    message: chalk_1.default.rgb(173, 246, 3)("Put your number(0 to 5)"),
                    //check the input is a number, not less thn 0 and greater thn 5
                    validate: function (num) {
                        let num1 = parseInt(num);
                        let isValid = (num1 >= 0 && num1 <= 5);
                        return isValid || chalk_1.default.rgb(175, 15, 244)('Please enter a valid number.');
                    }
                }
            ]);
            if (levelCondition) {
                // check the answer of user is correct? 
                if (Number(guess.num) === Num) {
                    //score of user
                    let score = 10;
                    // print the winning statement
                    console.log(chalk_1.default.rgb(243, 136, 136)(`\nCongratulation! your number is matched.`));
                    console.log(chalk_1.default.rgb(231, 252, 78).bold(`\n round ${i} clear.`));
                    //add in total score
                    totalscore += score;
                    // print the score and total score
                    console.log(chalk_1.default.rgb(245, 195, 121)(`\ncurrent score: ${score}`));
                    console.log(chalk_1.default.rgb(199, 129, 246)(`\nTotal score: ${totalscore}`));
                }
                // if user loose the game
                else {
                    //check the user ans is close
                    if (Number(guess.num) === Num + 1 || Number(guess.num) === Num - 1) {
                        //score
                        let scorE = 2;
                        // print the statement that user is close enough
                        console.log(chalk_1.default.rgb(103, 255, 184)(`\nYou were close enough.`));
                        console.log(chalk_1.default.rgb(231, 252, 78).bold(`\nThe correct number is ${Num}.`));
                        //add in total score
                        totalscore += scorE;
                        //print the score and total score
                        console.log(chalk_1.default.rgb(245, 195, 121)(`\ncurrent score: ${scorE}`));
                        console.log(chalk_1.default.rgb(199, 129, 246)(`\nTotal score: ${totalscore}`));
                    }
                    //if user geuss was wrong
                    else {
                        //print the loosing statement
                        console.log(chalk_1.default.rgb(9, 202, 255)(`\nSorry! you have lost 5 points.`));
                        console.log(chalk_1.default.rgb(231, 252, 78).bold(`\nThe correct number is ${Num}.`));
                        totalscore -= 5;
                        // total score 
                        console.log(chalk_1.default.rgb(250, 108, 222)(`\nYour total score: ${totalscore}`));
                        //if score less then 0, you are out
                        if (totalscore < 0) {
                            console.log(chalk_1.default.rgb(250, 108, 222)('\nYour score is less then 0. You have lost the game.'));
                            levelCondition = false;
                        }
                    }
                }
            }
            if (levelCondition) {
                let isContinue = await inquirer_1.default.prompt({
                    name: 'inOrOut', type: 'confirm', default: true,
                    message: chalk_1.default.rgb(248, 158, 221)('\nDo you want to continue or not(go to main menu)?')
                });
                levelCondition = isContinue.inOrOut;
            }
        }
    }
    ///////level Hard ///////
    else if (level.option === 'Hard') {
        //create a condition for running the loop
        let levelCondition = true;
        //declare variable totalscore
        let totalscore = 0;
        for (let i = 1; levelCondition; i++) {
            //print the round's num
            console.log(chalk_1.default.rgb(252, 5, 252)(`\n\n\t\tRound ${i}\n\n`));
            //generate the rendom number in between 0 to 9
            randomNum = Math.random() * 9;
            let Num = Math.round(randomNum);
            //take input from user
            let guess = await inquirer_1.default.prompt([
                {
                    name: 'num', type: 'input',
                    message: chalk_1.default.rgb(253, 175, 138)("Put your number(0 to 9)"),
                    //check the input is a number, not less thn 0 and greater thn 9
                    validate: function (num) {
                        let num1 = parseInt(num);
                        let isValid = (num1 >= 0 && num1 <= 9);
                        return isValid || chalk_1.default.rgb(62, 253, 192)('Please enter a valid number.');
                    }
                }
            ]);
            if (levelCondition) {
                // check the answer of user is correct? 
                if (Number(guess.num) === Num) {
                    //score of user
                    let score = 10;
                    // print the winning statement
                    console.log(chalk_1.default.rgb(5, 141, 252)(`\nCongratulation! your number is matched.`));
                    console.log(chalk_1.default.rgb(231, 252, 78).bold(`\n round ${i} clear.`));
                    //add in total score
                    totalscore += score;
                    // print the score and total score
                    console.log(chalk_1.default.rgb(245, 195, 121)(`\ncurrent score: ${score}`));
                    console.log(chalk_1.default.rgb(199, 129, 246)(`\nTotal score: ${totalscore}`));
                }
                // if user loose the game
                else {
                    //check the user ans is close
                    if (Number(guess.num) === Num + 1 || Number(guess.num) === Num - 1) {
                        //score
                        let scorE = 2;
                        // print the statement that user is close enough
                        console.log(chalk_1.default.rgb(103, 255, 184)(`\nYou were close enough.`));
                        console.log(chalk_1.default.rgb(231, 252, 78).bold(`\nThe correct number is ${Num}.`));
                        //add in total score
                        totalscore += scorE;
                        //print the score and total score
                        console.log(chalk_1.default.rgb(245, 195, 121)(`\ncurrent score: ${scorE}`));
                        console.log(chalk_1.default.rgb(199, 129, 246)(`\nTotal score: ${totalscore}`));
                    }
                    //if user geuss was wrong
                    else {
                        //print the loosing statement
                        console.log(chalk_1.default.rgb(9, 202, 255)(`\nSorry! you have lost 5 points.`));
                        console.log(chalk_1.default.rgb(231, 252, 78).bold(`\nThe correct number is ${Num}.`));
                        totalscore -= 5;
                        // total score 
                        console.log(chalk_1.default.rgb(252, 137, 66)(`\nYour total score: ${totalscore}`));
                        //if score less then 0 , game out
                        if (totalscore < 0) {
                            console.log(chalk_1.default.rgb(207, 244, 142)('\nYour score is less then 0. You have lost the game.'));
                            levelCondition = false;
                        }
                    }
                }
            }
            if (levelCondition) {
                let isContinue = await inquirer_1.default.prompt({
                    name: 'inOrOut', type: 'confirm', default: true,
                    message: chalk_1.default.rgb(248, 158, 221)('\nDo you want to continue or not(go to main menu)?')
                });
                levelCondition = isContinue.inOrOut;
            }
        }
    }
    // if user want to leave the game
    else if (level.option === 'Exit') {
        condition = false;
    }
}
