var maxJumps = function (arr, d) {
	const n = arr.length;
	const memo = {};

	const dfs = (i) => {
		if (memo[i] !== undefined) return memo[i];

		let max = 1;

		// go right
		for (let j = i + 1; arr[i] > arr[j] && j <= Math.min(n - 1, i + d); j++) {
			max = Math.max(max, 1 + dfs(j)) // count by +1
		}

		// go left
		for (let j = i - 1; arr[i] > arr[j] && j >= Math.max(0, i - d); j--) {
			max = Math.max(max, 1 + dfs(j)) // count by +1
		}

		memo[i] = max;
		return max;
	}

	let result = 1;
	for (let i = 0; i < n; i++) {
		result = Math.max(result, dfs(i));
	}
	return result;
}