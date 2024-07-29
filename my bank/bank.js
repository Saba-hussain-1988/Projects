#! /usr/bin/env node
// import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";
// class for costumers
class CostumerDetails {
    constructor(name, age, CNIC, gender, contactNumber, balance) {
        this.name = name.toUpperCase();
        this.age = age;
        this.CNIC = CNIC;
        this.gender = gender;
        this.contactNumber = contactNumber;
        this.balance = balance;
        this.accountNumber = this.createAccount();
    }
    // create account number
    createAccount() {
        let num = Math.ceil(Math.random() * 399999);
        return num;
    }
    ;
}
;
;
//create class for bank
class MyBank {
    constructor() {
        this.costumers = [];
    }
    // method to add costumers
    addCostumer(cos) {
        this.costumers.push(cos);
        if (cos.gender === "Male") {
            console.log(chalk.yellowBright(`Sir ${chalk.cyanBright(cos.name)}! your account has been created,
                Your account number is: ${chalk.cyanBright(cos.accountNumber)}`));
        }
        else {
            console.log(chalk.yellowBright(`Madam ${chalk.cyanBright(cos.name)}! your account has been created,
            Your account number is: ${chalk.cyanBright(cos.accountNumber)}`));
        }
        ;
    }
    ;
    //method to find costumer
    findAccount(acc) {
        return this.costumers.find(account => account.accountNumber === acc);
    }
    // method to cash with draw
    cashWithDraw(acc, amount) {
        let findAcc = this.findAccount(acc);
        if (findAcc) {
            if (amount >= findAcc.balance) {
                console.log(chalk.red.bold('Inefficient Balance!'));
            }
            else {
                findAcc.balance -= amount;
                console.log(chalk.yellowBright(`WithDraw Successful!
                    Amount with draw: ${chalk.greenBright(amount)},
                    Remaining Balance: ${chalk.greenBright(findAcc.balance)}`));
            }
        }
        else {
            console.log(chalk.red('Invalid Account number!'));
        }
    }
    ;
    // method to cash deposit
    cashDeposit(acc, amount) {
        let findAcc = this.findAccount(acc);
        if (findAcc) {
            if (amount >= findAcc.balance) {
                console.log(chalk.red.bold('Inefficient Balance!'));
            }
            else {
                findAcc.balance += amount;
                console.log(chalk.yellowBright(`Deposit Successful!
                    You got amount: ${chalk.greenBright(amount)},
                    your Balance is: ${chalk.greenBright(findAcc.balance)}`));
            }
        }
        else {
            console.log(chalk.red('Invalid Account number!'));
        }
    }
    //method to view balance
    ViewBalance(acc) {
        let findAcc = this.findAccount(acc);
        if (findAcc) {
            console.log(chalk.yellow(`Total Balance: ${findAcc.balance}`));
        }
        else {
            console.log(chalk.red(`Invalid) account number`));
        }
    }
    ;
    // method to display costumer's details
    DisplayDetails(acc) {
        let findAcc = this.findAccount(acc);
        if (findAcc) {
            console.log(chalk.yellow(`Costumer's details:`));
            console.log(chalk.yellow(`Full Name: ${chalk.greenBright(findAcc.name)}`));
            console.log(chalk.yellow(`Age: ${chalk.greenBright(findAcc.age)}`));
            console.log(chalk.yellow(`Gender: ${chalk.greenBright(findAcc.gender)}`));
            console.log(chalk.yellow(`CNIC #: ${chalk.greenBright(findAcc.CNIC)}`));
            console.log(chalk.yellow(`Contact Number: ${(chalk.greenBright(findAcc.contactNumber))}`));
            console.log(chalk.yellow(`Total Balance: ${chalk.greenBright(findAcc.balance)}`));
            console.log(chalk.yellow(`Account Number: ${chalk.greenBright(findAcc.accountNumber)}`));
        }
        else {
            console.log(chalk.red(`Invalid) account number`));
        }
    }
}
;
//* welcome note.
console.log(chalk.rgb(250, 200, 179).bold('-'.repeat(60)));
console.log(chalk.rgb(0, 250, 255).bold.italic('\t\t\tWELCOME'));
console.log(chalk.rgb(0, 250, 255).bold.italic('\tIn Bank S-R-C Services'));
console.log(chalk.rgb(0, 250, 255).bold('\t\t\t\tBy S.R.Chohan'));
console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));
//*create an instance from class MyBank
let bank_S_R_C = new MyBank;
//* create a boolean variable for working while loop
let condition = true;
//*  while loop to run project
while (condition) {
    //* choose bank services
    let main = await inquirer.prompt([
        {
            name: 'menu', type: 'list',
            message: 'select operation which you wanna to do:',
            choices: [
                'Add Customer',
                "View Balance",
                "Cash withdraw",
                "Cash Deposit",
                "Display Details",
                'Exit'
            ]
        },
    ]);
    //switch statements
    switch (main.menu) {
        //add customer
        case 'Add Customer':
            console.log(chalk.rgb(179, 230, 255)(`\nPlease fill this information..\n`));
            //take input from user
            let info = await inquirer.prompt([
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
                        age = parseInt(age);
                        let isValid = !isNaN(age) && age >= 18;
                        return isValid || "Only 18+ peoples are able to open their accounts.";
                    }
                },
                {
                    name: 'gender', type: "list", choices: ['Male', 'Female'], message: "select gender:"
                },
                {
                    name: 'balance', type: 'input',
                    message: 'Add minimum 5000 to open your account.',
                    validate: function (balance) {
                        let intValue = parseInt(balance);
                        let isValid = intValue >= 5000 && !isNaN(intValue);
                        return isValid || 'Please pay minimum 5000 pkr, its required:';
                    }
                },
                {
                    name: 'contactNumber', type: 'input', message: 'Enter your contact number:',
                    validate: function (contactNumber) {
                        let contact = parseInt(contactNumber);
                        let isValid = !isNaN(contact) && contactNumber.length == 11;
                        return isValid || "03xxxxxxxxx put carefully.";
                    }
                },
                {
                    name: 'CNIC', type: 'input', message: 'Enter CNIC number:',
                    validate: function (CNIC) {
                        let CNI = parseInt(CNIC);
                        let isValid = !isNaN(CNI) && CNIC.length == 13;
                        return isValid || "xxxxx-xxxxxxx-x put ";
                    }
                },
            ]);
            //call class instance
            let newCostumer = new CostumerDetails(info.fullName, info.age, info.CNIC, info.gender, info.contactNumber, info.balance);
            //add instance in child class
            bank_S_R_C.addCostumer(newCostumer);
            break;
        //view balance
        case "View Balance":
            let find = await inquirer.prompt({
                name: "acc", type: "number", message: "Please Put your account number:"
            });
            bank_S_R_C.ViewBalance(find.acc);
            break;
        //withdraw
        case "Cash withdraw":
            let draw = await inquirer.prompt([
                {
                    name: "acc", type: "number", message: "Please put your account number:"
                },
                {
                    name: "amount", type: "number", message: "Put your desired amount"
                }
            ]);
            bank_S_R_C.cashWithDraw(draw.acc, draw.amount);
            break;
        //deposit
        case "Cash Deposit":
            let deposit = await inquirer.prompt([
                {
                    name: "acc", type: "number", message: "Please put your account number:"
                },
                {
                    name: "amount", type: "number", message: "Put your desired amount"
                }
            ]);
            bank_S_R_C.cashDeposit(deposit.acc, deposit.amount);
            break;
        //display costumer's details
        case "Display Details":
            let dep = await inquirer.prompt([
                {
                    name: "acc", type: "number", message: "Please put your account number:"
                }
            ]);
            bank_S_R_C.DisplayDetails(dep.acc);
            break;
        //exit
        case 'Exit':
            condition = false;
    }
}
