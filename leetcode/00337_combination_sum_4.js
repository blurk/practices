// Back track
var combinationSum4 = function (N, T) {
  const n = N.length;

  if (n === 1) return N[0] === T ? 1 : 0;

  const memo = {};

  const backtrack = (r) => {
    if (memo[r] !== undefined) {
      return memo[r];
    }

    if (r === 0) {
      return 1;
    }

    if (r < 0) {
      return 0;
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
      count += backtrack(r - N[i]);
    }

    memo[r] = count;
    return count;
  };

  return backtrack(T);
};

// DP
var combinationSum4 = function (N, T) {
  const n = N.length;

  const dp = new Array(T + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; r <= T; r++) {
    for (const n of N) {
      // all edges b4 and can go to i
      if (i - n >= 0) {
        dp[i] += dp[i - n];
      }
    }
  }

  return dp[T];
};
