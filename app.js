import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'input',
        message: 'Enter your sentence to count the wprd:'
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence eord count is ${words.length}`);
