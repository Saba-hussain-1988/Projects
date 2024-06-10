//? ======= import statements ========
import inquirer from "inquirer";
import chalk from "chalk";
//todo )>>>>>>>> OOP Class Students Objects <<<<<<<<
class StudentObj {
    static num = 1;
    studentIDnumber;
    fullName;
    age;
    gender;
    advanceBalance;
    isFeePaid;
    courses;
    classDay_Time;
    constructor(
    //parameters
    fullName, age, gender, advanceBalance) {
        // initialization
        this.studentIDnumber = this.GenerateIDcode(StudentObj.num++);
        this.fullName = fullName.toUpperCase();
        this.age = age;
        this.gender = gender;
        this.advanceBalance = advanceBalance;
        this.isFeePaid = false;
        this.courses = [];
        this.classDay_Time = '';
    }
    //! _______Create Method to  enroll 
    EnrollStudent(course) {
        this.courses.push(course);
    }
    //! _______create method to view current balance
    ViewBalance() {
        console.log(chalk.bold.cyanBright('~').repeat(60));
        console.log(`${chalk.cyanBright.bold(this.fullName)}'s current balance is ${chalk.cyanBright.bold(this.advanceBalance)} PKR only.`);
        console.log(chalk.bold.cyanBright('~').repeat(60));
    }
    //!_______create method to pay tuition fee
    PayFees(fee) {
        this.advanceBalance -= fee;
        this.isFeePaid = true;
        console.log(chalk.bold.cyanBright('~').repeat(60));
        console.log(`${chalk.cyanBright.bold(this.fullName)} paid successfully ${chalk.cyanBright.bold(fee)} PKR for tuition fees.`);
        console.log(`The remaining balance is ${chalk.cyanBright.bold(this.advanceBalance)} PKR.`);
        console.log(chalk.bold.cyanBright('~').repeat(60));
    }
    //! _______create method to show status
    ShowStatus() {
        console.log(chalk.bold.cyanBright('~').repeat(60));
        console.log(`Student ID: ${chalk.cyanBright.bold(this.studentIDnumber)}`);
        console.log(`Name: ${chalk.cyanBright.bold(this.fullName)}`);
        console.log(`Age: ${chalk.cyanBright.bold(this.age)}`);
        console.log(`Gender: ${chalk.cyanBright.bold(this.gender)}`);
        console.log(`Current Balance: ${chalk.cyanBright.bold(this.advanceBalance)}`);
        console.log(`Course: ${chalk.cyanBright.bold(this.courses)}`);
        console.log(`Is Fee Paid: ${chalk.cyanBright.bold(this.isFeePaid)}`);
        console.log(`Class Day & Time: ${chalk.cyanBright.bold(this.classDay_Time)}`);
        console.log(chalk.bold.cyanBright('~').repeat(60));
    }
    //! ______Create method to generate five digit ID number
    GenerateIDcode(num) {
        let value = num;
        let ID = ``;
        if (value < 10) {
            ID = `0000${value}`;
        }
        else if (value < 100) {
            ID = `000${value}`;
        }
        else if (value < 1000) {
            ID = `00${value}`;
        }
        else if (value < 10000) {
            ID = `0${value}`;
        }
        return ID;
    }
    ;
    //! _______ method to concatenate of class day and time
    classDayTime(day, time) {
        this.classDay_Time = day + '_' + time;
    }
    ;
}
//todo )> >>>>>>>>>>>Class to manage students in an array <<<<<<<
//* use inheritance
class StudentsArray {
    students2024;
    constructor() {
        this.students2024 = [];
    }
    //! _____ create method to add a new student in array by using push method
    add_student(fullName, age, gender, advanceBalance) {
        //*call super class to create an object of an student
        let std = new StudentObj(fullName, age, gender, advanceBalance);
        //* add student by push method
        this.students2024.push(std);
        //*print confirmation message to the student
        switch (std.gender) {
            case "Female":
                console.log(chalk.bold.cyanBright('~').repeat(60));
                console.log(`Miss ${chalk.cyanBright.bold(std.fullName)}! You have successfully add in session 2024.`);
                console.log(`Your student ID code is: ${chalk.cyanBright.bold(std.studentIDnumber)}.`);
                console.log(chalk.bold.cyanBright('~').repeat(60));
                break;
            case "Male":
                console.log(chalk.bold.cyanBright('~').repeat(60));
                console.log(`Mr ${chalk.cyanBright.bold(std.fullName)}! You have successfully add in session 2024.`);
                console.log(`Your student ID code is: ${chalk.cyanBright.bold(std.studentIDnumber)}.`);
                console.log(chalk.bold.cyanBright('~').repeat(60));
                break;
        }
    }
    //! ______write a method to enroll student in a course
    enroll_student(IDcode, course) {
        //* find the student by calling the method
        let stdFound = this.find_student(IDcode);
        if (stdFound) {
            //* call the super class's method
            stdFound.EnrollStudent(course);
            console.log(chalk.bold.cyanBright('~').repeat(60));
            console.log(`${chalk.cyanBright.bold(stdFound.fullName)}! you have successfully enrolled in ${chalk.cyanBright.bold(course)}.`);
            console.log(chalk.bold.cyanBright('~').repeat(60));
        }
        else {
            console.log(chalk.redBright('\nIncorrect student ID. Please put in correct student ID.\n'));
        }
    }
    //! ______write a method to select class slot
    select_slot(IDcode, day, time) {
        //* find the student by calling the method
        let stdFound = this.find_student(IDcode);
        if (stdFound) {
            //* call the super class's method
            stdFound.classDayTime(day, time);
            console.log(chalk.bold.cyanBright('~').repeat(60));
            console.log(`${chalk.cyanBright.bold(stdFound.fullName)}! you have successfully add in class of ${chalk.cyanBright.bold(stdFound.classDay_Time)}.`);
            console.log(chalk.bold.cyanBright('~').repeat(60));
        }
        else {
            console.log(chalk.redBright('\nIncorrect student ID. Please put in correct student ID.\n'));
        }
    }
    //! ______write a Method to show current balance
    show_current_balance(IDcode) {
        //* find the student by calling the method
        let stdFound = this.find_student(IDcode);
        if (stdFound) {
            //* call the super class's method to view balance
            stdFound.ViewBalance();
        }
        else {
            console.log(chalk.redBright('\nIncorrect student ID. Please put in correct student ID.\n'));
        }
        ;
    }
    ;
    //! ______write a method to pay fee of a student
    fees_pay(IDcode, amount) {
        //* find the student by calling the method
        let stdFound = this.find_student(IDcode);
        if (stdFound) {
            //* call the super class's method to pay fees
            stdFound.PayFees(amount);
        }
        else {
            console.log(chalk.redBright('\nIncorrect student ID. Please put in correct student ID.\n'));
        }
        ;
    }
    ;
    //! _____write a method to show a student's status
    show_status(IDcode) {
        //* find the student by calling the method
        let stdFound = this.find_student(IDcode);
        if (stdFound) {
            //* call the super class's method to show student's status;'
            stdFound.ShowStatus();
        }
        else {
            console.log(chalk.redBright('\nIncorrect student ID. Please put in correct student ID.\n'));
        }
        ;
    }
    ;
    //! ______Write a method to remove a student
    remove_student(IDcode) {
        //* created these two variables here so that we can return and use them in an undo method.
        let index = -1;
        let removed;
        //* find the student by calling the method
        let stdFound = this.find_student(IDcode);
        if (stdFound) {
            removed = stdFound;
            //* now find the index of that student
            index = this.students2024.indexOf(stdFound);
            //* remove a student by using splice method
            this.students2024.splice(index, 1);
        }
        else {
            console.log(chalk.redBright('\nIncorrect student ID. Please put in correct student ID.\n'));
        }
        ;
        return [index, removed];
    }
    ;
    //! ______write a method to undo removed student
    undo(index, removed) {
        //* to re-include last element which was deleted
        this.students2024.splice(index, 0, removed);
    }
    ;
    //! ______write a Method to find a student by its ID code
    find_student(IDcode) {
        return this.students2024.find(std => std.studentIDnumber === IDcode);
    }
    ;
}
//todo )> >>>>>>>>>>> Student Management <<<<<<<<<<<<<<
//* welcome note.
console.log(chalk.rgb(250, 200, 179).bold('-'.repeat(60)));
console.log(chalk.rgb(0, 250, 255).bold.italic('\t\t\tWELCOME'));
console.log(chalk.rgb(0, 250, 255).bold.italic('\tIn Students Management Program'));
console.log(chalk.rgb(0, 250, 255).bold('\t\t\t\tBy S.R.Chohan'));
console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));
//calling the child class
let newStudent = new StudentsArray();
//* create a boolean variable for working while loop
let condition = true;
//*  while loop to run project
while (condition) {
    //* take input from user
    let main = await inquirer.prompt([
        {
            name: 'mainMenu', type: 'list',
            message: 'select operation which you wanna to do:',
            choices: [
                'AddStudent',
                'EnrollStudent',
                "Current Balance",
                "select slot",
                "Pay Fees",
                'ShowStatus',
                'RemoveStudent',
                "Undo",
                'Exit'
            ]
        },
    ]);
    //* these variables are used in "undo function"""
    let index;
    let remove;
    //! _________ AddStudent __________
    switch (main.mainMenu) {
        case 'AddStudent':
            console.log(chalk.rgb(179, 230, 255)(`\nPlease fill this Enrollment form.\n`));
            //take input from user
            let enroll = await inquirer.prompt([
                {
                    name: 'fullName', type: 'input',
                    message: 'Please enter your full name:',
                    validate: function (fullName) {
                        let isValid = fullName.length > 0 && isNaN(fullName);
                        return isValid || 'Please enter your name:';
                    }
                },
                {
                    name: 'age', type: 'input', message: 'Enter your age:',
                    validate: function (age) {
                        age = Number(age);
                        let isValid = age <= 70 && age >= 13;
                        return isValid || "To enroll here the age limit is 13 to 70.";
                    }
                },
                {
                    name: 'gender', type: "list", choices: ['Male', 'Female'], message: "select gender:"
                },
                {
                    name: 'balance', type: 'input',
                    message: 'Pay 50,000 PKR for advance balance:',
                    validate: function (balance) {
                        let intValue = parseInt(balance);
                        let isValid = intValue === 50000 && !isNaN(intValue);
                        return isValid || 'Please pay 50000 pkr, its required:';
                    }
                },
            ]);
            //? calling the child class Method to add new student
            newStudent.add_student(enroll.fullName, enroll.age, enroll.gender, enroll.balance);
            break;
        case 'EnrollStudent':
            // to take input from user
            let enrolled = await inquirer.prompt([
                {
                    name: 'find', type: 'input', message: "Please put student's five digit ID code.",
                    validate: function (find) {
                        let num = parseInt(find);
                        let isValid = find.length === 5 && !isNaN(num);
                        return isValid || "please put five digit Id code";
                    }
                },
                {
                    name: 'course', type: 'list', message: 'select course which you want to enroll.',
                    choices: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
                }
            ]);
            //? calling the child class method to enroll student to the selected  course
            newStudent.enroll_student(enrolled.find, enrolled.course);
            break;
        case "Current Balance":
            //to take input from user
            let find = await inquirer.prompt({
                name: 'find', type: 'input', message: "Please put student's five digit ID code.",
                validate: function (find) {
                    let num = parseInt(find);
                    let isValid = find.length === 5 && !isNaN(num);
                    return isValid || "please put five digit Id code";
                }
            });
            //? calling the child class Method to show student's balance
            newStudent.show_current_balance(find.find);
            break;
        case "select slot":
            // to take input from user
            let slot = await inquirer.prompt([
                {
                    name: 'find', type: 'input', message: "Please put student's five digit ID code.",
                    validate: function (find) {
                        let num = parseInt(find);
                        let isValid = find.length === 5 && !isNaN(num);
                        return isValid || "please put five digit Id code";
                    }
                },
                {
                    name: 'day', type: 'list', message: 'select a day.',
                    choices: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                },
                {
                    name: 'time', type: 'list', message: 'select slot.',
                    choices: ['9AM to 12PM', '5PM to 8PM']
                }
            ]);
            //? calling the child class Method to add in slot
            newStudent.select_slot(slot.find, slot.day, slot.time);
            break;
        case "Pay Fees":
            // to take input from user
            let pay = await inquirer.prompt([
                {
                    name: 'find', type: 'input', message: "Please put student's five digit ID code.",
                    validate: function (find) {
                        let num = parseInt(find);
                        let isValid = find.length === 5 && !isNaN(num);
                        return isValid || "please put five digit Id code";
                    }
                },
                {
                    name: 'fee', type: 'input', message: 'Please pay 10000 pkr for tuition fees.',
                    validate: function (fee) {
                        let num = parseInt(fee);
                        let isValid = !isNaN(num) && num === 10000;
                        return isValid || "please put five digit Id code";
                    }
                }
            ]);
            // before using the value convert it into a number
            let fees = parseInt(pay.fee);
            //?calling the child class Method to pay student fee
            newStudent.fees_pay(pay.find, fees);
            break;
        case 'ShowStatus':
            //to take input from user
            let status = await inquirer.prompt({
                name: 'find', type: 'input', message: "Please put student's five digit ID code.",
                validate: function (find) {
                    let num = parseInt(find);
                    let isValid = find.length === 5 && !isNaN(num);
                    return isValid || "please put five digit Id code";
                }
            });
            //? calling the child class Method to show student's status
            newStudent.show_status(status.find);
            break;
        case 'RemoveStudent':
            //to take input from user
            let removed = await inquirer.prompt({
                name: 'find', type: 'input', message: "Please put student's five digit ID code.",
                validate: function (find) {
                    let num = parseInt(find);
                    let isValid = find.length === 5 && !isNaN(num);
                    return isValid || "please put five digit Id code";
                }
            });
            //? calling the child class Method to remove student
            [index, remove] = newStudent.remove_student(removed.find);
            //* print statement
            console.log(`Operation is successful:\n ${remove.fullName}, ID code:${remove.studentIDnumber} is leaved.`);
            break;
        case "Undo":
            // Ensure index and remove are defined
            if (typeof index !== 'undefined' && typeof remove !== 'undefined') {
                // Call the child class method to re-include the last removed student
                newStudent.undo(index, remove);
            }
            else {
                console.log(chalk.yellowBright("\nNo student to undo removal for.\n"));
            }
            break;
        case 'Exit':
            condition = false;
    }
    ;
}
;
