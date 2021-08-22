exports.min = function min (array) {
  return !array ? 0 : array.length ? array.sort( (a, b) => a - b )[0] : 0;
}

exports.max = function max (array) {
  return !array ? 0 : array.length ? array.sort( (a, b) => b - a )[0] : 0;
}

exports.avg = function avg (array) {
  return !array ? 0 : array.length ? array.reduce( (s, i) => s += i, 0 ) / array.length : 0;
}
