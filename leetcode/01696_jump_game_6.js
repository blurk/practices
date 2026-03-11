// DP
var maxResult = function (nums, k) {
  let n = nums.length;
  const dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];

  for(let i = 1; i < n; i++) {
    let currentMax = -Infinity;

    for(let j = Math.max(0, i - k); j < i; j++) {
      currentMax = Math.max(currentMax, dp[j]);
    }

    dp[i] = currentMax + nums[i];
  }

  return dp[n - 1]
};

// DP and queue
var maxResult = function (nums, k) {
  let n = nums.length;
  const dp = new Array(n).fill(-Infinity);
  dp[0] = nums[0];
  const queue = [0];

  for (let i = 1; i < n; i++) {
    if (queue[0] < i - k) queue.shift();

    dp[i] = dp[queue[0]] + nums[i];

    while (queue.length !== 0 && dp[i] >= dp[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);
  }

  return dp[n - 1]
};