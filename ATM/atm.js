#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// account balance
let currentBalance = 500000;
//pin code
let myPin = 2502474;
//take input from user
let ans = await inquirer_1.default.prompt({ name: "pin", type: "number", message: chalk_1.default.rgb(252, 117, 202)('enter your pin: ') });
//check the pin is matched or not
if (ans.pin === myPin) {
    console.log(chalk_1.default.rgb(167, 252, 63)("correct pin code! \n login successful:"));
    //input from user to select an option
    let operAns = await inquirer_1.default.prompt({ name: "operation", type: "list", message: chalk_1.default.rgb(245, 162, 60)('please select a operation'),
        choices: ['withdraw', 'checkBalance', "fundTransfer", 'fastCash'] });
    //if user want to withdraw money
    if (operAns.operation === 'withdraw') {
        //ask to user about amount
        let amountAns = await inquirer_1.default.prompt({ name: "amount", type: "number", message: chalk_1.default.rgb(239, 245, 60)('enter your amount:') });
        // check if the amount is greater than current balance
        if (amountAns.amount > currentBalance) {
            console.log(chalk_1.default.rgb(209, 125, 15)("Insufficient balance."));
            //check the amount should not be greater than to the limit
        }
        else if (amountAns.amount > currentBalance * 0.5) {
            console.log(chalk_1.default.rgb(16, 248, 237)(("Sorry, you cannot withdraw more than 50% of your balance in a day.")));
            //if the amount is in the limit, action performed
        }
        else {
            currentBalance -= amountAns.amount;
            console.log(chalk_1.default.rgb(117, 211, 252)(`Withdrawal successful. Your remaining account balance is:   ${currentBalance}`));
        }
        //if user want to check balance
    }
    else if (operAns.operation === 'checkBalance') {
        //print the current balance
        console.log(`Your account balance is ${currentBalance}`);
        //if user wants to transfer money
    }
    else if (operAns.operation === 'fundTransfer') {
        let accountNum = await inquirer_1.default.prompt({ name: "account", type: "input", message: chalk_1.default.rgb(250, 250, 300)('enter account number which you want to transfer money.') });
        let amountAns = await inquirer_1.default.prompt({ name: "amount", type: "number", message: chalk_1.default.rgb(246, 135, 222)('enter your amount.') });
        //check if the amount is greater than current balance
        if (amountAns.amount > currentBalance) {
            console.log(chalk_1.default.rgb(209, 125, 15)("Insufficient balance."));
            //check the amount should not be greater than to the limit
        }
        else if (amountAns.amount > currentBalance * 0.5) {
            console.log(chalk_1.default.rgb(16, 248, 237)(("Sorry, you cannot transfer more than 50% of your balance in a day.")));
            //if the amount is in the limit, action performed
        }
        else {
            currentBalance -= amountAns.amount;
            accountNum.account = amountAns.amount;
            console.log(chalk_1.default.rgb(117, 211, 252)(`Transfer successful. Your remaining account balance is:   ${currentBalance}`));
        }
        //if user choose fast cash, action performe according to choice
    }
    else if (operAns.operation === 'fastCash') {
        let amountAns = await inquirer_1.default.prompt({ name: "amount", type: "list", message: chalk_1.default.rgb(187, 103, 243)('select your amount.'),
            choices: ['5000', '10000', '15000', '20000', '25000'] });
        //action performe according to choice
        //if user choose 5000/-
        if (amountAns.amount === '5000') {
            currentBalance -= 5000;
            console.log(chalk_1.default.rgb(222, 214, 68)(`Your remaining account balance is:   ${currentBalance}`));
        }
        //if user choose 10000/-
        else if (amountAns.amount === '10000') {
            currentBalance -= 10000;
            console.log(chalk_1.default.rgb(211, 9, 204)(`Your remaining account balance is:   ${currentBalance}`));
        }
        //if user choose 15000/-
        else if (amountAns.amount === '15000') {
            currentBalance -= 15000;
            console.log(chalk_1.default.rgb(104, 107, 236)(`Your remaining account balance is:   ${currentBalance}`));
        }
        //if user choose 20000/-
        else if (amountAns.amount === '20000') {
            currentBalance -= 20000;
            console.log(chalk_1.default.rgb(127, 246, 125)(`Your remaining account balance is:   ${currentBalance}`));
        }
        // if user choose 25000/-
        else if (amountAns.amount === '25000') {
            currentBalance -= 25000;
            console.log(chalk_1.default.rgb(247, 146, 146)(`Your remaining account balance is:   ${currentBalance}`));
        }
    }
    // if user pin is not correct
}
else {
    console.log(chalk_1.default.rgb(235, 130, 148)('Incorrect pin code!'));
}
