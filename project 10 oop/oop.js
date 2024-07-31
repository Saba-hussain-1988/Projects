//Import statements
class Student {
    constructor(name) {
        this.name = name;
    }
}
;
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(std) {
        this.students.push(std);
    }
    ;
}
;
const persons = new Person();
const programStart = (persons) => {
    console.log("Welcome into chat room");
    //     const answer = await inquirer.prompt({
    //         name: "ask",
    //         type: "list",
    //         message: "Who do you wanna talk to?",
    //         choices: ["To my self", " To a person"]
    //     });
    //     if (answer.ask === "To my self") {};
    //     if (answer.ask === "To a person") {};
};
export {};
