#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//create an empty array of toDo list
let toDoList = [];

//create a condition for the working of the loop
let condition = true;

//frequently work of to do addition, i'm using the while loop
while(condition){
    
    let addToDo = await inquirer.prompt(
        [
            {
                name: "toDo", type: "input", message: chalk.cyanBright("Enter your ToDo task:")
            },
            {
                name: "isAddMore", type: "confirm", message: chalk.rgb(245, 138, 250)("Do you wanna add one more ToDo?"), default: false
            }
        ],
        
    )
    let addTask = addToDo.toDo.toLowerCase();
    toDoList.push(addTask);
    console.log(toDoList);
    condition = addToDo.isAddMore;
}

//if user want to remove some tasks from the list
let remove = true;
while(remove){
    let isRemove = await inquirer.prompt(
        {
            name: "removed", type: "confirm", message: chalk.rgb(250, 144, 120)("Do you want to remove any task from the list?"), default: false
        }
    )
    if (isRemove.removed){
        let taskName = await inquirer.prompt(
            {
                name: "task", type:"input", message: chalk.rgb(191, 250, 90)("Enter the task which you want to remove:")
            }
        )
        let task = taskName.task.toLowerCase();
        let index = toDoList.indexOf(task);
        toDoList.splice(index, 1);
        console.log(toDoList);
    }
    remove = isRemove.removed;
}
