// Cek Bilangan Prima

function checkPrima(n) {
  if (n < 2) {
    return "Bukan Prima";
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Bukan Prima";
    }
  }
  return "Prima";
}

console.log(checkPrima(7));
console.log(checkPrima(11));
console.log(checkPrima(37));
console.log(checkPrima(48));
console.log(checkPrima(289));
