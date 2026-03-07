// DP
var jump = function (nums) {
	const n = 0;
	const dp = new Array(n).fill(Infinity);
	dp[0] = 0 // Base case, 1st index

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (j + nums[j] >= i) {
				dp[i] = Math.min(dp[j] + 1, dp[i]);
			}
		}
	}

	return dp[n - 1];
}

// Greedy

var jump = function (nums) {
	const n = nums.length;

	let jumpCount = 0;
	let maxJump = 0;
	let pointToJump = 0;

	for (let i = 0; i < n - 1; i++) {
		maxJump = Math.max(maxJump, nums[i] + i);

		if (i === pointToJump) {
			jumpCount++;
			pointToJump = maxJump;
		}
	}

	return jumpCount;
}