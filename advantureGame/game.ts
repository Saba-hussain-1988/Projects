import inquirer from "inquirer";
import chalk from "chalk";

//class of player
class Player {
    name: string;
    fuel: number = 100;
    points: number = 0;
    coins: number = 0;
    
    constructor(name:string){
        this.name = name;
        this.fuel = 100;
        this.points = 0;
        this.coins = 0;
    };

}

//class of enemy
class Enemy {
    name: string;
    fuel: number = 100;

    constructor(name:string){
        this.name = name;
        this.fuel = 100;
    }
}

// welcome note.
console.log(chalk.rgb(250, 200, 179).bold('-'.repeat(60)));
console.log(chalk.rgb(0, 250, 255).bold.italic('\t\t\tWELCOME'));
console.log(chalk.rgb(0, 250, 255).bold.italic('\tto Advanture Game'));
console.log(chalk.rgb(0, 250, 255).bold('\t\t\t\tBy S.R.Chohan'));
console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));