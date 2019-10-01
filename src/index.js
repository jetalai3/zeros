module.exports = function zeros(expression) {
  let parts = expression.split('*');
  let res = {fives: 0, twos: 0};
  let newParts = parts.map(function (element) {
    if (element.slice(element.length - 2, element.length - 1) === '!') {
      element = countFives(+element.slice(0, element.length - 2), 2);
    } else {
      element = countFives(+element.slice(0, element.length - 1), 1);
    };
    return element;
  });
  newParts.forEach(function(element) { 
    res.fives += element.fives;
    res.twos += element.twos;
   });
  return Math.min(res.fives, res.twos);
}

function countFives(element, interval) {
  let i = element;
  let res = {fives: 0, twos: 0};
  while (i > 0) {
    res.fives += findPow(i, 5);
    res.twos += findPow(i, 2);
    i -= interval;
  }
  return res;
}

function findPow (num, pow) {
  let res = 0;
  while (num % pow === 0) {
      if (num === 0) {
          break;
      }
      res++;
      num = Math.floor(num/pow);
  }
  return res;
}