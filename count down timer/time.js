#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// welcome note
console.log(chalk.cyanBright("~").repeat(60));
console.log(chalk.cyanBright('\t"COUNT DOWN TIMER"'));
console.log(chalk.cyanBright.italic('\t\t"S.R.Chohan"'));
console.log(chalk.cyanBright("~").repeat(60));
//prompt to take input
let userTime = await inquirer.prompt({
    name: "seconds",
    type: "input",
    message: chalk.cyanBright("Enter count down duration in seconds."),
    validate: function (seconds) {
        let valid = !isNaN(seconds) && seconds > 0 && seconds < 60;
        return valid || chalk.red("Please put time(seconds) in digits(less then 60 and greater then 0)");
    }
});
// convert input in number type and save in a variable.
const seconds = parseInt(userTime.seconds);
//create a function to count down.
function startCountDown(sec) {
    // print time in milliseconds from 1 jan 1970
    const currentTime = Date.now();
    // convert user's time into milliseconds
    const userEnterTime = sec * 1000;
    const totalTime = currentTime + userEnterTime;
    // setInterval
    const timer = setInterval(() => {
        //time in milliseconds
        const currentTime = Date.now();
        // calculate remaining time in milliseconds
        const remainingTime = totalTime - currentTime;
        //convert into seconds
        const inSeconds = Math.round(remainingTime / 1000) + 1;
        if (inSeconds >= 0) {
            //over write statement
            process.stdout.write(chalk.yellowBright(`\rRemaining time ${chalk.greenBright(inSeconds)} seconds;`));
        }
        else {
            clearInterval(timer);
            console.log(chalk.cyanBright("\n\nTime up!"));
            console.log(chalk.cyanBright("Thank you for using my count down timer."));
        }
    }, 1000);
}
//starting statement
console.log(chalk.yellowBright(`Starting CountDown for ${chalk.greenBright(seconds)} seconds.....`));
//function invoke
startCountDown(seconds);
console.log(chalk.cyanBright("~").repeat(60));
