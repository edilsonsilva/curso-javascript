const numeros = [20, 35, 45, 12];
console.log(numeros);
numeros.push(50);
console.log(numeros);
numeros.unshift(200);
console.log(numeros);
console.log("---- Números adicionados pelo usuário ----");

// var valores = prompt("digite número separados por virgula(,)");
// console.log("Isso é uma string: " + valores);

// // O comando split é responsável por pegar uma string e analisar
// //o separador de caracteres e, assim, dividir em um array
// const array_valores = valores.split(",");
// console.log(array_valores);

// //verificar o tipo dos elementos valores e array_valores
// console.log(typeof valores);
// console.log(typeof array_valores);

const lista_produtos = [
  ["Código", "Nome", "Preço"],
  ["51", "Mouse", "R$ 50,20"],
  ["52", "Teclado", "R$ 150,20"],
];
console.log(lista_produtos);
// console.log(lista_produtos[1][1]);
lista_produtos.push(["53", "SSD", "R$ 200,00"]);
console.log(lista_produtos);
var novo_produto = prompt(
  "Adicione o codigo, nome e preço separado por ; "
).split(";");
lista_produtos.push(novo_produto);
console.log(lista_produtos);
