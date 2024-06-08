import chalk from "chalk";
import inquirer from "inquirer";

// interface of student object
interface INFO {
    fullName:string,
    DOB:string,
    advanceBalance:number,
    IDnumber: string,
    classDay_time: string,
    course: string[],
    isFeePaid: boolean,
}

// list of all students for season 2024
let students_2024:INFO[]= [];

// function of return object of student information
function StudentInfo(
    name:string, DOB:string, balance:number, IDnumber: string , dayAndTime: string,
    course: string[], isFeePad: boolean,
):INFO {
    return {
        fullName : name,
        DOB : DOB,   
        advanceBalance : balance,    
        IDnumber : IDnumber,    
        classDay_time: dayAndTime,    
        course: course,    
        isFeePaid: isFeePad,   
    }        
};


// convert string to upper case
function convertToUpperCase(value: string):string{
    let converted: string =value.toUpperCase();
    return converted;
};

//generate five digits ID code
    
function generateIDcode(value: number): string{
    
    let ID : string = ``;
    if (value < 10){
        ID = `0000${value}`;
    } else if (value < 100){
        ID = `000${value}`;
    } else if (value < 1000){
        ID = `00${value}`;
    } else if(value < 10000){
        ID = `0${value}`;
    }
        return ID;
};

// concatenation of class day and time
function classDay_time(a:string, b:string):string{
    let classDay_time = a + '_' + b;
    return classDay_time;
}

// add new student in his / her class list
function addNewStudent(array:INFO[], value:INFO){
    array.push(value);
    console.log()
};


//!Student Management project/////////
// welcome note.
console.log(chalk.rgb(250, 200, 179).bold('-'.repeat(60)));
console.log(chalk.rgb(0, 250, 255).bold.italic('\t\t\tWELCOME'));
console.log(chalk.rgb(0, 250, 255).bold.italic('\tIn Students Management Program'));
console.log(chalk.rgb(0, 250, 255).bold('\t\t\t\tBy S.R.Chohan'));
console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));

// create a boolean variable for working while loop
let condition: boolean = true;
let IDvalue = 0;

//while loop to run project
while(condition){
    
    // take input from user
    let main = await inquirer.prompt([
        {
            name: 'mainMenu', type: 'list',
            message: 'select operation which you wanna to do:',
            choices: ['AddStudent', 'EnrollStudent', 'ShowStatus', 'RemoveStudent', 'Exit']
        },
    ]);

    //!AddStudent /////////////
    
    if (main.mainMenu === 'AddStudent'){

        console.log(chalk.rgb(179, 230, 255)(`Please fill this enrollment form.\n`))
        //take input from user
        let enroll = await inquirer.prompt([
            {
                name: 'fullName', type: 'input',
                message: 'Please enter your full name:',
                validate: function (fullName){
                    let isValid = fullName.length > 0  &&  isNaN(fullName);
                    return isValid || 'Please enter your name:'
                }
            },
            {
                name: 'DOB', type: 'input',
                message: 'Enter your date of birth(DD/MM/YYYY):',
            },
            {
                name: 'balance', type: 'input',
                message: 'Pay 50,000 PKR for advance balance:',
                validate: function(balance){
                    let intValue = parseInt(balance);
                    let isValid = intValue === 50000 && !isNaN(intValue);
                    return isValid || 'Please pay 50000 pkr, its required:';
                }
            },
            {
                name: 'day', type: 'list', message: 'select day:',
                choices: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            {
                name: 'slot', type: 'list', message: 'select your slot:',
                choices: ['9AM', '5PM']
            },
            {
                name: 'course', type: 'checkbox', message: 'select course which you want to enroll.',
                choices: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
            },
            {
                name:   'fee', type: 'input',
                message: 'please pay 6000 rupees for tuition fee.',
                validate: function(fee){
                    let intValue = parseInt(fee);
                    let isValid = !isNaN(intValue) && intValue === 6000;
                    return isValid || 'you will have to pay 6000 rupees only.';
                }
            },
        ])
        // name convert to upper case
        let full_name = convertToUpperCase(enroll.fullName);

        // generate ID number
        IDvalue += 1
        let IDnumber = generateIDcode(IDvalue);

        //is fee paid
        let isFeePaid = true;
        
        //tuition fee deduct from advance balance
        let remainingBalance = Number(enroll.balance) - Number(enroll.fee);

        //class day time
        let dayTime = classDay_time(enroll.day, enroll.slot);

        //create student's object
        let student = StudentInfo(full_name, enroll.DOB, remainingBalance, IDnumber, dayTime, enroll.course, isFeePaid)


        /// add new student in this season
        let add = addNewStudent(students_2024, student )

        // print statement for male and female by if else if statement
        console.log(`Sir/Miss ${chalk.greenBright(full_name)}! You have successfully enrolled in ${chalk.greenBright(dayTime)} class.\nYour student ID number is: ${chalk.greenBright(IDnumber)}`);
        console.log(chalk.yellowBright('_'.repeat(60)));
    }

    //!Enroll Student ////////////

    else if(main.mainMenu === 'EnrollStudent'){
        let enroll = await inquirer.prompt({
            name: 'hit',
            type: 'input',
            message: 'enter ID number of student which you want to know the status:',
            validate: function(hit){
                let intValue = parseInt(hit)
                let isValid = !isNaN(intValue) && hit.length === 5;
                return isValid || 'Invalid entry';
            }
        });

        let isInclude: boolean = true;
        let index = -1;
        for(let i = 0; i < students_2024.length; i++){
            isInclude = false;
            if(  enroll.hit === students_2024[i].IDnumber){
                index = i;
                isInclude = true;
                break;
            }
        
        }if (!isInclude){
            console.log('Incorrect ID number.')
    
        }
        else {
            let courseEnroll = await inquirer.prompt({
                name: 'hit', type: 'list', message: 'select to enroll:',
                choices:  ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
            });
            students_2024[index].course.push(courseEnroll.hit);
            console.log(`Sir/Miss ${chalk.greenBright(students_2024[index].fullName)}! You have successfully enrolled in ${chalk.cyanBright(students_2024[index].course)}`);
            console.log(chalk.yellowBright('_'.repeat(60)));
        }
    }
    
    //! show status //////////////

    else if(main.mainMenu === 'ShowStatus'){      
        let status = await inquirer.prompt({
            name: 'hit',
            type: 'input',
            message: 'enter ID number of student which you want to know the status:',
            validate: function(hit){
                let intValue = parseInt(hit)
                let isValid = !isNaN(intValue) && hit.length === 5;
                return isValid || 'Invalid entry';
            }
        });

        let isInclude: boolean = true;
        let index = -1;
        for(let i = 0; i < students_2024.length; i++){
            isInclude = false;
            if(  status.hit === students_2024[i].IDnumber){
                index = i;
                isInclude = true;
                let studentStatus = students_2024[index];
                console.log("Student's full status:\n", studentStatus
                    
                );
        
                break;
            }
        
        }if (!isInclude){
            console.log('Incorrect ID number.')
    
        }
        console.log(chalk.yellowBright('_'.repeat(60)));
    }

     //!remove Student /////////////////

    else if(main.mainMenu === 'RemoveStudent'){
        let remove = await inquirer.prompt({
            name: 'hit',
            type: 'input',
            message: 'enter ID number of student which you want to remove:',
            validate: function(hit){
                let intValue = parseInt(hit)
                let isValid = !isNaN(intValue) && hit.length === 5;
                return isValid || 'Invalid entry';
            }
        });

        let isInclude: boolean = true;
        let index = -1;
        for(let i = 0; i < students_2024.length; i++){
            isInclude = false;
            if(  remove.hit === students_2024[i].IDnumber){
                index = i;
                isInclude = true;
       
                let removed = students_2024.splice(index, 1);
         
                console.log('you successfully removed:\n', removed);
        
                break;
            }
        
        }if (!isInclude){
            console.log('Incorrect ID number.')
    
        }
        console.log(chalk.yellowBright('_'.repeat(60)));

    }

    //! exit ///////////
     else if (main.mainMenu === 'Exit'){
        condition = false;
    }

}