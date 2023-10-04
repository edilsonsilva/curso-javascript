function validar() {
  const cpf = document.getElementById("cpf");
  const resultado = document.getElementById("resultado");

  //verificar se a caixa está vazia
  //O comando trim() elemina os espaços desnecessários
  if (cpf.value.trim() == "") {
    return (resultado.innerHTML = "Digite o cpf");
  } else if (cpf.value.length < 11) {
    return (resultado.innerHTML = "CPF incompleto");
  } else {
    //criar uma variável para guardar os 9 primeiros digitos
    let cpfCalc = cpf.value.substring(0, 9);
    let p10 = 10;
    let p11 = 11;
    let resto = 0;
    let rs = 0;

    for (let i = 0; i < 9; i++) {
      rs += cpfCalc[i] * p10;
      p10--;
    }
    resto = rs % 11;
    if (resto < 2) {
      cpfCalc += "0";
    } else {
      cpfCalc += "" + 11 - resto;
    }
    //zerar a variável rs para o novo cálculo
    rs = 0;
    for (let i = 0; i < 10; i++) {
      rs += cpfCalc[i] * p11;
      p11--;
    }
    resto = rs % 11;
    if (resto < 2) {
      cpfCalc += "0";
    } else {
      cpfCalc += "" + 11 - resto;
    }

    if (cpf.value == cpfCalc) {
      resultado.innerHTML = "CPF Válido";
    } else {
      resultado.innerHTML = "CPF Inválido";
    }
  }
}
