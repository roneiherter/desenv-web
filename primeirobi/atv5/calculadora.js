// Valores iniciais
const valorConta = 100;
const percentualGorjeta = 15;

// Calculando a gorjeta
const valorGorjeta = valorConta * (percentualGorjeta / 100);

//valor total
const valorTotal = valorConta + valorGorjeta;

//exibindo o resultado
console.log("=== Cálculo da conta ===");
console.log("Valor da Conta: R$" + valorConta.toFixed(2));
console.log("Gorjeta (" + percentualGorjeta + "%): R$ " + valorGorjeta.toFixed(2));
console.log("Total a Pagar: R$ " + valorTotal.toFixed(2));