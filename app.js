#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const tasks = [];
while (true) {
    let answers = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task: "
        },
        {
            name: "priority",
            type: "list",
            choices: ["Important and Urgent", "Important", "Urgent"],
            message: "Categorize it based on its urgency:"
        },
        {
            name: "addAnother",
            type: "confirm",
            message: "Do you want to add another task?"
        }
    ]);
    tasks.push(answers);
    if (!answers.addAnother) {
        break;
    }
}
console.log(chalk.magentaBright("Your Todo List:"));
for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    console.log(`${chalk.blueBright(i + 1)}. Task: ${chalk.green(task.task)}, Priority: ${chalk.green(task.priority)}.`);
}
