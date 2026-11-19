// Draw a random Chinese blessing seal.
// 隨機抽取一枚中華福文。
const blessings = require('../data/blessings.json');

function draw() {
  return blessings[Math.floor(Math.random() * blessings.length)];
}

const seal = draw();
console.log(`${seal.code} · ${seal.chinese}`);
console.log(`${seal.english} [${seal.category}]`);
console.log(`\n${seal.story.en}`);
