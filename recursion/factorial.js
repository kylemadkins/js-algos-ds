function factorialIterative(x) {
  let p = 1;
  for (let i = x; i > 1; i--) {
    p *= i;
  }
  return p;
}

function factorialRecursive(x) {
  if (x <= 1) return 1;
  return x * factorialRecursive(x - 1);
}

console.log(factorialIterative(0));
console.log(factorialIterative(3));
console.log(factorialIterative(7));

console.log(factorialRecursive(0));
console.log(factorialRecursive(3));
console.log(factorialRecursive(7));
