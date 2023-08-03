//Given a number x, find out if it is prime number or not,
//use JavaScript and find out the difference between Next prime number after x and x.

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  // If the number is divisible by 2 or 3, it is not prime
  if (number % 2 === 0 || number % 3 === 0) return false;

  // Check potential factors in increments of 6
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function getNextPrime(number) {
  let nextNumber = number + 1;
  while (!isPrime(nextNumber)) {
    nextNumber++;
  }
  return nextNumber;
}

function findDifferenceWithNextPrime(x) {
  const isXPrime = isPrime(x);
  const nextPrime = isXPrime ? getNextPrime(x) : x;

  return nextPrime - x;
}

// Example usage:
const x = 17;
const isXPrime = isPrime(x);
const differenceWithNextPrime = findDifferenceWithNextPrime(x);

console.log(`${x} is ${isXPrime ? "prime" : "not prime"}`);
console.log(`Difference between the next prime and ${x} is ${differenceWithNextPrime}`);


