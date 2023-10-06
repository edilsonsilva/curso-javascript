/*
Pontos a se considerar sobre estrutura
de repetição:
1 - Inicializar a variável(Ponto de partida);
2 - Condição para repetição(true|false);
3 - Estrutura do corpo de execução;
4 - Incrementação ou decrementação da variável
*/

function while1() {
  let init = 0;
  while (init <= 20) {
    console.log(init);
    init++;
  }
}

function doWhile1() {
  let i = 20;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}

function for1() {
  for (let x = 0; x <= 10; x++) {
    console.log(x);
  }
}
