function countDistance(n) {
  if (n < 0)
    return 0;
  else if (n == 0)
    return 1;
  else return countDistance(n - 1) + countDistance(n - 2) + countDistance(n - 3);
}

console.log(countDistance(4));