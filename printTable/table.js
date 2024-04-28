#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let input = await inquirer_1.default.prompt({
    name: "num", type: "input",
    message: chalk_1.default.rgb(5, 240, 200)('Please enter your desire number:'),
    validate: function (num) {
        let InNum = parseInt(num);
        let floNum = parseFloat(num);
        let isValid = !isNaN(InNum) && !isNaN(floNum) && InNum > 0 && floNum > 0;
        return isValid || chalk_1.default.rgb(10, 180, 230)('Invalid entry. Please enter a valid number.');
    }
});
//print table by loop
for (let i = 1; i <= 10; i++) {
    console.log(chalk_1.default.rgb(50, 110, 250)(input.num, 'x', i, '=', (input.num * i)));
}
