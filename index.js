
// Oliver Kovacs 2020
// primes - index.js
// CC-BY-NC-SA 4.0

const fs = require("fs");

const getPrimes = n => {
    let primes = [ 1, 2 ];
    for (let i = 3; i < n; i += 2) {
        if (isPrime(i, primes)) primes.push(i);
    }
    return primes;
};

const isPrime = (x, primes) => {
    let sqrt = Math.sqrt(x);
    for (let i = 2; i <= sqrt; i++) {
        if (x % primes[i] == 0) return false; 
    }
    return true;
};

const benchmark = n => {
    let ms = Date.now();
    let primes = getPrimes(n);
    ms = Date.now() - ms;
    fs.writeFileSync("./primes.json", JSON.stringify(primes), "utf8");
    console.log(`range: ${n}\nprimes: ${primes.length}\nms: ${ms}/sec: ${ms / 1000}`);
};

benchmark(5000000);