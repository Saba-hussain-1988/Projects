#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//create an empty array of toDo list
let todosList:string[] = [];

let removedElement:string[] = [];

//create a boolean variable(condition) for the working of the loop
let condition:boolean = true;

//Wel come note
 console.log(chalk.rgb(250, 0, 255)('Wel Come to your ToDo list!'));

//frequently work of to do addition, i'm using the while loop
while (condition) {

    //show options of todos and ask to user to choose one of them
    let optionsList = await inquirer.prompt(
        {
            name : 'options', type: 'list', choices: ['Add', 'Edit', 'Delete', 'Undo'],
            message:  chalk.rgb(245, 138, 250)('select an option which you want to act:'),

            // and also make sure that the input is not blank
            validate: function(options){
                let isValid = options.length !== 0 ;
                return isValid ||  chalk.rgb(245, 138, 250)('Please put some thing in your todo.');
            }
        }
    )

    // ////// "Add ToDos" ////// //
   
   // if user choose to add todo
    if (optionsList.options === 'Add') {

        //take input from user to add todos
        let addTodo = await inquirer.prompt(
            {
                name : 'add', type:'input',
                message: chalk.rgb(191, 250, 90)('what do you want to add in your todo list?')
            }
        )

        //push usr's input in todos array and print
        todosList.push(addTodo.add);
        console.log(chalk.yellowBright("your todo list:"), todosList );
    }
//////// "Edit Todos" ////////

// if user want to edit
    else if (optionsList.options === 'Edit') {
        let editTodo= await inquirer.prompt(
          [
            {
                // ask to user to choose one of them which he want to edit
                name: 'select', type: 'list', choices: todosList,
                message: chalk.rgb(200, 130, 45)('Do you want to edit, select en element:'),
            },
            {
                //to take new new input from user
                name: 'edit', type: 'input', message: chalk.rgb(0, 255, 180)('Now you can edit your element:')
            }
          ]  
        )

        //find the index of the element
        let index:number = todosList.indexOf(editTodo.select);

        //update the changes in todo list and print
        todosList.splice(index, 1, editTodo.edit);
        console.log(todosList);                                                                                                         
    }

    ////////// "Delete" //////////
    else if (optionsList.options === 'Delete'){

        //// ask to user to choose one of them which he want to delete
        let deleteTodo = await inquirer.prompt(
            {
                name: 'delet', type:'list', choices: todosList,
                message: chalk.rgb(191, 250, 90)('Select which todo you want to delete:')
            }
        )

        //find the index of the element which he want to delete
        let index:number = todosList.indexOf(deleteTodo.delet);

        //delete the element , update and print the todo list
        removedElement = todosList.splice(index, 1);
        console.log(todosList);
    }

    //////// "Undo" ////////

    else if(optionsList.options === 'Undo'){
        let undoTodo = await inquirer.prompt(
            {
                //ask to user to confirm tht he want to undo or not
                name:"undo", type: "confirm", message: chalk.rgb(90, 250, 0)('Do you want to undo all delete elements?')
            }
        )
        if (undoTodo.undo){

            //removed element will become the part of todo again
           todosList = todosList.concat(removedElement);
            console.log(todosList);
        }
    }

    // ask the user to act some thing again to the list
   
    let confirmation = await inquirer.prompt(
        {
            name: 'doMore', type: 'confirm', default:true,
            message: chalk.rgb(230, 80, 100)('Do you want to add more or make changes in your todo?')
        }
    )
    if (!(confirmation.doMore)) {
        //if not , print the final list to the user 
        console.log (chalk.yellowBright('Your final list:\n'), todosList);
    }
    condition = confirmation.doMore;
}

//////////////end here/////////
