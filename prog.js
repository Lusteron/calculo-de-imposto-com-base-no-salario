const { gets, print } = require("./script");
const valorSalarioBruto = gets();
const valorBeneficios = gets();

function calculoImposto(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarPercentualImpostoComBaseNoSalario(salario) {
  if (salario > 0 && salario <= 1100) {
    return 5;
  } else if (salario > 1100 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}
const aliquotaImposto =
  pegarPercentualImpostoComBaseNoSalario(valorSalarioBruto);
const valorImposto = calculoImposto(valorSalarioBruto, aliquotaImposto);

const valorATransferir = valorSalarioBruto - valorImposto + valorBeneficios;
print(valorATransferir);
