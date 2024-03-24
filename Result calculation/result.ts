#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//prompt to take user input
let marks= await inquirer.prompt([
    {name: "totalMarksPerPaper", type: "number",
     message: chalk.cyanBright("enter the total marks per paper"),
validate: function(totalMarksPerPaper){
    parseFloat(totalMarksPerPaper);
    let isValid = !isNaN(totalMarksPerPaper) && totalMarksPerPaper<=100 && totalMarksPerPaper>0;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
    {name: "eng", type: "number",
     message: chalk.blueBright("English:\nenter obtained marks:"),
validate: function(eng){
    parseFloat(eng);
    let isValid:boolean = !isNaN(eng)  && eng >= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "math", type: "number", 
message: chalk.redBright("Mathematics:\nenter obtained marks:"),
validate: function(math){
    parseFloat(math);
    let isValid = !isNaN(math)  && math >= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "sci", type: "number",
 message: chalk.greenBright("Science:\nenter obtained marks:"),
validate: function(sci){
    parseFloat(sci);
    let isValid = !isNaN(sci)  && sci >= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "comp", type: "number",
 message: chalk.yellowBright("Computer:\nenter obtained marks:"),
validate: function(comp){
    parseFloat(comp);
    let isValid = !isNaN(comp)  && comp >= 0;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "sSt", type: "number", 
message: chalk.whiteBright("S.Study:\nenter obtained marks:"),
validate: function(sSt){
    parseFloat(sSt);
    let isValid = !isNaN(sSt)  && sSt>= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "urdu", type: "number", 
message: chalk.hex("Urdu:\nenter obtained marks:"),
validate: function(urdu){
    parseFloat(urdu);
    let isValid = !isNaN(urdu)  && urdu >= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "isl", type: "number",
 message: chalk.cyan("Islamiyat:\nenter obtained marks:"),
validate: function(isl){
    parseFloat(isl);
    let isValid = !isNaN(isl)  && isl >= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number:');
}},
{name: "sindhi", type: "number",
 message:chalk.magenta("Sindhi:\nenter obtained marks"),
validate: function(sindhi){
    parseFloat(sindhi);
    let isValid = !isNaN(sindhi)  && sindhi >= 0 ;
    return isValid || chalk.bgMagenta('please enter the valid number');
}},
]);

//print the marks of all subjects one at a time
for (let i=1; i< marks.length; i++) {
    let subjects=[0, 'English','Mathematices', 'Science', 'Computer', 'S.Study', 'Urdu', 'Islamiyat', 'Sindhi'];
    console.log(chalk.blueBright(subjects[i]+': ',marks[i]));
}

//show total marks
let totalMarks= marks.totalMarksPerPaper * 8;
console.log(chalk.yellowBright('Total Marks:  ', totalMarks));
 
// print obtained marks
let obtainedMarks=Number(marks.eng)+ Number(marks.math)+ Number(marks.sci)+ Number(marks.comp)+Number(marks.sSt)+ Number(marks.urdu)+Number(marks.isl)+ Number(marks.sindhi);
console.log(chalk.cyanBright('Total Obtained Marks: ',obtainedMarks));

// show percentage
let percentage= (obtainedMarks /totalMarks)*100;
console.log(chalk.greenBright('Percentage: ', percentage+'%'));

// grade and remarks
if (percentage >= 90) {
    console.log(chalk.blueBright.bold('Grade: A+'));
    console.log(chalk.cyanBright('Remarks: Awesome'));
} else if (percentage <90 && percentage >= 80){
    console.log(chalk.blueBright.bold('Grade: A'));
    console.log(chalk.cyanBright('Remarks: Excellent'));   
} else if (percentage <80 && percentage >= 70){
    console.log(chalk.blueBright.bold('Grade: B'));
    console.log(chalk.cyanBright('Remarks: Good'));   
} else if (percentage <70 && percentage >= 60){
    console.log(chalk.blueBright.bold('Grade: C'));
    console.log(chalk.cyanBright('Remarks: Fine'));   
} else if (percentage <60 && percentage >= 40){
    console.log(chalk.blueBright.bold('Grade: Pass'));
    console.log(chalk.cyanBright('Remarks: Improve your self'));   
} else if (percentage <40){
    console.log(chalk.redBright.bind('Fail'));
    console.log(chalk.redBright.italic('Remarks: Not satisfying'));   
}