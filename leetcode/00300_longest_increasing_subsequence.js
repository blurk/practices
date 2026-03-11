// DP
var lengthOfLIS = function (nums) {
  const n = nums.length;

  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max.apply(null, dp);
};

var lengthOfLIS = function (nums) {
  const n = nums.length;

  const sub = [];

  for (const num of nums) {
    let left = 0,
      right = sub.length;

    while (left < right) {
      let mid = Math.trunc((left + right) / 2);
      if (sub[mid] < num) left = mid + 1;
      else right = mid;
    }

    if (left < sub.length) sub[left] = num;
    else sub.push(num);
  }

  return sub.length;
};
