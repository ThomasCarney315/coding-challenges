// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 

function makeChange(coins,n) {
    coins.sort((a, b) => b - a)
    let count = 0
    
    for (let i = 0; i < coins.length; i++) {
        let maxCount
        maxCount = ~~(n / coins[i])
        count += maxCount
        n -= maxCount * coins[i] 
    }
    
    return count
}

console.log(makeChange([25, 10, 5], 40))
console.log(makeChange([25, 10], 35))

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if(minCoins === undefined || currMinCoins < minCoins) {
          minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

console.log(makeChange(12));