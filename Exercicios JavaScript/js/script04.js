/* Exercício 4
Escreva um algoritmo que leia três números inteiros, calcule a média desses números e exiba o resultado. */


var numero01 = parseFloat(prompt("Digite o primeiro valor :"))
var numero02 = parseFloat(prompt("Digite o segundo valor :"))
var numero03 = parseFloat(prompt("Digite o terceiro valor :"))
var soma = numero01 + numero02 + numero03
var resultado = soma / 3
alert("O resultado é : " + resultado)