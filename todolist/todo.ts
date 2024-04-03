#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//create an empty array of toDo list
let toDoList:string[] = [];


//  "Add ToDos"

//create a boolean variable(condition) for the working of the loop
let condition = true;

//frequently work of to do addition, i'm using the while loop
while(condition){
    //take input from user to add todos
    let addToDo = await inquirer.prompt(
        [
            {
                name: "toDo", type: "input", message: chalk.cyanBright("Enter your ToDo task:")
            },
            //ask to user add more or not
            {
                name: "isAddMore", type: "confirm", message: chalk.rgb(245, 138, 250)("Do you wanna add one more ToDo?"), default: false
            }
        ],
        
    )
    // update your todolist and print it
    toDoList.push(addToDo.toDo);
    console.log(toDoList);

    //check the condition is true, loop will running again
    condition = addToDo.isAddMore;
}

//  'Delete'

// an empty array to store all delete elements
let removedElements:string[] = [];

//create a boolean variable(remove) for the working of the loop
let remove = true;
while(remove){
    // ask to user to remove any element or not
    let isRemove = await inquirer.prompt(
        {
            name: "removed", type: "confirm", message: chalk.rgb(250, 144, 120)("Do you want to remove any task from the list?"), default: false
        }
    )

    //if user want to remove
    if (isRemove.removed){

        let taskName = await inquirer.prompt(
            {
                name: "task", type:"list", choices: toDoList,
                message: chalk.rgb(191, 250, 90)("Select the task which you want to remove:")
            }
        )
        //confirm to user before to delete successfully
        let isDelete = await inquirer.prompt(
            {
                name: "confirmation", type: "confirm", default: true,
                message: chalk.rgb(230, 80, 100)("Are you sure you want to delete this?")
            }
        )
        //if user confirm to delete code will be worked
        if (isDelete.confirmation) {
            let index = toDoList.indexOf(taskName.task);
            removedElements = toDoList.splice(index, 1);
            console.log(toDoList);
            console.log('removed element:', removedElements);

        } else {
            console.log (toDoList);
        }

        //  "Undo"

        //ask to user want to undo or not
        let undo = await inquirer.prompt(
            {
                name: "unDo", type: "confirm", default: false,
                message: chalk.rgb(90, 250, 0)("Do you want to undo your all changes?")
            }
        )

        //if user want to undo the list
        if (undo.unDo){
            toDoList = toDoList.concat(removedElements);
            console.log(toDoList);
        }
        
    }
    //check the condition of remove is true, loop will running again
    remove = isRemove.removed;
}

//    'EDIt'

// an empty array to store all editions
let editList:string[] = [];

//create a boolean variable(isEdit) for the working of the loop
let isEdit:boolean = true;
//loop
while (isEdit){
    // ask to user for new edition in the list
    let editTodo = await inquirer.prompt(
        
        {
            name: 'isMore', type: "confirm", default: false,
            message: chalk.rgb(191, 250, 90)("Do you want to add anything in the list?")
        }
    )
    //if the value of isEdit is true the if statement will execute
    isEdit = editTodo.isMore;

    if (isEdit){
        let editElement = await inquirer.prompt(
            // if user want to edit , take input from user
            {
                name: 'edit', type:"input", message: chalk.yellowBright('you can edit your list now:')
            }
        )
    // edition will be a part of an array
    editList.push(editElement.edit);
    console.log(editList);
    
    }
    
    toDoList = toDoList.concat(editList)
    console.log(toDoList);
    isEdit = editTodo.isMore;
}
