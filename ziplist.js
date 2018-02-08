function zipList(one, two) {
  const newList = [];
  for (let i = 0; i < one.length; i++) {
    newList.push(one[i], two[i]);
  }
  return newList;
}

function zipListTheSimpleWay(one, two) {
  return _.flatten(_.zip(one, two));
}

const uno = ['a', 'b', 'c'];
const dos = [1, 2, 3];

console.log(zipList(uno, dos));
console.log(zipListTheSimpleWay(uno, dos));
