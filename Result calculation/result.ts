import inquirer from "inquirer";
import chalk from "chalk";

//prompt to take user input
let marks= await inquirer.prompt([
    {name: "totalMarksPerPaper", type: "number", message: "enter the total marks of a paper",
validate: function(totalMarksPerPaper){
    parseFloat(totalMarksPerPaper);
    let isValid = !isNaN(totalMarksPerPaper) && totalMarksPerPaper<=100 && totalMarksPerPaper>0;
    return isValid || 'please enter the valid number.';
}},
    {name: "eng", type: "number", message: "English:\nenter obtained marks",
validate: function(eng){
    parseFloat(eng);
    let isValid:boolean = !isNaN(eng)  && eng >= 0 ;
    return isValid || 'please enter the valid number';
}},
{name: "math", type: "number", message: "Mathematics:\nenter obtained marks",
validate: function(math){
    parseFloat(math);
    let isValid = !isNaN(math)  && math >= 0 ;
    return isValid || 'please enter the valid number';
}},
{name: "sci", type: "number", message: "Science:\nenter obtained marks",
validate: function(sci){
    parseFloat(sci);
    let isValid = !isNaN(sci)  && sci >= 0 ;
    return isValid || 'please enter the valid number';
}},
{name: "comp", type: "number", message: "Computer:\nenter obtained marks",
validate: function(comp){
    parseFloat(comp);
    let isValid = !isNaN(comp)  && comp >= 0;
    return isValid || 'please enter the valid number';
}},
{name: "sSt", type: "number", message: "S.Study:\nenter obtained marks",
validate: function(sSt){
    parseFloat(sSt);
    let isValid = !isNaN(sSt)  && sSt>= 0 ;
    return isValid || 'please enter the valid number';
}},
{name: "urdu", type: "number", message: "Urdu:\nenter obtained marks",
validate: function(urdu){
    parseFloat(urdu);
    let isValid = !isNaN(urdu)  && urdu >= 0 ;
    return isValid || 'please enter the valid number';
}},
{name: "isl", type: "number", message: "Islamiyat:\nenter obtained marks",
validate: function(isl){
    parseFloat(isl);
    let isValid = !isNaN(isl)  && isl >= 0 ;
    return isValid || 'please enter the valid number';
}},
{name: "sindhi", type: "number", message: "Sindhi:\nenter obtained marks",
validate: function(sindhi){
    parseFloat(sindhi);
    let isValid = !isNaN(sindhi)  && sindhi >= 0 ;
    return isValid || 'please enter the valid number';
}},
]);

//print the marks of all subjects one at a time
for (let i=1; i< marks.length; i++) {
    let subjects=[0, 'English','Mathematices', 'Science', 'Computer', 'S.Study', 'Urdu', 'Islamiyat', 'Sindhi'];
    console.log(subjects[i]+': ',marks[i]);
}

//show total marks
let totalMarks= marks.totalMarksPerPaper * 8;
console.log('Total Marks:  ', totalMarks);
 
// print obtained marks
let obtainedMarks=Number(marks.eng)+ Number(marks.math)+ Number(marks.sci)+ Number(marks.comp)+Number(marks.sSt)+ Number(marks.urdu)+Number(marks.isl)+ Number(marks.sindhi);
console.log('Total Obtained Marks: ',obtainedMarks);

// show percentage
let percentage= (obtainedMarks /totalMarks)*100;
console.log('Percentage: ', percentage+'%');

// grade and remarks
if (percentage >= 90) {
    console.log('Grade: A+');
    console.log('Remarks: Awesome');
} else if (percentage <90 && percentage >= 80){
    console.log('Grade: A');
    console.log('Remarks: Excellent');   
} else if (percentage <80 && percentage >= 70){
    console.log('Grade: B');
    console.log('Remarks: Good');   
} else if (percentage <70 && percentage >= 60){
    console.log('Grade: C');
    console.log('Remarks: Fine');   
} else if (percentage <60 && percentage >= 40){
    console.log('Grade: Pass');
    console.log('Remarks: Improve your self');   
} else if (percentage <40){
    console.log('Fail');
    console.log('Remarks: Not satisfying');   
}