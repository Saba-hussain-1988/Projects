#! /usr/bin/env node
//import chalk and inquirer
import inquirer from "inquirer";
import chalk from "chalk";
// welcome note
console.log(chalk.cyanBright("~").repeat(60));
console.log(chalk.bold.cyanBright("\tModel Test MCQs"));
console.log(chalk.cyanBright.italic.bold("\t\tBy S.R.Chohan"));
console.log(chalk.cyanBright("~").repeat(60));
// declare a variable to save score
let score = 0;
// MCQs list 
let Quiz_1 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.1: Choose correct syntax to declare tuples:\n`,
    choices: [
        "let myTuple = [string, number, boolean];",
        "let myTuple: [string, number, boolean];",
        "const myTuple: [string, number, boolean];",
        "let myTuple = [string, number, boolean];"
    ],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q1
switch (Quiz_1.Q) {
    case "let myTuple: [string, number, boolean];":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright(`Incorrect!\nThe correct answer was: 
                \t"let myTuple: [string, number, boolean];"`));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 2
let Quiz_2 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.2: Choose the correct return type for this function:\n 
        function concat(firstName: string, lastName: string):____{
        console.log(firstName + " " + lastName);
        }\n`,
    choices: ["null", "void", "string", "undefined"],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q2
switch (Quiz_2.Q) {
    case "string":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"string"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 3
let Quiz_3 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.3: What is the out put of the code:\n
        let value: string | number = "Hello";
        console.log(typeof value);\n`,
    choices: ["unknown", "number", "boolean", "string"],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q3
switch (Quiz_3.Q) {
    case "string":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"string"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 4
let Quiz_4 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.4: The constant can:(Choose correct one) \n`,
    choices: [
        "re-assignable.",
        "can declare only.",
        "have global scope.",
        "can not re-assignable."
    ],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q4
switch (Quiz_4.Q) {
    case "can not re-assignable.":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"can not re-assignable."'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 5
let Quiz_5 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.5: Which statement is correct for type void?\n`,
    choices: [
        "can assign to a variable",
        "can assign to object and array",
        "can assign to return type of a function",
        "can assign to parameter of a function"
    ],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q5
switch (Quiz_5.Q) {
    case "can assign to return type of a function":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"can assign to return type of a function"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 6
let Quiz_6 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.6: What is the out put of the code?\n
        let x= 5;
        let y= 20;
        console.log(y > x && x != y && typeof x === "number");\n`,
    choices: ["true", "false", "true, true, number", "no output"],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q6
switch (Quiz_6.Q) {
    case "true":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"true"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 7
let Quiz_7 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.7: What is typeScript?\n`,
    choices: [
        "it is a language.",
        "it is a subset of java script.",
        "it is a tool for command line projects.",
        "it is a supper set of java script."
    ],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q7
switch (Quiz_7.Q) {
    case "it is a supper set of java script.":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"it is a supper set of java script."'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 8
let Quiz_8 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.8: Which is correct?\n`,
    choices: [
        "type set :{name: string};",
        "type set = {name: string};",
        "type set = {name: 'string'};",
        "type = set {name: string};"
    ],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q8
switch (Quiz_8.Q) {
    case "type set = {name: string};":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"type set = {name: string};"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
//Quiz 9
let Quiz_9 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.9: Which key word is used to declare a global scope variable?\n`,
    choices: ["var", "let", "const", "function"],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q9
switch (Quiz_9.Q) {
    case "var":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"var"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
let Quiz_10 = await inquirer.prompt({
    name: "Q", type: "list",
    message: `Q.10: which method is used to add an element in the end of an array?\n`,
    choices: ["pop", "slice", "filter", "push"],
});
//separator
console.log(chalk.cyanBright("~").repeat(60));
// result of Q10
switch (Quiz_10.Q) {
    case "push":
        ++score;
        console.log(chalk.greenBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright("your answer is correct."));
        console.log(chalk.blueBright("score =", score));
        break;
    default:
        console.log(chalk.redBright("\n\nresponce:\n"));
        console.log(chalk.yellowBright('Incorrect!\nThe correct answer was: \n"push"'));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
if (score === 10) {
    console.log(chalk.cyanBright.italic(`Awesome!
            you've got score ${score}/10`));
}
else if (score > 6 && score <= 9) {
    console.log(chalk.cyanBright.italic(`Good job!
        you've got score ${score}/10`));
}
else {
    console.log(chalk.cyanBright.italic(`Not satisfying!
        you've to improve, got score ${score}/10`));
}
;
//separator
console.log(chalk.cyanBright("~").repeat(60));
