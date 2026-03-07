var canReach = function (arr, start) {
	const n = arr.length;
	const queue = [start];
	const visited = new Set([start])

	while (queue.length !== 0) {
		const size = queue.length;

		for (let i = 0; i < size; i++) {
			const currentIndex = queue.shift();

			if (arr[currentIndex] === 0) return true;

			const possibleNextMoves = [currentIndex + arr[currentIndex], currentIndex - arr[currentIndex]]

			for (const move of possibleNextMoves) {
				if (move >= 0 && move < n && !visited.has(move)) {
					visited.add(move)
					queue.push(move)
				}
			}
		}
	}

	return false;
}