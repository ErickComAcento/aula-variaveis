/*EXERCÍCIO 1 DE INTERPRETAÇÃO (ENUNCIADO ABAIXO)

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

(RESPOSTA)
Vai aparecer no console o valor de "b" (10) 
e em baixo vai aparecer o valor "a" do lado 
do valor "b" alterado (10, 5). */



/* EXERCÍCIO 2 DE INTERPRETAÇÃO (ENUNCIADO ABAIXO)

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

(RESPOSTA)
No console vai aparecer ("b", "c" e "a") pois
o a = b, b = c e c = a. */



/* EXERCÍCIO 3 DE INTERPRETAÇÃO (ENUNCIADO ABAIXO)

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

(RESPOSTA)
O "let p" poderia ser substituído por "let horasDia"
e o "let t" por "let recebeDia". */





/* EXERCÍCIO 1 DE ESCRITA DE CÓGIDO

console.log (typeof "nome", typeof "idade")
// Acho que apareceu "string" pois são palavras e não números
const nome = prompt ("Teu nome")
const idade = prompt ("Idade?")
console.log("Olá", nome, ", você tem", idade, "anos.") */



/* EXERCÍCIO 2 DE ESCRITA DE CÓGIDO

const fome = prompt ("Ta com fome?")
const frio = prompt ("Ta com frio?")
const cansado = prompt ("Ta cansado?")
console.log("Ta com fome?", fome)
console.log("Ta com frio?", frio)
console.log("Ta cansado?", cansado) */



/* EXERCÍCIO 3 DE ESCRITA DE CÓDIGO

let a = 10
let b = 25
let abobrinha = a
abobrinha = b
let banana = b 
banana = a
console.log("O novo valor de a é", abobrinha)
console.log("O novo valor de b é", banana) */



/* DESAFIO

let numeroUm = prompt("Fala um número aí meu bom")
let numeroDois = prompt("Fala outro número aí meu querido")
console.log(Number(numeroUm), Number(numeroDois))
const soma = (Number(numeroUm)) + (Number(numeroDois))
const multiplicaçao = numeroUm * numeroDois
console.log("O primeiro número somado ao segundo resulta em", soma)
console.log("A multiplicação dos dois números é", multiplicaçao) */