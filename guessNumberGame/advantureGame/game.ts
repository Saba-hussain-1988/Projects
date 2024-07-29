#! /usr/bin/env node

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
    //create method to decrease energy of player
    fuel_decrease(){
        this.fuel -= 20;
    };
    //method to show life line
    show_life_line(){
        if (this.fuel == 80){
            console.log(`${chalk.greenBright(this.name+"'s life line:")} ${chalk.greenBright('________')}__`)
        }else if(this.fuel == 60){
            console.log(`${chalk.greenBright(this.name+"'s life line:")} ${chalk.greenBright('______')}____`)
        }else if(this.fuel == 40){
            console.log(`${chalk.greenBright(this.name+"'s life line:")} ${chalk.greenBright('____')}______`)
        }else if(this.fuel == 20){
            console.log(`${chalk.greenBright(this.name+"'s life line:")} ${chalk.greenBright('__')}________`)
            console.log(`${chalk.greenBright(this.name)}${chalk.whiteBright('! your life is in danger.')}`)
            console.log(chalk.whiteBright('Drink portion to get more energy'))
        }
    };
    //method to get points/score
    get_score(){
        this.points += 10;
    };
    // method to buy coins
    buy_coins(){
        this.coins += 5;
        this.points -= 20;
        console.log(chalk.greenBright.bold(this.name+':'));
        console.log(chalk.greenBright.bold('Coins:', this.coins));
        console.log(chalk.greenBright.bold('Points:', this.points));
    }
    //method to drink portion
    drink_portion(){
        this.fuel = 100;
        this.coins -= 5;
        console.log(chalk.greenBright.bold(this.name+':'));
        console.log(chalk.greenBright.bold('Life line: __________'))
        console.log(chalk.greenBright.bold('Coins:', this.coins));
    }
    //method to show score
    score_show(){
        console.log('Player:', chalk.greenBright.bold(this.name))
        console.log('Life energy:', this.fuel+'%')
        console.log('Points:', chalk.greenBright.bold(this.points))
        console.log('Coins:', chalk.greenBright.bold(this.coins))
    }

}

//class of enemy
class Enemy {
    name: string;
    fuel: number = 100;

    constructor(name:string){
        this.name = name;
        this.fuel = 100;
    };

    //create method to decrease energy of enemy
    fuel_decrease(){
        this.fuel -= 20;
    };
    //method to show life line
    show_life_line(){
        if (this.fuel == 80){
            console.log(`${chalk.redBright(this.name+"'s life line:")} ${chalk.redBright('________')}__`)
        }else if(this.fuel == 60){
            console.log(`${chalk.redBright(this.name+"'s life line:")} ${chalk.redBright('______')}____`)
        }else if(this.fuel == 40){
            console.log(`${chalk.redBright(this.name+"'s life line:")} ${chalk.redBright('____')}______`)
        }else if(this.fuel == 20){
            console.log(`${chalk.redBright(this.name+"'s life line:")} ${chalk.redBright('__')}________`)
        }else if(this.fuel == 0){
            console.log(chalk.redBright(this.name), 'is killed.');
            console.log(chalk.blueBright.bold.italic('\tVICTORY'));
        }
    };
    //method to show score
    show_score(){
        console.log('Enemy:', chalk.redBright.bold(this.name))
        console.log('Life energy:', this.fuel+'%')
    }
}

// welcome note.
console.log(chalk.rgb(250, 200, 179).bold('-'.repeat(60)));
console.log(chalk.rgb(0, 250, 255).bold.italic('\t\t\tWELCOME'));
console.log(chalk.rgb(0, 250, 255).bold.italic('\tto Advanture Game'));
console.log(chalk.rgb(0, 250, 255).bold('\t\t\t\tBy S.R.Chohan'));
console.log(chalk.rgb(250, 200, 179).bold('_'.repeat(60)));

let _player = await inquirer.prompt({
    name: "name",
    type: 'input',
    message: "Enter player name:"
});

let condition: boolean = true;

while (condition){
    let _enemy = await inquirer.prompt({
        name: "name",
        type: "list",
        message: "select your enemy:",
        choices: ['Zombie', 'Dragon', 'Skeleton', 'Evil', 'Exit Game']
    });
   
    let player = new Player(_player.name);

    let enemy = new Enemy(_enemy.name);

    if(_enemy.name == 'Zombie' || _enemy.name == 'Dragon' || _enemy.name == 'Skeleton' ||_enemy.name == 'Evil'){
        
        let logic = true
            // create condition for loop to run rounds
            for (let i = 1; player.fuel > 0 && logic; i++){
                console.log(chalk.magentaBright('~').repeat(30));
                console.log(chalk.bgMagenta.bold.italic(`\t\tROUND ${i}`));
                console.log(chalk.magentaBright('~').repeat(30));

                console.log(`\n\t
                    ${chalk.bold.bgGreenBright.bold(_player.name)} VS ${chalk.bold.bgRedBright(_enemy.name)}\n`);

                enemy.fuel = 100;
                while(player.fuel >0 && enemy.fuel >0 && logic){
                    let action = await inquirer.prompt({
                        name : 'act',
                        type: "list",
                        message: 'select:',
                        choices: ['Attack', 'Drink Portion', 'Buy coins', 'Score Board', 'Select Enemy']
                    });

                    console.log(chalk.magentaBright.bold('\t'+'~'.repeat(10)))
                    
                    switch(action.act){
                        case 'Attack':
                           let num = Math.floor(Math.random() * 2);
                           if (num === 0){
                                player.fuel_decrease();
                            
                                player.show_life_line();
                            
                            }
                             else if(num === 1){
                                enemy.fuel_decrease();
                                enemy.show_life_line();
                                player.points += 10;
                                console.log(chalk.greenBright('Get 10 points'));

                                if (enemy.fuel <= 0){
                                player.points += 50;
                                console.log('You get 50 bonus points');
                                }

                            }
                            console.log(chalk.magentaBright.bold('\t'+'~'.repeat(10)))
                            break;

                        case 'Drink Portion':
                            if(player.coins < 5){
                                console.log('Need five golden coins to drink portion');
                   
                            } else {
                                player.drink_portion();
                               
                            }
                            console.log(chalk.magentaBright.bold('\t'+'~'.repeat(10)))
                            break;
                        
                        case 'Buy coins':
                            if (player.points < 20){
                                console.log('Need 20 points to buy 5 coins');
                            } else {
                                player.buy_coins();
                            }
                            console.log(chalk.magentaBright.bold('\t'+'~'.repeat(10)))
                            break;

                        case 'Score Board':
                            player.score_show();
                            enemy.show_score();
                            console.log(chalk.magentaBright.bold('\t'+'~'.repeat(10)))
                            break;

                        case 'Select Enemy':
                            logic = false;
                            console.log(chalk.magentaBright.bold('\t'+'~'.repeat(10)))
                    }
                }
            }

    }
     // exit game
     else if (_enemy.name == 'Exit Game'){
        condition = false;
    }
}
