console.log("dimmi un numero intero positivo e io ti rispondero se è positivo o negativo");


const number = process.argv[2];

console.log(number);

if (number % 2 === 0) {
    console.log(number + " è un numero pari.");
  } else {
    console.log(number + " è un numero dispari.");
  }