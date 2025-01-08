// --- Conversão Implícita
console.log("Conversão Implícita");
console.log("5" + 3); // "53" (Número foi convertido para String)
console.log("5" - 3); // 2   (String foi convertida para Número)
console.log(true + 1); // 2   (true é convertido para 1)
console.log(false + 1); // 1  (false é convertido para 0)
console.log("10" == 10); // true (String é convertida para Número)

// --- Conversão Explícita
console.log("Conversão Explícita");
console.log(String(42)); // 42
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("abc")); // NaN (Not a Number)
