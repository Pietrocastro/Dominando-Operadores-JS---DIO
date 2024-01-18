const prompt = require("prompt-sync")()

console.log("WELCOME TO XP CALCULATOR [by Pietro Prata]")

let heroName = prompt("Tell me, what's your name? ")
// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let monsterLevel = parseInt(prompt("First, insert de monster level: "));
let dificultyLevel = parseInt(prompt("Now, insert the dificulty (0 ~ 100): "));

//TODO: Implemente a lógica para exibir o xpGanho:
const xpWon = (monsterLevel * dificultyLevel) *100;

// Imprime a quantidade de XP ganho
console.log("You've won " + xpWon + " XP, great job!");