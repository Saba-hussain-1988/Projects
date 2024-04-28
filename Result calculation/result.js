#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//prompt to take user input
let marks = await inquirer_1.default.prompt([
    { name: "totalMarksPerPaper", type: "number",
        message: chalk_1.default.cyanBright("enter the total marks per paper"),
        validate: function (totalMarksPerPaper) {
            parseFloat(totalMarksPerPaper);
            let isValid = !isNaN(totalMarksPerPaper) && totalMarksPerPaper <= 100 && totalMarksPerPaper > 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "eng", type: "number",
        message: chalk_1.default.blueBright("English:\nenter obtained marks:"),
        validate: function (eng) {
            parseFloat(eng);
            let isValid = !isNaN(eng) && eng >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "math", type: "number",
        message: chalk_1.default.redBright("Mathematics:\nenter obtained marks:"),
        validate: function (math) {
            parseFloat(math);
            let isValid = !isNaN(math) && math >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "sci", type: "number",
        message: chalk_1.default.greenBright("Science:\nenter obtained marks:"),
        validate: function (sci) {
            parseFloat(sci);
            let isValid = !isNaN(sci) && sci >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "comp", type: "number",
        message: chalk_1.default.yellowBright("Computer:\nenter obtained marks:"),
        validate: function (comp) {
            parseFloat(comp);
            let isValid = !isNaN(comp) && comp >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "sSt", type: "number",
        message: chalk_1.default.whiteBright("S.Study:\nenter obtained marks:"),
        validate: function (sSt) {
            parseFloat(sSt);
            let isValid = !isNaN(sSt) && sSt >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "urdu", type: "number",
        message: chalk_1.default.hex("Urdu:\nenter obtained marks:"),
        validate: function (urdu) {
            parseFloat(urdu);
            let isValid = !isNaN(urdu) && urdu >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "isl", type: "number",
        message: chalk_1.default.cyan("Islamiyat:\nenter obtained marks:"),
        validate: function (isl) {
            parseFloat(isl);
            let isValid = !isNaN(isl) && isl >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number:');
        } },
    { name: "sindhi", type: "number",
        message: chalk_1.default.magenta("Sindhi:\nenter obtained marks"),
        validate: function (sindhi) {
            parseFloat(sindhi);
            let isValid = !isNaN(sindhi) && sindhi >= 0;
            return isValid || chalk_1.default.bgMagenta('please enter the valid number');
        } },
]);
//print the marks of all subjects one at a time
for (let i = 1; i < marks.length; i++) {
    let subjects = [0, 'English', 'Mathematices', 'Science', 'Computer', 'S.Study', 'Urdu', 'Islamiyat', 'Sindhi'];
    console.log(chalk_1.default.blueBright(subjects[i] + ': ', marks[i]));
}
//show total marks
let totalMarks = marks.totalMarksPerPaper * 8;
console.log(chalk_1.default.yellowBright('Total Marks:  ', totalMarks));
// print obtained marks
let obtainedMarks = Number(marks.eng) + Number(marks.math) + Number(marks.sci) + Number(marks.comp) + Number(marks.sSt) + Number(marks.urdu) + Number(marks.isl) + Number(marks.sindhi);
console.log(chalk_1.default.cyanBright('Total Obtained Marks: ', obtainedMarks));
// show percentage
let percentage = (obtainedMarks / totalMarks) * 100;
console.log(chalk_1.default.greenBright('Percentage: ', percentage + '%'));
// grade and remarks
if (percentage >= 90) {
    console.log(chalk_1.default.blueBright.bold('Grade: A+'));
    console.log(chalk_1.default.cyanBright('Remarks: Awesome'));
}
else if (percentage < 90 && percentage >= 80) {
    console.log(chalk_1.default.blueBright.bold('Grade: A'));
    console.log(chalk_1.default.cyanBright('Remarks: Excellent'));
}
else if (percentage < 80 && percentage >= 70) {
    console.log(chalk_1.default.blueBright.bold('Grade: B'));
    console.log(chalk_1.default.cyanBright('Remarks: Good'));
}
else if (percentage < 70 && percentage >= 60) {
    console.log(chalk_1.default.blueBright.bold('Grade: C'));
    console.log(chalk_1.default.cyanBright('Remarks: Fine'));
}
else if (percentage < 60 && percentage >= 40) {
    console.log(chalk_1.default.blueBright.bold('Grade: Pass'));
    console.log(chalk_1.default.cyanBright('Remarks: Improve your self'));
}
else if (percentage < 40) {
    console.log(chalk_1.default.redBright.bind('Fail'));
    console.log(chalk_1.default.redBright.italic('Remarks: Not satisfying'));
}
