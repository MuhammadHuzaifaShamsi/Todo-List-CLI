#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


interface task {
    task: string;
    deadline: string;
    priority: string;
}

const tasks: task[] = [];

while (true) {
    let answers = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task: "
        },
        {
            name: "deadline",
            type: "input",
            message: "Set a deadline for this task (DD-MM-YYYY): "
        },
        {
            name: "priority",
            type: "list",
            choices: ["Important and Urgent", "Important", "Urgent"],
            message: "Categorize it based on its urgency!"
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


console.log(chalk.magentaBright("Categorized tasks:"));

for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    console.log(
        `${chalk.blueBright(i + 1)}. Task: ${chalk.green(task.task)}, Deadline: ${chalk.green(task.deadline)}, Priority: ${chalk.green(task.priority)}.`
    );   
}
