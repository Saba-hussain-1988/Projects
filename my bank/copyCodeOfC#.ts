#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Customer{
    public firstName: string;
    public lastName: string;
    public age: number;
    public gender: string;
    public mobileNumber: number;
    public accountNumber= Account;
    public balance = 100;

    constructor(
        firstName: string,
    lastName: string,
    age: number,
    gender: string,
    mobileNumber: number
    ){
        this.firstName = firstName.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.age=age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = ;
        this.balance = 100
    };
};


interface banking {
    Credit (amount: number):void;
    Debit(amount: number):void;
};

class Account implements banking{
    accountNumber: number;
    balance: number;
    constructor(cos: Customer){
        this.accountNumber = cos.accountNumber;
        this.balance = cos.balance;
    };

    public Credit(amount: number): void {
       if (amount > 0 && amount < 100){
        this.balance += amount;
        console.log(chalk.yellowBright(`Credit Successful!
            You get into: ${chalk.greenBright(amount)},
            your Balance is: ${chalk.greenBright(this.balance)}`))
       } else if (amount > 100){
        this.balance += amount - 1;
        console.log(chalk.yellowBright(`Credit Successful!
            You got amount: ${chalk.greenBright(amount)},
            your Balance is: ${chalk.greenBright(this.balance)}`))
       } else {
        console.log(chalk.red("Credit unsuccessful!"));
       }
    };

    public Debit(amount: number): void {
        if (amount > 0 && amount < this.balance){
            this.balance -= amount;
            console.log(chalk.yellowBright(`Debit Successful!
                You withdraw: ${chalk.greenBright(amount)},
                your remaining Balance is: ${chalk.greenBright(this.balance)}`))
        } else if (amount > this.balance){
            console.log(chalk.red.italic("You have insufficient balance!"));
        } else {
            console.log(chalk.red.italic("Debit unsuccessful!"));
        }
    }
}