import inquirer from "inquirer";
export async function Quiz_1() {
    let Q = await inquirer.prompt({
        name: "Q1",
        type: "list",
        message: `choose correct syntax to declare tuples:`,
        choices: [
            "let myTuple: [string, number, boolean];",
            "let myTuple = [string, number, boolean];",
            "const myTuple: [string, number, boolean];",
            "let myTuple = [string, number, boolean];"
        ],
    });
    return Q;
}
