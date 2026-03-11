var buyChoco = function (P, M) {
  let m1 = (m2 = Infinity);

  for (const p of P) {
    if (p <= m1) {
      m2 = m1;
      m1 = p;
    } else if (p >= m1 && p <= m2) {
      m2 = p;
    }
  }

  return m1 + m2 <= M ? M - (m1 + m2) : M;
};

var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);

  const min1 = prices[0];
  const min2 = prices[1];
  const total = min1 + min2;

  return total <= money ? money - total : money;
};
