module.exports = function reverse (n) {
  n = String(Math.abs(n));

  let reverse = '';

  for(let i = n.length - 1; i >= 0; i--)
  {
    reverse += n[i];
  }

  return Number(reverse);
}
