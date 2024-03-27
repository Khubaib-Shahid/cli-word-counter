#! /usr/bin/env node

import inquirer from "inquirer";

let input = await inquirer.prompt([
    {message: "Enter Something", type: "editor", name: "userInput"}
])

let characters = input.userInput.trim();
characters = input.userInput.replace(/ /g, "");

let word = input.userInput.split(" ");

console.log({
    "characters" : characters.length,
    "words" : word.length,
    "lines" : input.userInput.split("\n").length,
})