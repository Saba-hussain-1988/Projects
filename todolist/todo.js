#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//create an empty array of toDo list
let todosList = [];
//it stores deleted element and helps to undo function
let removedElement = [];
//create a boolean variable(condition) for the working of the loop
let condition = true;
let isMannage = true;
//Wel come note
console.log(chalk.rgb(250, 250, 0).bold.italic('\t \t \tWel Come to your ToDo list!\t \t \t'));
//frequently work of to do addition, i'm using the while loop
while (condition) {
    console.log(chalk.rgb(200, 10, 240).bold("\t\t\t\t\tMain Menu"));
    //show options of todos and ask to user to choose one of them
    let optionsList = await inquirer.prompt({
        name: 'options', type: 'list', choices: ['Add', 'Edit', 'Delete', 'Undo', 'list mannager'],
        message: chalk.rgb(249, 166, 151)('select an option which you want to act:'),
    });
    // ////// "Add ToDos" ////// //
    // if user choose to add todo
    if (optionsList.options === 'Add') {
        //take input from user to add todos
        let addTodo = await inquirer.prompt({
            name: 'add', type: 'input',
            message: chalk.rgb(191, 250, 90)('what do you want to add in your todo list?'),
            // and also make sure that the input is not blank
            validate: function (options) {
                let isValid = options.length !== 0;
                return isValid || chalk.rgb(245, 138, 250)('Please put some thing in your todo.');
            }
        });
        //push usr's input in todos array and print
        todosList.push(addTodo.add);
        console.log(chalk.yellowBright("your todo list:"), todosList);
    }
    //////// "Edit Todos" ////////
    // if user want to edit
    else if (todosList.length > 0) {
        if (optionsList.options === 'Edit') {
            let editTodo = await inquirer.prompt([
                {
                    // ask to user to choose one of them which he want to edit
                    name: 'select', type: 'list', choices: todosList,
                    message: chalk.rgb(200, 130, 45)('Do you want to edit, select en element:'),
                },
                {
                    //to take new new input from user
                    name: 'edit', type: 'input', message: chalk.rgb(0, 255, 180)('Now you can edit your element:')
                }
            ]);
            //find the index of the element
            let index = todosList.indexOf(editTodo.select);
            //update the changes in todo list and print
            todosList.splice(index, 1, editTodo.edit);
            console.log(todosList);
        }
        ////////// "Delete" //////////
        else if (optionsList.options === 'Delete') {
            //// ask to user to choose one of them which he want to delete
            let deleteTodo = await inquirer.prompt({
                name: 'delet', type: 'list', choices: todosList,
                message: chalk.rgb(191, 250, 90)('Select which todo you want to delete:')
            });
            //find the index of the element which he want to delete
            let index = todosList.indexOf(deleteTodo.delet);
            //delete the element , update and print the todo list
            removedElement = todosList.splice(index, 1);
            console.log(todosList);
        }
        //////// "Undo" ////////
        else if (optionsList.options === 'Undo') {
            let undoTodo = await inquirer.prompt({
                //ask to user to confirm tht he want to undo or not
                name: "undo", type: "confirm", message: chalk.rgb(90, 250, 0)('Do you want to undo all delete elements?')
            });
            if (undoTodo.undo) {
                //removed element will become the part of todo again
                todosList = todosList.concat(removedElement);
                console.log(todosList);
            }
        }
        //////////////// 'list mannager/////////////////////
        else if (optionsList.options === 'list mannager') {
            if (todosList.length >= 2) {
                while (isMannage) {
                    let todosMannager = await inquirer.prompt({
                        name: 'mannage', type: "list",
                        choices: [chalk.rgb(255, 100, 200).bold("Move" + " to" + " top"),
                            chalk.rgb(255, 30, 240).bold("Move" + " to " + "bottum"),
                            chalk.rgb(255, 190, 255).bold("Other"),
                            chalk.rgb(255, 200, 240).bold("Exit(go to main manue)")],
                        message: chalk.rgb(90, 255, 130).bold.italic("choose an option to perform: ")
                    });
                    if (todosMannager.mannage === chalk.rgb(255, 100, 200).bold("Move" + " to" + " top")) {
                        let MoveToTop = await inquirer.prompt({
                            name: 'move', type: 'list', choices: todosList,
                            message: chalk.rgb(200, 100, 255).italic.bold("Choose an element which you want to move to top: ")
                        });
                        let index = todosList.indexOf(MoveToTop.move);
                        todosList.unshift(MoveToTop.move);
                        todosList.splice(index, 1);
                        console.log(chalk.rgb(255, 255, 180)("Your list is updated now,\nelement is moved to top now.\n\t\t", todosList));
                    }
                    else if (todosMannager.mannage === chalk.rgb(255, 30, 240).bold("Move" + " to " + "bottum")) {
                        let MoveToBottum = await inquirer.prompt({
                            name: 'move', type: 'list', choices: todosList,
                            message: chalk.rgb(200, 100, 255).italic.bold("Choose an element which you want to move to bottum: ")
                        });
                        let index = todosList.indexOf(MoveToBottum.move);
                        todosList.splice(index, 1);
                        todosList.push(MoveToBottum.move);
                        console.log(chalk.rgb(255, 255, 180)("Your list is updated now,\nelement is moved to bottum now.\n\t\t", todosList));
                    }
                    else if (todosMannager.mannage === chalk.rgb(255, 190, 255).bold("Other")) {
                        let MoveElement = await inquirer.prompt({
                            name: 'move', type: 'list', choices: todosList,
                            message: chalk.rgb(200, 100, 255).italic.bold("Choose an element which you want to move: ")
                        }, {
                            name: 'place', type: 'list', choices: todosList,
                            message: chalk.rgb(49, 230, 230).italic("choose the place where you want to move,")
                        });
                        let element = MoveElement.move;
                        let num = todosList.indexOf(MoveElement.move);
                        todosList.splice(num, 1);
                        let index = todosList.indexOf(MoveElement.place);
                        todosList.splice(index, 0, element);
                        console.log(chalk.rgb(255, 255, 180)("Your list is updated now,\nelement is moved to bottum now.\n\t\t", todosList));
                    }
                    else if (todosMannager.mannage === chalk.rgb(255, 200, 240).bold("Exit(go to main menu)")) {
                        isMannage = false;
                    }
                }
            }
            else {
                console.log(chalk.rgb(30, 255, 250).italic('"List mannager" option can accessable when list has atleast two elements.'));
                isMannage = false;
            }
        }
    }
    else {
        console.log(chalk.rgb(30, 179, 240)("please add some thing in your todo to perform this action"));
    }
    // ask the user to act some thing again to the list
    let confirmation = await inquirer.prompt({
        name: 'doMore', type: 'confirm', default: true,
        message: chalk.rgb(255, 0, 250)('Do you want to add more or make changes in your todo?')
    });
    if (!(confirmation.doMore)) {
        //if not , print the final list to the user 
        console.log(chalk.yellowBright('Your final list:\n'), todosList);
    }
    condition = confirmation.doMore;
}
//////////////end here/////////
