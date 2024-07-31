
// import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";


// parent class as Person
class Person {
    private Personality: string = 'Unknown';// no need for constructor

    //method to return property
    public getPersonality(): string {
        return this.Personality;
    }

    // method to set property
    public setPersonality(num: number) {
        if (num === 1) {
            this.Personality = chalk.greenBright('Extrovert');
        } else if (num === 2) {
            this.Personality = chalk.yellowBright('Introvert');
        } else {
            this.Personality = chalk.redBright('You are a mystery to us');
        }
    }
};

//child class extends with parent class
class Student extends Person {
    private _name: string = '';// no need for constructor

    public Student() {
        this._name = "";
    }

    public get getName(): string {
        return this._name;
    }

    public set setName(v: string) {
        this._name = v;
    }
};



//* welcome note.

console.log(chalk.rgb(250, 200, 179).bold('-'.repeat(60)));
console.log(chalk.rgb(0, 250, 255).bold.italic('\t\t\tWELCOME'));
console.log(chalk.rgb(0, 250, 255).bold.italic('\tIn OOP Project'));
console.log(chalk.rgb(0, 250, 255).bold('\t\t\t\tBy S.R.Chohan'));
console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));



async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'personality',
            message: chalk.cyan('What is your personality? \n1 to talk to others, 2 to talk to yourself\n\t'),
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.cyan('Please enter a number');
                }
                if (value < 1 && value > 3) {
                    return chalk.cyan('Please enter 1, 2 or 3:');
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: chalk.cyanBright( 'Your name?'),
            validate: (name)=> {
                if (!name){
                    return chalk.cyan('Your Nice Please:')
                }
                if (!isNaN(name)){
                    return chalk.cyan('Please enter your name not numbers/other characters.')
                }
                return true;
            }
        }
    ]);

    //both inputs save in variables
    const inputName = answers.name.toUpperCase();
    const inputNumber = answers.personality;

    // call child class
    let newStudent = new Student();
    console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));


    //set personality
    newStudent.setPersonality(inputNumber);
    console.log(chalk.blueBright(`\nYour personality is: ${newStudent.getPersonality()}`));

    //invoke setter
    newStudent.setName = inputName;

    //print name with getter
    console.log(chalk.blueBright(`\nYour name is: ${chalk.yellowBright(newStudent.getName)}, your personality is: ${newStudent.getPersonality()}`));

    console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));
}

main();
