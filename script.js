const prompt = require ('prompt-sync')();
const result = require ('./result')

let soma=0
const peso = Number (prompt ('Insira seu peso'));

const altura =Number (prompt ('Insira sua altura'));


soma= imc(altura, peso)

console.log(`O resultado é ${soma}`)