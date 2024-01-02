function pickRandomWeighted(data) {
  const values = data.map((d) => d[0]);
  const weights = data.map((d) => d[1]);

  // Will contain the sum of all weights
  let sum = 0;
  // Will contain an array of each weight accumilating the sum of previous weights
  const accumulatedWeights = [];
  let weight;

  for (weight of weights) {
    sum += weight;
    accumulatedWeights.push(sum);
  }

  const rand = Math.random() * sum;
  const value =
    values[accumulatedWeights.filter((element) => element <= rand).length];

  return value;
}

function pick(data) {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += data[i][1];
  }

  // Total in hand, we can now pick a random value akin to our
  // random index from before.
  const threshold = Math.random() * total;

  // Now we just need to loop through the main data one more time
  // until we discover which value would live within this
  // particular threshold. We need to keep a running count of
  // weights as we go, so let's just reuse the "total" variable
  // since it was already declared.
  total = 0;
  for (let i = 0; i < data.length - 1; ++i) {
    // Add the weight to our running total.
    total += data[i][1];

    // If this value falls within the threshold, we're done!
    if (total >= threshold) {
      return data[i][0];
    }
  }

  // Wouldn't you know it, we needed the very last entry!
  return data[data.length - 1][0];
}

const data = [
  ["symbols", 50],
  ["arrows", 300],
  ["circles", 350],
  ["emojis", 500],
  ["squares", 550],
  ["address", 790],
  ["moons", 1010],
  ["letters", 2450],
  ["numbers", 4000],
];

const results = data.reduce((a, c) => {
  a[c[0]] = 0;
  return a;
}, {});

const percentageWise = data.reduce((a, c) => {
  a[c[0]] = 0;
  return a;
}, {});

for (let index = 0; index < 10000; index++) {
  const val = pickRandomWeighted(data);
  results[val] = results[val] ? results[val] + 1 : 1;
  percentageWise[val] = results[val] / 100;
}

console.log(results);
console.log("percentageWise:", percentageWise);

console.log(data.reduce((a, c) => a + c[1], 0));
