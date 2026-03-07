// DP
var canJump = function (nums) {
	const n = nums.length;
	const dp = new Array(n).fill(0);
	dp[0] = true;

	for (let i = 0; i < n; i++) {
		if (dp[i]) {
			const maxJump = nums[i]
			for (let j = 1; j <= maxJump; j++) {
				const possibleNextNode = i + j;
				dp[possibleNextNode] = true;
			}
		}
	}

	return dp[n - 1];
}

// Greedy
var canJump = function (nums) {
	const n = nums.length;
	let maxJump = nums[0];

	for(let i = 0; i < n; i++) {
		if(i > maxJump) return false;

		maxJump = Math.max(maxJump, nums[i] + i);
	}

	return true;
}